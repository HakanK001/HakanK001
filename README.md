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
- **144 yerleşim** — **21 şehir** (Praven, Uxkhal, Suno, Dhirim, Reyvadin, Curaw, Khudan, Rivacheg, Sargoth, Tihr, Wercheg, Jelkala, Yalen, Veluca, Shariz, Durquba, Ahmerrad, Tulga, Halmar, Narra, Ichamur), **30 kale** ve **93 köy**; her şehir/kalenin bağlı köyleri vardır

### Dünya

- **Altı krallık** — Swadya (Kral Harlaus), Vaegir (Kral Yaroglek), Kherjit Hanlığı (Sanjar Han), Nord (Kral Ragnar), Rodok (Kral Graveth), Sarranid Sultanlığı (Sultan Hakim). Artı bozkırda, çölde, ormanda türeyen haydut çeteleri
- **84 lord** — kültürüne göre unvan (Kont / Boyar / Noyan / Jarl / Lord / Emir), şöhret, altın, taktik ve liderlik, sekiz kişilik tipi, tımarlar ve krala bağlılık. Bağlılığı dibe vuran lord tımarlarıyla birlikte **taraf değiştirir**
- **Mareşal orduları** — savaş açan krallık bir **mareşal** seçer; lordlar onun sancağı altında toplanıp tek bir büyük ordu hâlinde sefere çıkar. Böylece haritada dağınık noktalar değil, gerçek ordular yürür
- **Birlik ağaçları** — altı kültürün tam terfi zinciri (Swadya Şövalyesi, Nord Huscarlı, Rodok Keskin Nişancısı, Kherjit Atlı Okçusu, Sarranid Memlüğü…); ordular asker toplar, terfi ettirir, maaş öder
- **Yaşayan simülasyon** — köy yağmaları, meydan savaşları, esir düşen lordlar, günlerce süren kuşatmalar, sur ve erzak hesabı, krallık hazineleri, garnizon takviyeleri, savaş ilanları ve barış görüşmeleri. Toprağını tamamen kaybeden krallık haritadan silinir. Kışın ordular yavaşlar
- **Sakin tempo** — 1× hızda bir gün ≈ 4 saniye; 2×, 4× ve 10× ile hızlandırılır, Sandbox'tan gün/hafta/ay/yıl atlanır

### Savaşları görmek

- **Savaş defteri** — her çarpışma kaydedilir: tarihi, yeri (en yakın yerleşime göre "Praven önünde"), iki tarafın komutanı, **savaş öncesi asker sayıları**, kayıplar, kalanlar, esirler ve kazanan
- **Savaşı canlandırma** — bir savaşa tıklayınca iki ordu tuval üzerinde karşılıklı dizilir; piyade kare, okçu üçgen, süvari oval olarak çizilir ve **tur tur** erirler. Üstte kalan asker sayıları canlı sayar, altta tur göstergesi ilerler, "Tekrar oynat" ile baştan izlenir. Kuşatma saldırılarında savunan tarafın arkasında sur belirir
- **Büyük savaş bildirimi** — 180 kişiyi aşan bir çarpışma olduğunda haritanın köşesinde uyarı çıkar, tek tuşla savaşa atlarsın; istersen "büyük savaşta duraklat" seçeneğiyle oyun kendini durdurur
- **Olay şeridi** — ekranın altında tek satırlık akış vardır, üstüne tıklayınca açılır; her savaş satırının yanındaki **izle** etiketi doğrudan raporu açar

### Müdahale ve sandbox

- **Her şey düzenlenebilir** — haritadan tıkladığın birimin özet kartını görürsün, altındaki **✎ Düzenle** bölümünü açınca bütün alanlar karşına gelir: lordun adı, unvanı, krallığı, kişiliği, şöhreti, altını, sadakati, yetenekleri, durumu; yerleşimin adı, sahibi, tımar sahibi, refahı, surları, erzağı, asker havuzu, kuşatma yüzdesi, hatta **türü**; krallığın adı, rengi, hükümdarı, kültürü, hazinesi
- **Yaratma araçları** — **yeni lord** (isim, krallık, kişilik, yetenekler, ordu büyüklüğü ve kalitesi, istersen doğrudan hükümdar), **yeni yerleşim** (şehir/kale/köy; refah, sur, garnizon), **yeni krallık** (isim, renk, kültür, unvanlar, lord sayısı, hazine, başkent olarak alacağı şehir), **yeni ordu** ve **haydut çetesi**. Hepsinde konumu haritaya tıklayarak seçersin
- **Taşı, kopyala, sil** — yerleşimleri haritada sürükleyip taşı, kopyasını kur ya da tamamen sil; lordları ışınla, benzerini yarat, öldür; orduları dağıt
- **Krallık araçları** — hazineye altın bas, tüm orduları tamamla ya da seçkinleştir, refahı ve surları tavana çek, yıkılmış krallığı dirilt, bir krallığın **tüm topraklarını** başkasına devret
- **Diplomasi tablosu** — savaş/barış matrisinde hücreye tıklayarak iki krallığı anında savaştır ya da barıştır; "tüm savaşları bitir" ve "herkesi savaştır" ile dünyayı tek tuşla değiştir
- **Savaş oyunu** — istediğin iki orduyu seç, anında çarpıştır ve sonucu canlandırma ekranında izle; seçili şehri "anında düşür" ile kuşatmayı bitir
- **Simülasyon ayarları** — savaş ölümcüllüğü, asker toplama hızı, ekonomi, saldırganlık, haydut yoğunluğu kaydırıcıları; yapay zekâ barışı, lord ihanetleri, haydut türemesi ve otomatik duraklatma anahtarları
- **Arama** — üstteki 🔍 (ya da **A**) ile lord, şehir, kale, köy ve krallık adı arayıp doğrudan haritada bulursun

### Arayüz

Dört sekme: **Seçim** (tıkladığın birim ya da hiçbir şey seçili değilken Kalradya panosu), **Krallıklar** (güç sıralaması, savaş durumu, diplomasi tablosu, lord listesi), **Savaşlar** (savaş defteri ve vakayiname), **Sandbox** (yaratma ve müdahale araçları). Kaydetme localStorage'da, JSON dışa/içe aktarma, tohumla yeni dünya kurma, açık/koyu tema, mobilde alttan yükselen panel ve PWA desteği (`warband-manifest.webmanifest`, `warband-sw.js`).

Yerleşim adları ve krallıklar Warband'in Kalradya'sından esinlenmiştir; harita yerleşimi stilize edilmiş bir yeniden yorumdur, birebir kopya değildir.

## Notlar

- `warband.html` diğer iki oyundan bağımsızdır; kendi `kalradya_save_v1` anahtarını kullanır, futbol kayıtlarını etkilemez.
- Oyuncu isimleri kurgusal kombinasyonlardır; gerçek futbolculardan bağımsızdır.
- Puan eşitliğinde önce ikili averaj (head-to-head) uygulanır — hem Serie A'nın hem TFF'nin gerçek kuralı.
- Kupa sayıları (Scudetto / Coppa Italia, Süper Lig / Türkiye Kupası) 2026-27 başlangıcındaki gerçek değerlerle başlar, simülasyonla birikir.
- İki sürüm ayrı kayıt anahtarları kullanır (`serie_a_*` ve `super_lig_*`); birini sıfırlamak diğerini etkilemez.
