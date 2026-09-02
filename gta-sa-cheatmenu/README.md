# CHEATS.cs — Cete bolumu guncellemesi

Hedef: **GTA San Andreas 1.0 US + CLEO 4**
Kaynak: Sanny Builder ile `cheats.cs` dosyasindan cikarilan `cheats.txt`

## Yapilan degisiklikler

### 1. "Cete Bolgelerini Ayarla" — 3 cete yerine 8 cete
Eski kod Grove / Vagos / Ballas icin uc ayri blok halinde elle yazilmisti.
Yerine tek bir dongu geldi; cete numarasi `4@` degiskeninde tutuluyor:

| GangType | Cete |
|---|---|
| 0 | Ballas |
| 1 | Grove Street |
| 2 | Vagos |
| 3 | San Fierro Rifa |
| 4 | Da Nang Boys |
| 5 | Mafya |
| 6 | Triadlar |
| 7 | Varrios Los Aztecas |

- SOL / SAG: cete secimi (bas-sona sarar)
- YUKARI / ASAGI: yogunluk (0-100)
- SHIFT basili: 10'ar adim
- Cete degistirirken 150 ms bekleme eklendi (eskiden her karede degistigi
  icin secim yapmak neredeyse imkansizdi)

### 2. "Cete Yarat" alt menusu
Ana cete menusundeki uc ayri satir (Ballas / Vagos / Grove yarat) tek bir
"Cete Yarat" alt menusune tasindi; icine 8 cetenin hepsi eklendi.
Ped modelleri `peds.ide` + `pedgrp.dat` ile dogrulandi:

| Cete | PedType | Ped modelleri |
|---|---|---|
| Ballas | Gang1 (7) | 102, 103, 104 |
| Grove Street | Gang2 (8) | 105, 106, 107 |
| Vagos | Gang3 (9) | 108, 109, 110 |
| San Fierro Rifa | Gang4 (10) | 173, 174, 175 |
| Da Nang Boys | Gang5 (11) | 121, 122, 123 |
| Mafya | Gang6 (12) | 124, 125, 126 |
| Triadlar | Gang7 (13) | 117, 118, 120 |
| Varrios Los Aztecas | Gang8 (14) | 114, 115, 116 |

Grove'un ozel davranisi korundu (M4 verilir, oyuncunun grubuna katilirlar).

### 3. Duzeltilen hata
Ballas yaratma rutini modelleri birakirken `mark_model_as_no_longer_needed`
yerine tekrar `request_model` cagiriyordu (kopyala-yapistir hatasi). Model
kilidi hic birakilmiyordu. Ortak `GangSpawn_Create` rutini bunu duzeltiyor.

### 4. FXT
Yeni: `CH260`-`CH270`. Guncellenen: `CHT52`, `CHT53`, `CHT54` (kisa cete
adlari), `CH254` (yardim metni — "mesafe" yanlisti, "yogunluk" oldu).
Dosya saf ASCII tutuldu; SA'nin varsayilan fontu Turkce karakter basmaz.

## Derleme
Sanny Builder'da `cheats.txt` -> Compile -> `CHEATS.cs`.
`CHEATS.cs` ve `cheats.fxt` dosyalarini `GTA San Andreas/CLEO/` klasorune,
FXT'yi `CLEO/CLEO_TEXT/` altina koyun.
