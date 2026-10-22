// ============================================================
// KARAKTER.JS — Can Brawl karakter tanım dosyası
// ============================================================
// Her karakteri TEK SATIRDA, köşeli parantez içinde tanımla:
//
//   [F=dosya.png hasar=30 can=150 mermi=3 ateş tarzı=bomba ulti=Deprem]
//
// Bu satır oyuna otomatik yeni bir karakter ekler. Sırası önemli değil.
// // ile başlayan satırlar yorumdur, oyun onları okumaz.
//
// ALANLAR:
//   F              = karakterin resim dosyası (aynı klasörde olmalı).
//                    Not: resim bulunamazsa karakter otomatik olarak
//                    renkli daire + isminin ilk harfiyle gösterilir.
//   isim           = (opsiyonel) karakterin görünen adı.
//                    Yazılmazsa F= dosya adından otomatik üretilir
//                    (örn: colt.png -> "Colt").
//   hasar          = mermi/vuruş başına verdiği hasar
//   can            = toplam canı
//   mermi          = aynı anda taşıyabileceği mermi/atış sayısı
//   ateş tarzı     = saldırı mekaniği (aşağıdaki kısaltmalardan biri)
//   ulti           = ultinin GÖRÜNEN ismi (mekaniği "ateş tarzı"na göre
//                    otomatik belirlenir, aşağıya bakın)
//
// OPSİYONEL EK ALANLAR (yazılmazsa makul varsayılanlar kullanılır):
//   hiz            = hareket hızı (varsayılan 3.8)
//   menzil         = atış menzili
//   yenilenme      = mermi yenilenme süresi (milisaniye)
//   renk           = avatar rengi, resim yoksa kullanılır (örn: renk=#e53935)
//
// İNCE AYAR ALANLARI (mevcut atış tarzını KODA DOKUNMADAN değiştirmek için):
//   mermihizi      = mermi hızı (bomba tarzında etkisi yok)
//   mermiboyu      = mermi çapı (görsel boyut)
//   delme          = keskin nişancı tarzında mermi kaç düşmanı delip geçer
//   sacmasayisi    = sacma tarzında tek atıştaki saçma/mermi sayısı
//   yayilma        = sacma tarzında saçmaların açılma açısı (radyan, örn 0.5)
//   patlamayaricapi= bomba tarzında patlamanın alan hasarı yarıçapı
//   yavaslatma     = don tarzında vurulanın hız çarpanı (0.4 = %60 yavaş)
//   donsuresi      = don tarzındaki yavaşlamanın süresi (ms)
//   zehirhasari    = zehir tarzında tik başına verilen hasar
//   zehirsuresi    = zehir tarzının toplam süresi (ms)
//   dashmesafe     = dash tarzında bir seferde gidilen mesafe
//   dashhizi       = dash tarzının hareket hızı
//
// NOT: bumerang/zincir/mayin/guduml/lazer/titresim/sekme/kanca/itis/vampir
// tarzları şimdilik dengelenmiş sabit değerlerle çalışıyor (ince ayar
// alanları henüz yok) — istersen bunlar için de ince ayar alanları
// ekleyebiliriz, yeter ki söyle.
//
// Bu ince ayarlarla, aynı "ateş tarzı"ndan çok farklı hissettiren
// karakterler üretebilirsin. Örnek: hem çok hızlı/kısa hem de yavaş/uzun
// mesafeli iki farklı "dash" karakteri, kod değiştirmeden:
//   [F=a.png isim=Kısa hasar=15 can=100 mermi=1 ateş tarzı=dash dashmesafe=120 dashhizi=25]
//   [F=b.png isim=Uzun  hasar=15 can=100 mermi=1 ateş tarzı=dash dashmesafe=400 dashhizi=12]
//
// Birden fazla kelimeli değerleri tırnak içine al:
//   ulti="Alev Patlaması"
// ============================================================

[F=ates.png isim=Ateş hasar=15 can=100 mermi=3 ateş tarzı=normal ulti="Alev Patlaması" hiz=4.0]
[F=ruzgar.png isim=Rüzgar hasar=32 can=75 mermi=2 ateş tarzı=keskin ulti="Dev Mermi" hiz=3.4]
[F=golge.png isim=Gölge hasar=24 can=95 mermi=1 ateş tarzı=dash ulti="Gölge Sıçraması" hiz=5.0]
[F=kaya.png isim=Kaya hasar=26 can=135 mermi=2 ateş tarzı=bomba ulti="Büyük Bombardıman" hiz=2.8]
[F=yildirim.png isim=Yıldırım hasar=9 can=100 mermi=3 ateş tarzı=sacma ulti="Çifte Namlu" hiz=3.9]
[F=buz.png isim=Buz hasar=13 can=100 mermi=3 ateş tarzı=don ulti="Donma Dalgası" hiz=3.6]
[F=firtina.png isim=Fırtına hasar=18 can=80 mermi=1 ateş tarzı=dash ulti="Kasırga Koşusu" hiz=5.6]
[F=toprak.png isim=Toprak hasar=20 can=150 mermi=2 ateş tarzı=bomba ulti="Deprem" hiz=2.5]
[F=zehir.png isim=Zehir hasar=10 can=95 mermi=3 ateş tarzı=zehir ulti="Zehir Bulutu" hiz=3.7]
[F=demir.png isim=Demir hasar=16 can=190 mermi=3 ateş tarzı=bumerang ulti="Zırh Kırma" hiz=2.8 renk=#607d8b]
[F=kartal.png isim=Kartal hasar=18 can=90 mermi=2 ateş tarzı=zincir ulti="Ölümcül Nişan" hiz=3.5 renk=#8d6e63 yenilenme=1600]
[F=kobra.png isim=Kobra hasar=24 can=95 mermi=2 ateş tarzı=mayin ulti="Ölümcül Isırık" hiz=3.6 renk=#7cb342 yenilenme=2200]
[F=volkan.png isim=Volkan hasar=15 can=140 mermi=3 ateş tarzı=guduml ulti="Lav Yağmuru" hiz=2.6 renk=#e64a19]
[F=sahin.png isim=Şahin hasar=22 can=85 mermi=2 ateş tarzı=lazer ulti="Şahin Saldırısı" hiz=4.1 renk=#ffca28 yenilenme=1400]
[F=buzcu.png isim=Buzcu hasar=17 can=125 mermi=3 ateş tarzı=titresim ulti="Buzul Çağı" hiz=3.0 renk=#4dd0e1 yenilenme=1800]
[F=panter.png isim=Panter hasar=12 can=90 mermi=3 ateş tarzı=sekme ulti="Kükreyiş Salvosu" hiz=4.1 renk=#ff7043]
[F=gulbahar.png isim=Gülbahar hasar=14 can=100 mermi=3 ateş tarzı=kanca ulti="Diken Fırtınası" hiz=4.2 renk=#ec407a]
[F=zumrut.png isim=Zümrüt hasar=20 can=160 mermi=2 ateş tarzı=itis ulti="Zümrüt Çöküşü" hiz=2.7 renk=#00897b]
[F=akrep.png isim=Akrep hasar=13 can=105 mermi=3 ateş tarzı=vampir ulti="Kum Fırtınası" hiz=3.8 renk=#bdb76b]
[F=tetik.png isim=Tetik hasar=7 can=90 mermi=3 ateş tarzı=seri ulti="Kurşun Fırtınası" hiz=3.9 renk=#455a64 yenilenme=1600]
[F=arna.png isim=Arna hasar=38 can=70 mermi=1 ateş tarzı=keskin delme=4 ulti="Arna Nişanı" hiz=3.3 renk=#37474f yenilenme=2200]
[F=vesda.png isim=Vesda hasar=14 can=130 mermi=2 ateş tarzı=don yavaslatma=0.7 donsuresi=2600 ulti="Vesda Dondurması" hiz=2.9 renk=#4fc3f7]
[F=inkes.png isim=Inkes hasar=10 can=95 mermi=4 ateş tarzı=sekme ulti="İnkes Sekmesi" hiz=4.0 renk=#ff5722 yenilenme=650]
[F=vada.png isim=Vada hasar=16 can=175 mermi=2 ateş tarzı=itis ulti="Vada Şoku" hiz=2.6 renk=#26a69a]
[F=ozmir.png isim=Ozmir hasar=13 can=100 mermi=2 ateş tarzı=zincir ulti="Ozmir Zinciri" hiz=3.6 renk=#fdd835]
[F=tulva.png isim=Tulva hasar=11 can=150 mermi=3 ateş tarzı=vampir ulti="Tulva Emişi" hiz=3.1 renk=#8e24aa]
[F=renka.png isim=Renka hasar=9 can=90 mermi=4 ateş tarzı=guduml ulti="Renka Sürüsü" hiz=3.8 renk=#d81b60]
[F=kesmi.png isim=Kesmi hasar=15 can=105 mermi=2 ateş tarzı=kanca ulti="Kesmi Kancası" hiz=4.3 renk=#f06292]
[F=solun.png isim=Solun hasar=19 can=140 mermi=2 ateş tarzı=titresim ulti="Solun Dalgası" hiz=2.8 renk=#00acc1]
[F=drenak.png isim=Drenak hasar=24 can=155 mermi=2 ateş tarzı=bomba ulti="Drenak Bombardımanı" hiz=2.5 renk=#6d4c41 yenilenme=2300]

// Yeni karakter eklemek için buraya aynı formatta bir satır daha ekle:
// [F=colt.png isim=Colt hasar=20 can=120 mermi=3 ateş tarzı=sacma ulti="Silah Yağmuru"]


// ============================================================
// ATIŞ TARZLARI VE ULTİ KISALTMALARI
// ============================================================
// "ateş tarzı" alanına yazabileceğin kısaltmalar ve ne anlama geldikleri:
//
//   normal   -> Düz tek mermi atar. Ulti: 8 yöne yıldız patlaması.
//   keskin   -> Uzun menzilli, güçlü tek mermi (yavaş yenilenir).
//                Ulti: Her şeyi delen kocaman TEK mermi.
//   dash     -> Yakın dövüşçü, ateş etmez; ileri atılıp (dash) değdiği
//                düşmanlara hasar verir. Ulti: çok daha uzun/güçlü dash.
//   bomba    -> Hedefe bomba fırlatır, alan hasarı (patlama) verir.
//                Ulti: aynı anda 3 bomba (geniş alan).
//   sacma    -> Av tüfeği gibi, tek atışta birden fazla mermi/saçma
//                (kısa menzil, yakında güçlü). Ulti: çok daha geniş saçma.
//   don      -> Vurduğu düşmanı yavaşlatır. Ulti: çevresindeki HERKESE
//                anlık hasar + ağır yavaşlatma (dairesel alan).
//   zehir    -> Vurduğu düşmana zamana yayılı (zehir) hasar verir.
//                Ulti: çevresindeki HERKESE hasar + uzun süreli zehir.
//
//   bumerang -> Mermi gider, menzile ulaşınca sahibine geri döner, hem
//                gidişte hem dönüşte hasar verebilir. Ulti: 3 bumerang.
//   zincir   -> Vurduğu düşmandan en yakın başka düşmana yıldırım gibi
//                sıçrar (birkaç kez, azalan hasarla). Ulti: çok daha
//                güçlü ve çok daha fazla sıçrayan dev yıldırım.
//   mayin    -> Yere görünmez bir mayın koyar, biri üstüne basınca
//                patlar (alan hasarı). Ulti: aynı anda 3 mayın.
//   guduml   -> Mermi fırlatıldıktan sonra en yakın düşmana doğru hafifçe
//                yönelir (güdümlü roket). Ulti: aynı anda 4 güdümlü roket.
//   lazer    -> Anlık, düz bir ışın halinde ateş eder (mermi değil, o an
//                çizgi üzerindeki herkese vurur). Ulti: çok daha geniş/
//                güçlü ve daha uzun süren bir lazer.
//   titresim -> Kendi etrafında anlık bir şok dalgası yayar, yakındaki
//                herkese hasar+yavaşlatma verir (mermisi yoktur, yakın
//                mesafe). Ulti: çok daha geniş ve güçlü şok dalgası.
//   sekme    -> Mermisi duvarlara çarptıkça sekerek yoluna devam eder
//                (birkaç kez). Ulti: aynı anda 4 sekebilen güçlü mermi.
//   kanca    -> Vurduğu düşmanı kendine doğru çeker (kanca/grapple).
//                Ulti: düşmanı doğrudan yanına çeken çok güçlü kanca.
//   itis     -> Vurduğu düşmanı kendinden uzağa iter (knockback), hem
//                hasar hem mesafe kazandırır. Ulti: çevresindeki
//                HERKESİ güçlüce geri iten anlık patlama.
//   vampir   -> Vurduğunda verdiği hasarın bir kısmı kadar kendi canını
//                yeniler (can çalma). Ulti: çok daha fazla can çalan,
//                düşmanları delip geçen güçlü bir mermi.
//
// NOT: "ulti" alanına yazdığın metin sadece EKRANDA GÖRÜNEN İSİMDİR.
// Ultinin gerçekte NE YAPACAĞI her zaman o karakterin "ateş tarzı"na
// göre yukarıdaki listeden otomatik seçilir. Yani "ateş tarzı=bomba"
// olan bir karakterin ultisi ismi ne olursa olsun her zaman "3 bomba
// fırlatma" mekaniğini kullanır.
// ============================================================


// ============================================================
// HİÇ VAR OLMAYAN YENİ BİR ATIŞ TARZI/ULTİ NASIL EKLENİR?
// ============================================================
// karakter.js sadece SAYILAR ve İSİMLER içeren bir veri dosyasıdır.
// Gerçek oynanış mantığı (mermi nasıl hareket eder, ulti ne yapar)
// can-brawl.html içindeki JavaScript kodunda yazılıdır. Yani:
//
//   - Yukarıdaki 7 tarzdan birini ince-ayar alanlarıyla (bir üstteki
//     bölüm) değiştirmek -> karakter.js YETER, kod gerekmez.
//   - Hiç var olmayan bambaşka bir mekanik istemek (örn: bumerang,
//     çağırma, lazer, iyileştirme) -> can-brawl.html içine BİRKAÇ
//     SATIR KOD eklemek gerekir. Aşağıda tam adımlar var.
//
// can-brawl.html dosyasını bir metin editörüyle açıp Ctrl+F ile şu
// fonksiyonları bul (hepsi bir "switch(ch.attackType){ ... }" içerir):
//
//   1) performAttack(...)      -> oyuncunun NORMAL atışı burada üretilir
//   2) useSuper(...)           -> oyuncunun ULTİSİ burada üretilir
//   3) enemyPerformAttack(...) -> düşmanların normal atışı burada üretilir
//   4) drawAimIndicator(...)      -> normal atış nişan çizimi (opsiyonel)
//   5) drawSuperAimIndicator(...) -> ulti nişan çizimi (opsiyonel)
//
// Her birinde diğer tarzlar gibi (case 'bomba': ... break;) yeni bir
// "case" ekleyip yeni tarzının kısaltmasını kullan. Örnek — "lazer"
// diye yeni bir tarz eklemek istersen:
//
// ADIM 1 — performAttack içine ekle (yeni satır, önce '#buyuk mermi'
// gibi bir case'in yanına, default'tan ÖNCE):
//
//     case 'lazer':
//       bullets.push({x:p.x,y:p.y,vx:dirX*ch.bulletSpeed,vy:dirY*ch.bulletSpeed,
//         radius:ch.bulletRadius,color:'#ff1744',dmg:ch.dmg,isSuper:false,owner:p});
//       break;
//
// ADIM 2 — useSuper içine benzer şekilde bir "case 'lazer':" ekle,
// (ulti versiyonu genelde daha güçlü/büyük olur).
//
// ADIM 3 — enemyPerformAttack içine de bir "case 'lazer':" ekle ki
// düşmanlar da bu tarzı kullanabilsin.
//
// ADIM 4 — dosyanın başındaki STYLE_MAP, STYLE_ROLE, STYLE_ULT_DESC,
// STYLE_DEFAULTS objelerine "lazer" anahtarını ekle (diğerleri gibi).
//
// ADIM 5 — artık karakter.js'de kullanabilirsin:
//   [F=x.png isim=Lazer hasar=20 can=100 mermi=3 ateş tarzı=lazer ulti="Büyük Lazer"]
//
// Bu adımları benimle (Claude) birlikte de yapabiliriz — bana hangi
// yeni mekaniği istediğini anlat (örn: "bumerang gibi geri dönen bir
// mermi istiyorum"), gerekli kodu can-brawl.html'e ben ekleyeyim.
// ============================================================
