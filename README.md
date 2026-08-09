# ⚽ Futbol Sezon Simülatörü

Tamamen çevrimdışı çalışan, tek dosyalık (framework'süz) sezon simülatörü. İki ayrı sürüm var; ikisi de aynı motoru ve aynı özellikleri paylaşır, yalnızca içerikleri farklıdır ve **birbirinden bağımsız kayıt tutarlar**:

| Dosya | Lig | Kupa | Takım | Hafta |
|---|---|---|---|---|
| `seriea.html` | 🇮🇹 Serie A | Coppa Italia | 20 | 38 |
| `superlig.html` | 🇹🇷 Trendyol Süper Lig | Türkiye Kupası | 18 | 34 |

İstediğin dosyayı tarayıcıda açman yeterli. İkisini aynı anda kullanabilirsin; kayıtlar ayrı localStorage anahtarlarında tutulur, birbirini bozmaz.

## 🇹🇷 Süper Lig sürümü (`superlig.html`)

2026-27 sezonundan başlar ve **Ağustos 2026 itibarıyla güncel** verilerle kurulur:

- **18 takım** — Galatasaray, Fenerbahçe, Trabzonspor, Beşiktaş, İstanbul Başakşehir, Göztepe, Samsunspor, Çaykur Rizespor, Konyaspor, Kocaelispor, Alanyaspor, Gaziantep FK, Kasımpaşa, Gençlerbirliği, Eyüpspor ve 1. Lig'den yükselen Erzurumspor, Amed SF, Çorum FK. Güç sıralaması 2025-26 sezonunun bitiş sırasından türetilir
- **34 hafta**, 3 takım küme düşer, yerlerine 1. Lig havuzundan 3 takım gelir
- **Gerçek stadyumlar ve kapasiteler** — RAMS Park 53.978, Chobani Stadyumu Şükrü Saracoğlu 47.430, Tüpraş Stadyumu 42.445, Papara Park 40.980, Medaş Konya Büyükşehir 41.600, Kocaeli Stadyumu 34.829, Samsun Yeni 19 Mayıs 34.303, Gaziantep Stadyumu 33.502, Diyarbakır Stadyumu 33.000 … Alanya Oba 9.727. Kapasite iç saha avantajını belirler
- **Kulüp künyeleri** — kuruluş yılı, şehir ve lakap (Beşiktaş 1903 · Kara Kartal, Trabzonspor 1967 · Bordo-Mavi, Göztepe 1925 · Göz-Göz…)
- **Gerçek kupa sayıları** — Galatasaray 26 Süper Lig / 19 Türkiye Kupası, Fenerbahçe 19/7, Beşiktaş 16/11, Trabzonspor 7/10; alt lig ekiplerinin kupaları da (Kocaelispor 2, Ankaragücü 2, Altay 2…) arşivde durur
- **Türkiye Kupası** — 18 Süper Lig takımı + alt liglerden 14 konuk = 32 takım, Son 32'den finale turnuva ağacı
- **Avrupa kotası Türkiye'ye göre** — şampiyon ve 2. Şampiyonlar Ligi'ne, 3. ile kupa şampiyonu Avrupa Ligi'ne, 4. Konferans Ligi'ne (kupa şampiyonu zaten kotaya girdiyse sıra bir alttakine kayar). Puan tablosunda bu bölgeler renkli çizgiyle işaretlenir
- **Derbiler** — dört büyükler arasındaki altı eşleşme, İstanbul (Kasımpaşa–Eyüpspor), Anadolu (Amed SF–Erzurumspor, Göztepe–Alanyaspor) maçları derbi sayılır ve sınıf farkı yarıya iner
- **Türkçe dil bilgisi** — manşetlerdeki ekler ünlü uyumuna göre üretilir; kısaltmalar okunuşuna göre çekilir (**Gaziantep FK'yı**, **Amed SF'yi**), sert ünsüzden sonra ayrılma eki sertleşir (**Beşiktaş'tan**), iyelik ekiyle biten adlar kaynaştırma alır (**Gençlerbirliği'ni**, **Gençlerbirliği'nden**)
- **Kurgusal oyuncu ve teknik direktör isimleri** — Türkçe ad-soyad havuzundan üretilir, gerçek kişilerden bağımsızdır
- **Gece teması** — koyu tema Türk kırmızısı vurgusuyla gelir

24 sezonluk ölçüm: güç–bitiş sırası korelasyonu **0.837**, şampiyonun ortalama güç sırası **2.46**, şampiyon ortalama **79.4 puan** (34 maçta), sonuncu 17.6 — Süper Lig'in gerçek bantlarıyla örtüşüyor.

## Ortak özellikler

- **Lig simülasyonu** — form ağırlıklı güç modeli + Poisson skor üretimi, canlı maç modu (dakika dakika goller, golcü isimleri), haftalık/sezonluk simülasyon, elle skor girişi
- **Oyuncu sistemi** — her takımda 18 kişilik kurgusal kadro; gol/asist ataması, gol & asist krallığı, yaşlanma, gelişim ve 35+ yaşta emeklilik
- **Transfer piyasası** — sezon aralarında kulüpler oyuncu alıp satar, düşen takımların yıldızları büyük kulüplere gider, kadrolar altyapıdan gençlerle tamamlanır; takım gücü kadrodan hesaplanır
- **Ulusal kupa** (Coppa Italia / Türkiye Kupası) — kendi sekmesinde, **turnuva ağacı** olarak: lig takımları + alt liglerden gelen konuklarla **32 takım, 31 maç**. Solda yarısı, sağda yarısı, final ortada; her eşleşme kutucuğunda takımlar altlı üstlü, sağlarında skor kutuları. Tek maç eleme; berabere biterse **uzatma** satırı, uzatma da eşitse **penaltı** satırı kendiliğinden açılır. Skorları elle girebilir ya da "Turu oynat" ile kalanları simüle edebilirsin
- **Turnuva ağacı** — kupa ve Avrupa eleme turları aynı ağaç arayüzünü kullanır. **Gerçek bir şema gibi okunur**: üst üste duran iki eşleşmenin galipleri bir sonraki turda birbiriyle oynar ve o kutu tam ikisinin ortasına hizalanır (Fiorentina–Frosinone ile Genoa–Lecce'nin galipleri Son 16'da karşılaşır). Her takımın arması adının solunda, kupada alt lig ekipleri "ALT LİG", Avrupa'da kendi liginin temsilcileri rozetle işaretlenir; oynanmış eşleşmelerde kazananın adı kalın, elenen soluk; çift maçlı eşleşmelerde kutunun altında "Toplam 3-2" satırı; skoru yazdığın anda uzatma/penaltı satırları ve toplam yeniden hesaplanır (odak kaybolmadan)
- **Sakatlık & ceza sistemi** — her hafta sakatlıklar ve kırmızı kart cezaları oluşur, eksik oyuncular takım gücünü düşürür, gol atamaz; kadroda rozetle ve kalan hafta sayısıyla gösterilir
- **Teknik direktörler** — her takımın kurgusal teknik adamı, tarzı ve yetkinliği vardır. **Tarz maça yansır**: iki savunmacı hocanın maçı kilitli geçer (maç başı ~2.5 gol, beraberlik oranı en yüksek band), iki hücumcununki gol düellosuna döner (~3.2 gol), dengeli hocalar ikisinin arasında kalır, genç yetiştiren hoca kadrodaki gençleri hızlı geliştirir. Kötü giden takımlarda görevden ayrılma/işe alma haberleri çıkar, yeni gelen kısa süreli motivasyon sıçraması getirir
- **Gerçekçi maç motoru** — beklenen goller iki takımın gücünün farkından türetilir (güçlü takım hem çok atar hem az yer); form, sezon puan ortalaması, momentum, sakatlıklar ve yorgunluk bunun üzerine ölçülü kaymalar yapar. Ekrandaki kazanma oranları doğrudan bu modelden gelir, yani simülasyonla birebir tutarlıdır
- **Avrupa kupaları (güncel UEFA formatı)** — **ilk sezonda oynanmaz**; ikinci sezonda, Avrupa'ya gidecek takımlar belli olduğunda başlar. Kendi sekmesinde Şampiyonlar Ligi, Avrupa Ligi ve Konferans Ligi. Her biri **36 takımlı İsviçre sistemi lig aşamasıyla** başlar: her takım 8 farklı rakiple, 4 iç 4 dış sahada oynar, tek puan tablosunda sıralanır. Ardından **1-8 doğrudan Son 16'ya**, **9-24 eleme turuna**, 25-36 elenir; Son 16 → Çeyrek → Yarı → Final. Eleme turundan yarı finale kadar tüm eşleşmeler **çift maçlıdır** (biri iç, biri dış saha): tur, iki maçın **toplam skoruna** göre belirlenir; toplam eşitse **uzatma**, uzatma da eşitse **penaltı** devreye girer. Final tek maçtır. Lig aşamasında ilk 8'e giren takım rövanşı kendi evinde oynar. 140+ gerçek Avrupa kulübü kendi güç ve renkleriyle. Kotalar geçen sezon sıralamasından ve ülkenin UEFA sıralamasından belirlenir (Serie A'da ilk 4 ŞL / 5. + kupa şampiyonu AL / 6. KL; Süper Lig'de ilk 2 ŞL / 3. + kupa şampiyonu AL / 4. KL). Maç günleri ve turlar lig haftalarıyla ilerler, skorları elle de girebilirsin
- **Maç detay arşivi** — oynanmış her maçta "⚽ detay" ile dakikalı gol dökümü (golcü, asist, o anki skor) ve altında **Önemli İstatistik** paneli: topa sahip olma çubuğu, xG, toplam/isabetli şut, ceza sahası dokunuşları, büyük fırsatlar, tutarlı pas, kart ve korner. İstatistikler maçın hikâyesini bilir: sürpriz sonuçta kaybeden favori topa sahip olup 20+ şut çeker, öne geçen zayıf takım geri çekilir, hücumcu hocanın takımı daha çok şut ve xG üretir; üstte tek cümlelik maç özeti çıkar. **🔄 Yenile** ile istatistikleri yeniden üretebilir (şut aralığı 7-28), **✏️ Elle düzenle** ile her değeri tek tek kendin yazabilirsin — seçimin kaydedilir. **xG elle girilmez**: şut, isabetli şut, büyük fırsat, gol sayısı ve hocanın tarzından otomatik türetilir, diğer istatistikleri değiştirdiğinde kendiliğinden yeniden hesaplanır
- **Gol düzenleyici** — maç detayındaki "✏️ Golleri düzenle" ile her golün **dakikasını**, **golcüsünü** ve **asistini** kendin seçebilirsin; liste dakikaya göre yeniden sıralanır, gol krallığı ve asist tabloları anında güncellenir. Dokunmazsan her şey otomatik işler
- **Manşetler** — her hafta en çarpıcı maç için gerçek golcüleri ve skoru kullanan bir manşet üretilir ("SÜRPRİZ: CREMONESE, CONTARINI GOLLERİYLE DEVİ DEVİRDİ!"), Türkçe ek uyumuyla. Skoru elle değiştirirsen manşet ve özet anında yeniden yazılır. Haberler sekmesinde kategori filtreleri ve "son dakika" vurgusu var
- **Takım düzenleyici** — takım detayındaki "⚙️ Takımı düzenle" ile adı, armasını (renk + desen), gücünü, teknik direktörünü, stadyumunu (ad + kapasite) ve **kulüp künyesini** (kuruluş yılı, şehir, lakap) anında değiştirebilirsin; güç değişimi tüm kadroya yansır
- **Kulüp künyesi** — her takımın kuruluş yılı, şehri ve lakabı vardır (Como 1907 · Lariani, Atalanta 1907 · La Dea); takım detayında stadyum kartının yanında görünür
- **Yönetim hedefi** — her kulübe sezon başında bir hedef atanır (Şampiyonluk / İlk 4 / İlk 6 / İlk 10 / İlk 14 / Ligde kalmak) ve düzenleyiciden değiştirilebilir. Takım detayında "hedefin 3 sıra üstünde" gibi canlı bir karne görürsün; sezon sonunda hedefin çok altında kalan kulüplerde teknik direktör değişme ihtimali artar ve haberlerde "Yönetim karnesi" çıkar
- **Stadyumlar** — her takımın gerçek stadyum adı ve kapasitesi vardır; kapasite iç saha avantajını belirler (Como'nun 8.368'lik stadyumu +1.8, San Siro +4.8). Kapasiteyi büyütmek takımın ev sahibi gücünü gerçekten artırır
- **Sezon sonu ödül töreni** — şampiyon, kupa ve Avrupa şampiyonları, yılın teknik direktörü, gol/asist kralı, sürpriz takım, en iyi hücum ve savunma; geçmiş sezonlardan tekrar açılabilir
- **Kalıcı kadro evrimi** — bitirilen sıra kadronun hedef seviyesini belirler: üst üste Avrupa potasında biten bir takım birkaç sezonda 72-75+ bandına tırmanır, sıralamasının çok altında kalan dev yavaşça aşınır
- **Yükselme seçimi & takım kurucu** — sezon sonunda lige yükselecek takımları listeden sen seç, ya da adını, renklerini ve kadro profilini belirlediğin kendi takımını kur (kalıcıdır, düşse bile havuzdan geri gelebilir)
- **Gerçekçi derbi takvimi** — derbi sezonun ilk üç haftasına konmaz ve hiçbir takım iki derbiyi üst üste oynamaz. Ham fikstür bu kurallara göre puanlanır ve ilk devrenin hafta sırası en iyi diziliş bulunana kadar yerel aramayla değiştirilir; ikinci devre aynı sırayı izlediği için rövanşlar da aynı düzeni alır. 60 sezonluk ölçüm: ilk üç haftada derbi %0 (önce ~%47), bir takımın üst üste derbisi sezon başına 0.00 (önce 2.75), ilk derbi ortalama 4. haftada
- **Derin gerçekçilik** — ev/deplasman form ayrımı ("ev canavarı" profili), sezon ilerledikçe sönen momentum, kupa maçı sonrası lig haftasında hafif yorgunluk
- **Üç tema** — koyu, açık ve simsiyah üçüncü tema (Serie A'da "Notte", İtalyan yeşili; Süper Lig'de "Gece", Türk kırmızısı); cam efektli yapışkan sekme çubuğu
- **Efsaneler arşivi** — tüm sezonların kariyer gol/asist toplamları (emekliler dahil) Kupalar sekmesinde birikir; fikstürde her hafta "Haftanın Maçı" öne çıkarılır
- **Momentum sistemi** — şampiyonluk ve iyi sezonlar ertesi sezona taşınan bir momentum kazandırır (kademeli söner); sürpriz şampiyon bir anda dibe çakılmaz
- **Gerçekçi simülasyon** — güç + son 5 maç formu (ağırlıklı, son maç en değerli) + galibiyet/mağlubiyet serisi + sezon geneli puan ortalaması + sezon içi ikili üstünlük (H2H) + momentum + yorgunluk + eksik oyuncular + hoca tarzı birlikte değerlendirilir, Poisson dağılımıyla sürpriz payı korunur. **Elle girdiğin skorlar da forma sayılır**: Como'ya elle 4 galibiyet 2 beraberlik yazıp sonraki haftaları simüle ettiğinde maç başı 1.52 puan toplar, averajı +0.31 olur ve 3+ farkla yenilme oranı %6.7'de kalır; aynı Como'ya 4 mağlubiyet yazarsan 0.97 puana, -0.62 averaja ve %15 yenilgi oranına düşer (120'şer maçlık ölçüm). Formda olan takım yalnızca daha çok atmaz, daha az da yer — sürpriz kapı açık kalır ama ölçülü olur
- **Taraftar oylaması** — her maç için "X kazanır / Beraberlik / Y kazanır" oylaması: on binlerce kurgusal oy, kulüp büyüklüğüne göre dağılır (zayıf takımın taraftarı da kendi takımına oy verir). Sen de oy kullanabilirsin
- **Yorumcu tahminleri** — üç yorumcu her maç için 1/X/2 tahmini yapar; tahmin rozetleri sonuç gelince ✓/✗ ile işaretlenir ve sezon boyu isabet karneleri tutulur
- **Maç maç simülasyon** — istediğin maça elle skor gir, istediğini "▶ maçı simüle et" ile tek tek oynat, kalanları haftalık simülasyonla bitir
- **Haber motoru** — derbi/sürpriz/zirve haberleri, hat-trick, matematiksel şampiyonluk, kesinleşen küme düşüşü, seri rekorları, transfer ve veda haberleri
- **İstatistik & grafikler** — Monte Carlo sezon sonu tahmini (1000 iterasyon), puan/sıralama/averaj grafikleri, sezon ve tüm zamanlar istatistikleri
- **Favori takım** — takımını seç, maçlarında taktik belirle (hücum/denge/savunma)
- **Kalıcılık** — otomatik localStorage kaydı, JSON dışa/içe aktarma, 40 sezonluk geçmiş arşivi
- **Açık/koyu tema** ve **PWA** desteği (bir sunucudan servis edildiğinde telefona kurulabilir, çevrimdışı çalışır)

## Notlar

- Oyuncu isimleri kurgusal kombinasyonlardır; gerçek futbolculardan bağımsızdır.
- Puan eşitliğinde önce ikili averaj (head-to-head) uygulanır — hem Serie A'nın hem TFF'nin gerçek kuralı.
- Kupa sayıları (Scudetto / Coppa Italia, Süper Lig / Türkiye Kupası) 2026-27 başlangıcındaki gerçek değerlerle başlar, simülasyonla birikir.
- İki sürüm ayrı kayıt anahtarları kullanır (`serie_a_*` ve `super_lig_*`); birini sıfırlamak diğerini etkilemez.
