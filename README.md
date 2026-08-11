# ⚽ Futbol Sezon Simülatörü

Tamamen çevrimdışı çalışan, tek dosyalık (framework'süz) sezon simülatörü. İki ayrı sürüm var; ikisi de aynı motoru ve aynı özellikleri paylaşır, yalnızca içerikleri farklıdır ve **birbirinden bağımsız kayıt tutarlar**:

| Dosya | Lig | Kupa | Takım | Hafta |
|---|---|---|---|---|
| `seriea.html` | 🇮🇹 Serie A | Coppa Italia | 20 | 38 |
| `superlig.html` | 🇹🇷 Trendyol Süper Lig | Türkiye Kupası | 18 | 34 |

İstediğin dosyayı tarayıcıda açman yeterli. İkisini aynı anda kullanabilirsin; kayıtlar ayrı localStorage anahtarlarında tutulur, birbirini bozmaz.

Depoda ayrıca bambaşka bir oyun var: **[`warband.html`](#️-kalradya--warband-simülatörü-warbandhtml)** — Mount & Blade Warband esintili, her şeyine müdahale edebildiğin bir Kalradya sandbox'ı.

## 🇹🇷 Süper Lig sürümü (`superlig.html`)

2026-27 sezonundan başlar ve **Ağustos 2026 itibarıyla güncel** verilerle kurulur:

- **18 takım** — Galatasaray, Fenerbahçe, Trabzonspor, Beşiktaş, İstanbul Başakşehir, Göztepe, Samsunspor, Çaykur Rizespor, Konyaspor, Kocaelispor, Alanyaspor, Gaziantep FK, Kasımpaşa, Gençlerbirliği, Eyüpspor ve 1. Lig'den yükselen Erzurumspor, Amed SF, Çorum FK. Güç sıralaması 2025-26 sezonunun bitiş sırasından türetilir
- **34 hafta**, 3 takım küme düşer, yerlerine 1. Lig havuzundan 3 takım gelir
- **Gerçek stadyumlar ve kapasiteler** — RAMS Park 53.978, Chobani Stadyumu Şükrü Saracoğlu 47.430, Tüpraş Stadyumu 42.445, Papara Park 40.980, Medaş Konya Büyükşehir 41.600, Kocaeli Stadyumu 34.829, Samsun Yeni 19 Mayıs 34.303, Gaziantep Stadyumu 33.502, Diyarbakır Stadyumu 33.000 … Alanya Oba 9.727. Kapasite iç saha avantajını belirler
- **Kulüp künyeleri** — kuruluş yılı, şehir ve lakap (Beşiktaş 1903 · Kara Kartal, Trabzonspor 1967 · Bordo-Mavi, Göztepe 1925 · Göz-Göz…)
- **Gerçek kupa sayıları** — Galatasaray 26 Süper Lig / 19 Türkiye Kupası, Fenerbahçe 19/7, Beşiktaş 16/11, Trabzonspor 7/10; alt lig ekiplerinin kupaları da (Kocaelispor 2, Ankaragücü 2, Altay 2…) arşivde durur
- **Türkiye Kupası** — 18 Süper Lig takımı + alt liglerden 14 konuk = 32 takım, Son 32'den finale turnuva ağacı
- **Avrupa yolu Türkiye'ye göre** — kontenjanlar değer sırasıyla dağıtılır ve her kulüp hak ettiği en iyi slotta kalır:
  - **Şampiyon** → doğrudan Şampiyonlar Ligi lig aşaması
  - **2.** → ŞL için **iki eleme turu + play-off**
  - **Kupa şampiyonu** → Avrupa Ligi **play-off**'u
  - **3.** → Avrupa Ligi eleme turu · **4.** → Konferans Ligi play-off'u
  Kupa şampiyonu ligi ilk 4'te bitirdiyse alt sıralar birer basamak yükselir ve **5. sıra da Avrupa'ya açılır** (örn. 3. bitirip kupayı alan Trabzonspor AL play-off'una gider, AL elemesine 4., KL play-off'una 5. gider). Şampiyon aynı zamanda kupayı da kazandıysa ŞL yerini korur, kupa kontenjanı aşağı kayar. Kupayı alt lig ekibi kazandıysa ya da kupa şampiyonu küme düştüyse kontenjan yine lige devredilir
- **Ön eleme turları oynanır** — Avrupa sekmesinde her temsilcinin yolu ayrı bir kart: hangi turdan başladığı, çift maçlı eşleşmeleri (skorları elle de girebilirsin), toplam skor ve nereye gittiği. Elenen takım UEFA'daki gibi **bir alt kulvarın sırasındaki turuna düşer** (ŞL play-off'unu kaybeden Avrupa Ligi lig aşamasına, AL play-off'unu kaybeden Konferans Ligi'ne); yalnızca KL play-off'unu kaybeden Avrupa'ya veda eder. Turlar 0., 1. ve 2. lig haftalarında oynanır; **lig aşaması kadroları ancak elemeler bittiğinde belirlenir**
- **Puan tablosunda gerçek yol** — renkli çizgiler pozisyona değil, o takımın gideceği tura göre çizilir: koyu mavi doğrudan ŞL, açık mavi ŞL eleme, turuncu Avrupa Ligi (eleme ya da play-off), yeşil Konferans Ligi play-off. Kupa şampiyonu belli olunca kontenjan kayması tabloya anında yansır. Tablonun altındaki satır her sırayı adıyla ve gideceği turla yazar, satırın üstüne gelince de aynı bilgi çıkar
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
- **Avrupa kupaları (güncel UEFA formatı)** — **ilk sezonda oynanmaz**; ikinci sezonda, Avrupa'ya gidecek takımlar belli olduğunda başlar. Kendi sekmesinde Şampiyonlar Ligi, Avrupa Ligi ve Konferans Ligi. Her biri **36 takımlı İsviçre sistemi lig aşamasıyla** başlar: her takım 8 farklı rakiple, 4 iç 4 dış sahada oynar, tek puan tablosunda sıralanır. Ardından **1-8 doğrudan Son 16'ya**, **9-24 eleme turuna**, 25-36 elenir; Son 16 → Çeyrek → Yarı → Final. Eleme turundan yarı finale kadar tüm eşleşmeler **çift maçlıdır** (biri iç, biri dış saha): tur, iki maçın **toplam skoruna** göre belirlenir; toplam eşitse **uzatma**, uzatma da eşitse **penaltı** devreye girer. Final tek maçtır. Lig aşamasında ilk 8'e giren takım rövanşı kendi evinde oynar. 140+ gerçek Avrupa kulübü kendi güç ve renkleriyle. Kotalar geçen sezon sıralamasından ve ülkenin UEFA sıralamasından belirlenir: Serie A'da ilk 4 doğrudan ŞL lig aşamasına, 5. + kupa şampiyonu AL'ye, 6. KL'ye girer; Süper Lig'de yalnızca şampiyon doğrudan girer, diğer temsilciler ön eleme oynar (yukarıya bak). Maç günleri ve turlar lig haftalarıyla ilerler, skorları elle de girebilirsin
- **Maç detay arşivi** — oynanmış her maçta "⚽ detay" ile dakikalı gol dökümü (golcü, asist, o anki skor) ve altında **Önemli İstatistik** paneli: topa sahip olma çubuğu, xG, toplam/isabetli şut, ceza sahası dokunuşları, büyük fırsatlar, tutarlı pas, kart ve korner. İstatistikler maçın hikâyesini bilir: sürpriz sonuçta kaybeden favori topa sahip olup 20+ şut çeker, öne geçen zayıf takım geri çekilir, hücumcu hocanın takımı daha çok şut ve xG üretir; üstte tek cümlelik maç özeti çıkar. **🔄 Yenile** ile istatistikleri yeniden üretebilir (şut aralığı 7-28), **✏️ Elle düzenle** ile her değeri tek tek kendin yazabilirsin — seçimin kaydedilir. **xG elle girilmez**: şut, isabetli şut, büyük fırsat, gol sayısı ve hocanın tarzından otomatik türetilir, diğer istatistikleri değiştirdiğinde kendiliğinden yeniden hesaplanır
- **Gol düzenleyici** — maç detayındaki "✏️ Golleri düzenle" ile her golün **dakikasını**, **golcüsünü** ve **asistini** kendin seçebilirsin; liste dakikaya göre yeniden sıralanır, gol krallığı ve asist tabloları anında güncellenir. Dokunmazsan her şey otomatik işler
- **Manşetler** — her hafta en çarpıcı maç için gerçek golcüleri ve skoru kullanan bir manşet üretilir ("SÜRPRİZ: CREMONESE, CONTARINI GOLLERİYLE DEVİ DEVİRDİ!"), Türkçe ek uyumuyla. Skoru elle değiştirirsen manşet ve özet anında yeniden yazılır. Haberler sekmesinde kategori filtreleri ve "son dakika" vurgusu var
- **Takım düzenleyici** — takım detayındaki "⚙️ Takımı düzenle" ile adı, armasını (renk + desen), gücünü, teknik direktörünü, stadyumunu (ad + kapasite) ve **kulüp künyesini** (kuruluş yılı, şehir, lakap) anında değiştirebilirsin; güç değişimi tüm kadroya yansır
- **Kulüp künyesi** — her takımın kuruluş yılı, şehri ve lakabı vardır (Como 1907 · Lariani, Atalanta 1907 · La Dea); takım detayında stadyum kartının yanında görünür
- **Yönetim hedefi** — her kulübe sezon başında bir hedef atanır (Şampiyonluk / İlk 4 / İlk 6 / İlk 10 / İlk 14 / Ligde kalmak) ve düzenleyiciden değiştirilebilir. Takım detayında "hedefin 3 sıra üstünde" gibi canlı bir karne görürsün; sezon sonunda hedefin çok altında kalan kulüplerde teknik direktör değişme ihtimali artar ve haberlerde "Yönetim karnesi" çıkar
- **Stadyumlar** — her takımın gerçek stadyum adı ve kapasitesi vardır; kapasite iç saha avantajını belirler (Como'nun 8.368'lik stadyumu +1.8, San Siro +4.8). Kapasiteyi büyütmek takımın ev sahibi gücünü gerçekten artırır
- **Karşılaştırma ekranı (H2H)** — kendi sekmesinde iki takım seçersin ve tüm zamanlar dökümünü görürsün: toplam maç, hangi takımın kaç galibiyeti, beraberlik, atılan/yenilen gol, maç başı gol, iki tarafın en farklı galibiyeti ve son beş karşılaşmanın formu. Altında **kulvara göre** (lig / ulusal kupa / ŞL / AL / KL) ve **sahaya göre** (kimin evinde) ayrı tablolar, en altta da **her karşılaşmanın listesi**: sezon başlıklarıyla gruplanmış, kupa maçlarında tur adı ve uzatma/penaltı skoru, çift maçlı Avrupa eşleşmelerinde "ilk maç / rövanş" etiketiyle. Kulvar çipleriyle filtrelenir. Derbiler için de (Galatasaray–Fenerbahçe) sıradan eşleşmeler için de çalışır; takım detayındaki "⚔️ Karşılaştır" düğmesi o takımı seçili getirir
- **Kalıcı maç arşivi** — her sezon sonunda o sezonun **tüm** maçları (lig + kupa + Avrupa) arşive yazılır, sezonlar geçse de silinmez. Bu özellikten önce yapılmış kayıtlarda geçmiş sezonların lig maçları eski takım arşivinden geri türetilir; o sezonların kupa ve Avrupa maçları hiç kaydedilmemişti, bu yüzden yalnızca bundan sonraki sezonlarda görünür
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

## ⚔️ Kalradya — Warband Simülatörü (`warband.html`)

Depodaki ikinci oyun ailesi: Mount & Blade **Warband** esintili, tek dosyalık bir **Kalradya sandbox'ı**. Futbol simülatörlerinden tamamen bağımsız çalışır, kendi kaydını (`kalradya_save_v1`) tutar. Sen bir lord değil, dünyanın **dışarıdan müdahale eden** eli oluyorsun: haritayı izler, dilediğin an her şeyi değiştirir, istersen sıfırdan yeni lordlar, şehirler ve krallıklar kurarsın.

### Harita

- **Tam Kalradya haritası** — el çizimi kıyı çizgisi, biyomlara göre üretilen arazi (kuzeyde karlar, ortada ovalar, güneybatıda dağlar, doğuda bozkır, güneyde çöl), nehirler, dağ sıraları ve ormanlar. Krallık sınırları yerleşimlerin etki alanından hesaplanır, toprak el değiştirdikçe anında yeniden çizilir
- **Okunur simgeler** — şehirler surlu şehir silueti, kaleler burçlu kule, köyler çatılı ev olarak çizilir; ordular **sancak** taşır, sancağın altında asker sayısı yazar, kralın sancağı ayrı görünür. Kuşatmalarda surların çevresine **çadırlar** dizilir ve kuşatma ilerlemesi halka olarak dolar
- **Savaş izleri** — bir çarpışma olduğu yerde haritada birkaç gün duran **⚔ işareti** kalır; üstüne tıklayınca o savaşın raporu açılır
- **İpucu balonu** — imleci bir şehrin ya da ordunun üstüne getirince adı, krallığı, asker sayısı ve ne yaptığı anında görünür
- **Parşömen modu** — tek düğmeyle harita eski bir çizim haritasına döner: sepya araziler, kahverengi kıyı hâlesi, kağıt dokusu
- **Yollar, kervanlar, şantiyeler** — yol ağı, yük arabası simgeleriyle kervanlar ve ilerleme çubuklu inşaat şantiyeleri haritada görünür
- **Başkent tacı, kral yıldızı, mareşal işareti** — başkentin üstünde altın taç, kralın sancağında yıldız ve daha büyük simge, mareşalin sancağında çift şerit
- **Kamera takibi** — bir orduyu seçip 🎥 ile kilitlersin, sefer boyunca kamera peşinden gider
- **Krallık adları** — sol üstteki *Krallık adı* katmanı, her krallığın adını kendi topraklarının ortasına yazar; yazı bölgenin büyüklüğüne göre büyür, dar bölgelerde kısa ada düşer, sınırlar değiştikçe yeri ve boyu kendiliğinden güncellenir
- **144 yerleşim** — **21 şehir** (Praven, Uxkhal, Suno, Dhirim, Reyvadin, Curaw, Khudan, Rivacheg, Sargoth, Tihr, Wercheg, Jelkala, Yalen, Veluca, Shariz, Durquba, Ahmerrad, Tulga, Halmar, Narra, Ichamur), **30 kale** ve **93 köy**; her şehir/kalenin bağlı köyleri vardır

### Dünya

- **Altı krallık + doğan yenileri** — Swadya (turuncu), Vaegir (soluk gri), Kherjit Hanlığı (mor), Nord (mavi), Rodok (yeşil), Sarranid Sultanlığı (sarı). Her krallığın **başkenti** vardır (haritada altın taçla işaretlenir); başkent kuşatılırsa prestij düşer, lordlar savunmaya koşar, halk huzursuzlanır, düşerse krallık sarsılır ve başkent taşınır
- **84 lord, hanedanlarıyla** — her lordun hanesi, yaşı, eşi ve çocukları vardır. Yaşlanır, hastalanır, savaşta yaralanır ve **ölürler**; yetişkin çocuk varsa tımarları devralır, yoksa krala kalır
- **Veraset ve seçim** — Swadya, Vaegir, Rodok ve Sarranid'de taht babadan oğula geçer; Nord ve Kherjit'te **kurultay toplanır ve lordlar oy verir** (oy ağırlığı tımar ve şöhretle, tercih akrabalık ve dostlukla belirlenir). Kaybeden adaylar küser, kazanan meşruiyet kazanır. Veraset düzeni krallık kartından değiştirilebilir
- **Tımar siyaseti** — fethedilen her şehir/kale bir lorda verilmek zorundadır. Adaylar şöhret, sadakat, topraksızlık ve fethi yapan olma durumuna göre sıralanır; seçilen lordun sadakati artar, es geçilenler küser. Ayarlardan "**fetihte tımarı bana sor**" seçeneğini açarsan kararı sen verirsin
- **İç savaş** — kralına küsen şöhretli bir lord **taht iddiacısı** olur; yeterince lord arkasında toplanırsa ayaklanır ve kendi hanedan devletini kurup topraklarıyla birlikte kopar. Tutunamayan isyancı devletler bir yıl içinde yeniden yutulur
- **Lord ilişkileri ve şölenler** — lordların birbirleriyle ilişkisi vardır; kişilikler çatışır, aynı haneden olanlar kenetlenir. Barış zamanı kral şölen verip gönül alır
- **Fidye** — esir düşen lord için krallığı fidye öder, ödeyemezse esaret süresi dolana kadar zindanda kalır
- **Ticaret** — köyler biyomlarına göre **14 farklı mal** üretir (tahıl, kürk, demir, ipek, baharat…), şehirlerde arz-talebe göre fiyat oluşur ve **kervanlar** kârlı rotalarda yola çıkar. Kervanı haydutlar basabilir; savaş ticaret yollarını kurutur
- **Yollar** — şehir ve kaleleri bağlayan yol ağı haritada çizilir, ordular yol üzerinde **%32 daha hızlı** gider
- **İnşaat** — zengin ve barış içindeki krallıklar boş arazilere **yeni köy, kale ve şehir** kurar. Şantiye haritada ilerleme çubuğuyla görünür, düşman yaklaşırsa inşaat durur. Sandbox'tan sen de istediğin yere inşaat başlatabilirsin
- **Deniz akınları** — Nord ve Sarranid savaştayken denize açılıp kıyı köylerini vuran akıncı filoları gönderir
- **Yaşayan simülasyon** — köy yağmaları, meydan savaşları, kuşatmalar, esirler, huzursuzluktan doğan köylü isyanları, veba/kıtlık/yangın gibi olaylar, krallık hazineleri, garnizon takviyeleri ve barış görüşmeleri. Kışın ordular yavaşlar

### Hanedanlar, seçimler ve saray

- **Hanedanlar birinci sınıf** — her lord bir hanedana bağlıdır; hanedanın kendi **rengi**, **arması** (desen + sembol, üretilmiş heraldik kalkan), prestiji, başı ve üyeleri vardır. Güç, üyelerinin tımarına ve şöhretine göre hesaplanır. Şöhretli lordlar kendi hanedanlarını kurup ana koldan kopar; son üyesi ölen hanedanın soyu tükenir
- **Krallık rengi hüküm süren hanedanın rengidir** — Kherjit moru taşırken kırmızı bir hanedan tahta çıkarsa krallık kırmızıya döner, harita ve efsane anında güncellenir. Ayarlardan kapatılabilir
- **Detaylı seçimler** — üç tür: **taht (kurultay)**, **tımar divanı**, **mareşal seçimi**. Seçim bir süreçtir: önce **kampanya** günleri (adaylar lordlarla pazarlık eder, söz alır, reddedilir — bunlar diyalog olarak okunabilir), sonra oylama. Her seçicinin oy ağırlığı tımarı ve şöhretiyle, tercihi ise **hanedan bağı, kişisel dostluk, krala sadakat, evlilik bağı, kan davası, verilmiş söz, cömertlik beklentisi** gibi gerekçelerle belirlenir. Sonuç ekranında **kim kime, hangi gerekçeyle oy verdi** tek tek yazar
- **Seçim sonrası** — sonucun ardından altı ayrı yol açılabilir: sükûnet, kırgınlık, **hanedan kan davası**, **isyan bayrağı**, sürgün ya da **iç savaş**. Yakın yarış, güçlü kaybeden hanedan ve dışarıdan yapılan müdahale bu ihtimalleri artırır
- **İsyan bayrağı** — seçimi kaybeden hanedan, krallık kurmadan bayrak açabilir: topraksız ama gerçek bir asi ordusu haritada dolaşır, bir şehir alırsa gerçek krallığa dönüşür, ordusu biterse dağılır
- **Kan davası** — hanedanlar arasında husumet birikir; eşik aşılınca **aynı krallığın içindeyken bile** birbirlerinin ordularına saldırırlar. Savaş meydanında dökülen kan ve seçim husumeti davayı besler, zamanla soğur
- **Evlilikler** — hanedanlar çocuklarını evlendirir: husumet siler, ilişkileri yükseltir, prestij kazandırır. Krallıklar arası evlilik yakınlaşma ve saldırmazlık getirir, ayrıca **taht üzerinde hak** doğurur — varissiz ölen bir kralın tahtını yabancı hanedan talep edip savaş açabilir
- **Diyaloglar** — krallar, hanedan başları ve lordlar arasında gerçek konuşmalar üretilir: seçim pazarlığı, reddedilen ittifak, tahta çıkış, kan davası, evlilik teklifi, azarlama, tımar bahşi, savaş ilanı, barış görüşmesi, isyan ve bağlılık yemini. Krallık kartındaki **Divan** bölümünden ya da Krallıklar sekmesinden açılıp okunur
- **Sandbox'tan seçim yönetimi** — istediğin krallıkta istediğin türde seçim başlat, kampanyayı atlayıp hemen oylat, **kazananı sen belirle** (sonuç "müdahale" damgasıyla kaydedilir) ve **seçim sonrasında ne olacağını** önceden seç. Hanedan kartından kan davası başlat, evlilik ayarla, isyan bayrağı açtır
- **Yıllık vakayiname** — her yılın sonunda tarihçi kalemiyle birkaç cümlelik özet yazılır ve Tarih sekmesinde birikir

### Diplomasi ve yapay zekâ

- **Anlaşmalar** — Saldırmazlık Paktı, Savunma İttifakı ve Saldırı İttifakı. Müttefik saldırıya uğrayınca çağrıya uyar ya da paktı bozup itibarını yakar; güçlü ve gururlu krallıklar kimseye bağlanmaz, saldırmazlık paktları zamanla süresini doldurur
- **Stratejik krallar** — her krallık dört günde bir **savaş planı** çıkarır: tehdit altındaki kendi toprağını mı savunacak, yoksa hangi düşman şehrini mi alacak. Hedef; mesafe, garnizon, sur, erzak, şehrin değeri ve başkent olup olmamasına göre puanlanır. Akıllı kral hedefinde ısrar eder, beceriksizi sık fikir değiştirir
- **Disiplinli lordlar** — lordun krala sadakati ve strateji yeteneği, krallığın planına ne kadar uyacağını belirler. Tek başına yetmeyeceğini gören lord kuşatmaya girmez; mareşalin sancağı altında toplanır ya da hedefin çevresini yağmalayıp bekler
- **Savaş taktikleri** — her komutan birliklerinin karışımına, araziye ve düşmanın diziliş türüne göre altı taktikten birini seçer (kalkan duvarı, ok yağmuru, süvari hücumu, sahte geri çekilme, tepeyi tut, dengeli). **Arazi** belirleyicidir: dağda ve ormanda süvari işe yaramaz, bozkırda uçar. Seçilen taktik savaş raporunda yazar

### Sandbox ve tarih

- **Yaratma** — yeni lord (hanedan, yaş, kişilik, yetenek, ordu), yeni şehir/kale/köy, yeni krallık, yeni ordu, haydut çetesi ve **inşaat şantiyesi**; hepsinde yeri haritaya tıklayarak seçersin
- **Olay tetikleyicileri** — veba, kıtlık, bereketli hasat, altın damarı, büyük yangın, köylü isyanı, **ecel**, suikast, ağır hastalık, saray entrikası, hazine bağışı ve **yabancı istila**. İstediğin hedefe, istediğin anda
- **Zaman makinesi** — dünya her 90 günde bir otomatik kayıt noktası alır; listeden birine dönüp aynı tarihten farklı bir müdahaleyle devam edebilirsin
- **Tarih sekmesi** — krallıkların toprak, ordu ve hazine grafikleri; savaş, kuşatma, ölen lord, kurulan yerleşim ve seçim sayaçları; yıl yıl gruplanmış vakayiname
- **Hazır senaryolar** — Büyük Savaş, Uzun Barış, Tek İmparatorluk, Karanlık Çağ, Veraset Krizi
- **Toplu düzenleme** — "bütün Rodok kalelerinin suru 100" gibi tek hamlede yüzlerce yerleşim
- **Birlik ağacı düzenleyici** — birliklerin adını, gücünü, sınıfını değiştir ya da kendi asker tipini yarat
- **Anlaşma masası** — istediğin iki krallığa istediğin paktı imzalat ya da bozdur
- **Simülasyon ayarları** — ölümcüllük, asker toplama, ekonomi, saldırganlık, haydut yoğunluğu, **yapay zekâ keskinliği**, ticaret, inşa hevesi, olay sıklığı ve ölümlülük kaydırıcıları

### Arayüz

Beş sekme: **Seçim** (tıkladığın birim ya da hiçbir şey seçili değilken Kalradya panosu), **Krallıklar** (güç sıralaması, savaş durumu, diplomasi tablosu, lord listesi), **Savaşlar** (savaş defteri ve vakayiname), **Tarih** (grafikler ve yıl yıl kronik), **Sandbox** (yaratma ve müdahale araçları). Kaydetme localStorage'da, JSON dışa/içe aktarma, tohumla yeni dünya kurma, açık/koyu tema, mobilde alttan yükselen panel ve PWA desteği (`warband-manifest.webmanifest`, `warband-sw.js`).

Yerleşim adları ve krallıklar Warband'in Kalradya'sından esinlenmiştir; harita yerleşimi stilize edilmiş bir yeniden yorumdur, birebir kopya değildir.

## Notlar

- `warband.html` diğer iki oyundan bağımsızdır; kendi `kalradya_save_v1` anahtarını kullanır, futbol kayıtlarını etkilemez.
- Oyuncu isimleri kurgusal kombinasyonlardır; gerçek futbolculardan bağımsızdır.
- Puan eşitliğinde önce ikili averaj (head-to-head) uygulanır — hem Serie A'nın hem TFF'nin gerçek kuralı.
- Kupa sayıları (Scudetto / Coppa Italia, Süper Lig / Türkiye Kupası) 2026-27 başlangıcındaki gerçek değerlerle başlar, simülasyonla birikir.
- İki sürüm ayrı kayıt anahtarları kullanır (`serie_a_*` ve `super_lig_*`); birini sıfırlamak diğerini etkilemez.
