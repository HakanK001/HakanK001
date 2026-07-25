# ⚽ Serie A Simülatörü

Tamamen çevrimdışı çalışan, tek dosyalık (framework'süz) bir Serie A sezon simülatörü. `seriea.html` dosyasını tarayıcıda açman yeterli.

## Özellikler

- **Lig simülasyonu** — form ağırlıklı güç modeli + Poisson skor üretimi, canlı maç modu (dakika dakika goller, golcü isimleri), haftalık/sezonluk simülasyon, elle skor girişi
- **Oyuncu sistemi** — her takımda 18 kişilik kurgusal kadro; gol/asist ataması, gol & asist krallığı, yaşlanma, gelişim ve 35+ yaşta emeklilik
- **Transfer piyasası** — sezon aralarında kulüpler oyuncu alıp satar, düşen takımların yıldızları büyük kulüplere gider, kadrolar altyapıdan gençlerle tamamlanır; takım gücü kadrodan hesaplanır
- **Coppa Italia** — kendi sekmesinde, lig formatında: kura, ön eleme + eleme turları, penaltılar, "Turu oynat" butonu; turlar lig haftalarıyla birlikte ilerler
- **Momentum sistemi** — şampiyonluk ve iyi sezonlar ertesi sezona taşınan bir momentum kazandırır (kademeli söner); sürpriz şampiyon bir anda dibe çakılmaz
- **Gerçekçi simülasyon** — güç + son 5 maç formu + sezon geneli puan ortalaması + sezon içi ikili üstünlük (H2H) + hücum/savunma gol profilleri birlikte değerlendirilir, Poisson dağılımıyla sürpriz payı korunur
- **Tahmin Oyunu** — maçlar oynanmadan 1/X/2 tahmini yap, üç yorumcuya karşı sezon boyu yarış
- **Haber motoru** — derbi/sürpriz/zirve haberleri, hat-trick, matematiksel şampiyonluk, kesinleşen küme düşüşü, seri rekorları, transfer ve veda haberleri
- **İstatistik & grafikler** — Monte Carlo sezon sonu tahmini (1000 iterasyon), puan/sıralama/averaj grafikleri, sezon ve tüm zamanlar istatistikleri
- **Favori takım** — takımını seç, maçlarında taktik belirle (hücum/denge/savunma)
- **Kalıcılık** — otomatik localStorage kaydı, JSON dışa/içe aktarma, 40 sezonluk geçmiş arşivi
- **Açık/koyu tema** ve **PWA** desteği (bir sunucudan servis edildiğinde telefona kurulabilir, çevrimdışı çalışır)

## Notlar

- Oyuncu isimleri kurgusal kombinasyonlardır; gerçek futbolculardan bağımsızdır.
- Puan eşitliğinde önce ikili averaj (head-to-head) uygulanır — gerçek Serie A kuralı.
- Kupa sayıları (Scudetto / Coppa Italia) 2026-27 başlangıcındaki gerçek değerlerle başlar, simülasyonla birikir.
