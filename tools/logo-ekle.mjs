#!/usr/bin/env node
/*
  Kulüp logolarını superlig.html ve seriea.html içine gömer.

  Kullanım:
    npm i sharp                       (bir kez)
    node tools/logo-ekle.mjs <logo-klasörü> [seçenekler]

  Seçenekler:
    --boyut=64        kenar uzunluğu, piksel (varsayılan 64)
    --bicim=webp      webp | png (varsayılan webp — çok daha küçük)
    --kalite=82       webp kalitesi (varsayılan 82)
    --dosya=superlig.html,seriea.html
    --deneme          hiçbir şey yazmaz, yalnız eşleşme ve boyut raporu verir

  Klasördeki dosya adları takım adlarıyla eşleştirilir. Eşleşme sırası:
  birebir ad → sadeleştirilmiş ad (aksan/noktalama/büyük-küçük yok sayılır) →
  aşağıdaki ADLAR tablosu → yakın eşleşme. Eşleşmeyen takım eski çizili
  rozetinde kalır, uygulama yine çalışır.

  Betik HTML'deki LOGO-BLOGU-BASLANGIC / LOGO-BLOGU-BITIS işaretleri arasını
  baştan yazar, yani tekrar tekrar çalıştırılabilir.
*/

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('sharp kurulu değil. Önce: npm i sharp');
  process.exit(1);
}

/* Türkçeleştirilmiş adların kaynak dosyalardaki karşılıkları.
   Soldaki uygulamadaki ad, sağdakiler dosya adında aranacak alternatifler. */
const ADLAR = {
  'Bayern Münih': ['Bayern Munich', 'FC Bayern Munchen', 'Bayern Munchen'],
  'Sporting Lizbon': ['Sporting CP', 'Sporting Lisbon', 'Sporting Clube de Portugal'],
  'Marsilya': ['Marseille', 'Olympique de Marseille', 'Olympique Marseille'],
  'Slavia Prag': ['Slavia Praha', 'SK Slavia Prague', 'Slavia Prague'],
  'Sparta Prag': ['Sparta Praha', 'AC Sparta Prague', 'Sparta Prague'],
  'Kopenhag': ['Copenhagen', 'FC Kobenhavn', 'FC Copenhagen'],
  'AEK Atina': ['AEK Athens', 'AEK Athens FC'],
  'Panathinaikos': ['Panathinaikos FC', 'Panathinaikos Athens'],
  'Legia Varşova': ['Legia Warszawa', 'Legia Warsaw'],
  'Rapid Viyana': ['Rapid Wien', 'SK Rapid Vienna', 'Rapid Vienna'],
  'Levski Sofya': ['Levski Sofia', 'PFC Levski Sofia'],
  'Crvena Zvezda': ['Red Star Belgrade', 'Crvena Zvezda Belgrade'],
  'Dinamo Kyiv': ['Dynamo Kyiv', 'Dynamo Kiev'],
  'Qarabağ': ['Qarabag', 'Qarabag FK'],
  'Mönchengladbach': ['Borussia Monchengladbach', 'Monchengladbach'],
  'PSG': ['Paris Saint-Germain', 'Paris Saint Germain'],
  'Inter': ['Internazionale', 'Inter Milan', 'FC Internazionale Milano'],
  'Milan': ['AC Milan'],
  'Roma': ['AS Roma'],
  'Wolves': ['Wolverhampton Wanderers', 'Wolverhampton'],
  'Guimaraes': ['Vitoria Guimaraes', 'Vitoria SC'],
  'Standard Liege': ['Standard de Liege', 'Standard Liège'],
  'Union Saint-Gilloise': ['Royale Union Saint-Gilloise', 'Union SG'],
  'Bodø/Glimt': ['Bodo Glimt', 'FK Bodo/Glimt'],
  'Young Boys': ['BSC Young Boys', 'Young Boys Bern'],
  'Red Bull Salzburg': ['RB Salzburg', 'FC Salzburg'],
  'Viktoria Plzen': ['Viktoria Plzen', 'FC Viktoria Plzen'],
  'İstanbul Başakşehir': ['Istanbul Basaksehir', 'Basaksehir'],
  'Çaykur Rizespor': ['Rizespor', 'Caykur Rizespor']
};

/* ---------- argümanlar ---------- */
const argv = process.argv.slice(2);
const src = argv.find(a => !a.startsWith('--'));
const opt = k => { const a = argv.find(x => x.startsWith('--' + k + '=')); return a ? a.split('=')[1] : null; };
const deneme = argv.includes('--deneme');
const BOYUT = parseInt(opt('boyut') || '64', 10);
const BICIM = (opt('bicim') || 'webp').toLowerCase();
const KALITE = parseInt(opt('kalite') || '82', 10);
const DOSYALAR = (opt('dosya') || 'superlig.html,seriea.html').split(',').map(s => s.trim()).filter(Boolean);

if (!src) {
  console.error('Logo klasörü verilmedi.\n  node tools/logo-ekle.mjs <logo-klasörü> [--boyut=64] [--bicim=webp] [--deneme]');
  process.exit(1);
}
if (!fs.existsSync(src) || !fs.statSync(src).isDirectory()) {
  console.error('Klasör bulunamadı: ' + src);
  process.exit(1);
}
if (!['webp', 'png'].includes(BICIM)) { console.error('bicim webp ya da png olmalı'); process.exit(1); }

/* ---------- ad sadeleştirme ---------- */
const sade = s => s
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/ı/g, 'i').replace(/İ/g, 'i').replace(/ğ/g, 'g').replace(/Ğ/g, 'g')
  .replace(/ş/g, 's').replace(/Ş/g, 's').replace(/ö/g, 'o').replace(/Ö/g, 'o')
  .replace(/ü/g, 'u').replace(/Ü/g, 'u').replace(/ç/g, 'c').replace(/Ç/g, 'c')
  .replace(/ø/gi, 'o').replace(/æ/gi, 'ae').replace(/å/gi, 'a').replace(/ß/g, 'ss')
  .toLowerCase()
  .replace(/\b(fc|cf|sc|ac|as|ss|sk|fk|bk|if|afc|cfc|club|futbol|football|kulubu|kulübü|logo|crest|badge)\b/g, ' ')
  .replace(/[^a-z0-9]+/g, '');

/* ---------- kaynak dosyaları indeksle ---------- */
const UZANTI = /\.(png|svg|webp|jpg|jpeg|gif)$/i;
const dosyalar = [];
(function tara(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) tara(p);
    else if (UZANTI.test(e.name)) dosyalar.push(p);
  }
})(src);

if (!dosyalar.length) { console.error('Klasörde görsel yok: ' + src); process.exit(1); }

const indeks = new Map();
for (const p of dosyalar) {
  const k = sade(path.basename(p).replace(UZANTI, ''));
  if (k && !indeks.has(k)) indeks.set(k, p);
}
console.log(dosyalar.length + ' görsel bulundu (' + indeks.size + ' farklı ad)');

/* ---------- takım adlarını HTML'den çıkar ---------- */
function takimAdlari(html) {
  const ad = new Set();
  const eu = html.match(/const EURO_CLUBS = \[[\s\S]*?\n {2}\];/);
  if (eu) for (const m of eu[0].matchAll(/\['([^']+)',\s*\d+,/g)) ad.add(m[1]);
  const pp = html.match(/const PROMOTION_POOL = \[[^\]]*\];/);
  if (pp) for (const m of pp[0].matchAll(/'([^']+)'/g)) ad.add(m[1]);
  const tc = html.match(/const TEAM_COLORS = \{[\s\S]*?\n {2}\};/);
  if (tc) for (const m of tc[0].matchAll(/'([^']+)':\s*\[/g)) ad.add(m[1]);
  return [...ad];
}

/* ---------- eşleştirme ---------- */
function bul(ad) {
  const k = sade(ad);
  if (indeks.has(k)) return indeks.get(k);
  for (const alt of (ADLAR[ad] || [])) {
    const ka = sade(alt);
    if (indeks.has(ka)) return indeks.get(ka);
  }
  // yakın eşleşme: biri ötekini içeriyorsa ve yeterince uzunsa
  if (k.length >= 6) {
    let en = null, enUz = 0;
    for (const [ik, ip] of indeks) {
      if (ik.length < 5) continue;
      if (ik.includes(k) || k.includes(ik)) {
        const uz = Math.min(ik.length, k.length);
        if (uz > enUz) { enUz = uz; en = ip; }
      }
    }
    if (en) return en;
  }
  return null;
}

/* ---------- işle ---------- */
const onbellek = new Map(); // dosya yolu → data URL (aynı görsel iki uygulamada da kullanılabilir)
async function dataUrl(p) {
  if (onbellek.has(p)) return onbellek.get(p);
  let img = sharp(p, { density: 384 }).resize(BOYUT, BOYUT, {
    fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 }
  });
  const buf = BICIM === 'webp'
    ? await img.webp({ quality: KALITE, alphaQuality: 100, effort: 6 }).toBuffer()
    : await img.png({ compressionLevel: 9, palette: true }).toBuffer();
  const url = 'data:image/' + BICIM + ';base64,' + buf.toString('base64');
  onbellek.set(p, url);
  return url;
}

const kb = n => (n / 1024).toFixed(0) + ' KB';
let toplamEksik = new Set();

for (const dosya of DOSYALAR) {
  if (!fs.existsSync(dosya)) { console.log('\n' + dosya + ' — yok, atlandı'); continue; }
  const html = fs.readFileSync(dosya, 'utf8');
  const bas = html.indexOf('/* LOGO-BLOGU-BASLANGIC */');
  const bit = html.indexOf('/* LOGO-BLOGU-BITIS */');
  if (bas < 0 || bit < 0) { console.error(dosya + ': LOGO-BLOGU işaretleri bulunamadı'); process.exitCode = 1; continue; }

  const adlar = takimAdlari(html);
  const bulunan = [], eksik = [];
  for (const ad of adlar) {
    const p = bul(ad);
    if (p) bulunan.push([ad, p]); else { eksik.push(ad); toplamEksik.add(ad); }
  }

  const satirlar = [];
  for (const [ad, p] of bulunan) {
    try {
      satirlar.push("    '" + ad.replace(/'/g, "\\'") + "': '" + await dataUrl(p) + "'");
    } catch (e) {
      eksik.push(ad); toplamEksik.add(ad);
      console.log('  ! ' + ad + ' işlenemedi: ' + e.message);
    }
  }

  const blok = '/* LOGO-BLOGU-BASLANGIC */\n  const TEAM_LOGOS = {\n' + satirlar.join(',\n') + '\n  };\n  ';
  const yeni = html.slice(0, bas) + blok + html.slice(bit);

  console.log('\n' + dosya);
  console.log('  eşleşen: ' + satirlar.length + '/' + adlar.length +
    '  ·  eksik: ' + eksik.length);
  console.log('  dosya: ' + kb(Buffer.byteLength(html)) + ' → ' + kb(Buffer.byteLength(yeni)));
  if (eksik.length) console.log('  eksik takımlar: ' + eksik.slice(0, 12).join(', ') + (eksik.length > 12 ? ' … (+' + (eksik.length - 12) + ')' : ''));

  if (deneme) { console.log('  (deneme — yazılmadı)'); continue; }
  fs.writeFileSync(dosya, yeni);
  // yazdıktan sonra sözdizimi kontrolü
  const kod = yeni.match(/<script>([\s\S]*)<\/script>/);
  try { new Function(kod[1]); console.log('  sözdizimi OK, yazıldı'); }
  catch (e) { console.error('  SÖZDİZİMİ HATASI: ' + e.message); process.exitCode = 1; }
}

if (toplamEksik.size) {
  fs.writeFileSync('tools/eksik-logolar.txt', [...toplamEksik].sort((a, b) => a.localeCompare(b, 'tr')).join('\n') + '\n');
  console.log('\nEşleşmeyen ' + toplamEksik.size + ' takım tools/eksik-logolar.txt dosyasına yazıldı.');
  console.log('Bunlar eski çizili rozetlerinde kalır; dosya adını düzeltip betiği yeniden çalıştırabilirsin.');
}
