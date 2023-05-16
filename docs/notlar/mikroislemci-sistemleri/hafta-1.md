---
sidebar_position: 2
title: Hafta 1
description: Birinci dersin konuları
---

## Birinci Ders

---

## Giriş

*Öğretim Görevlisi*: Tamer Ölmez

- Yoklama alınmıyor
- Dersin notları hocanın web.itu sayfasında yüklü

[Dersin notları](https://web.itu.edu.tr/olmezt/uC) (passwd: microc)

**Dersin genelinde 8051 mikrodenetleyicisi kullanılacak. ATMEL, Analog Devices tarzı üreticilerden bulunabilir.**

Mikrodenetleyiciler düşük donanım özellikleriyle genelde kontrol amaçlı kullanılır. Genelde analog veya dijital girdileri alıp üzerinde küçük işlemler uygulayarak sinyali bir sonraki sisteme iletme işini yapar. Üzerinde basit yazılımlar ve işlemler koşabilir ancak ağır iş yükü gerektiren durumlar için veriyi işlem gücü yüksek sistemlere aktarır.

---

## Sayı Sistemleri

Biyolojide eskiden 2'lik sistem varmış şu an 4'lük sistem var ve milyonlarca yıl önce 2'den bir anda 4'e geçilmiş?

Virgüllü sayılarda yuvarlatma hatası meydana geliyor.

İşaretli sayıların gösterimi için yöntemler:

- Signed magnitude yaklaşımı
- Birin tümleyeni yaklaşımı
- İkinin tümleyeni yaklaşımı

Bütün bilgisayar mimarisinde ikinin tümleyeni yaklaşımı kullanılmaktadır.

*Sign-magnitude Integer*

    Most significant bit sayının işaretini göstermektedir.

    Bu sayı sistemindeki hata iki tane sıfır (1000) ve (0000) olmasıdır.

*Birin Tümleyeni Yaklaşımı*

    Sayıların tersine değiştirilmiş hali o sayının negatif halidir.

    Burada da iki tane sıfır olmaktadır (000) (111).

*İkinin Tümleyeni Yaklaşımı*

    Birin tümleyenini alıp bir ilave edilerek sayının ters işaretli hali bulunur.

    Bu sayı sisteminde iki tane sıfır yoktur ve 4 bitlik durum için -8 de mevcuttur ancak 8 mevcut değildir.


### <u>Kodlar</u>

- BCD = 0-9 sayıların binary olarak gösterimi tablosu
- ASCII = Karakterlerin hex olarak gösterimi tablosu

### <u>Fixed-Point ve Floating-Point Gösterimleri</u>

*Fixed-Point*

    Sol ve sağ tarafı sıkıştırmış olduğu için tercih edilmiyor.

*Floating-Point*

    IEEE standardına uygun bir biçimde yazılıyor.

* En solda hep 0. olur ve noktadan sonra 0 dışında bir sayı gelmek zorundadır.
* Sayının en sonunda ise üslü bir taban çarpanı bulunur.
* Sol tarafa mantis denir sağ tarafa üst denir.
* Belirli miktar bit mantise belirli miktar bit ise üse ayrılır. Mantis ve üs için de birer tane sign biti bulunur.

$$sxxxsyy$$
$$s: sign-biti - x: mantis-biti - y: üs-biti$$

### <u>Binary Aritmetiği</u>

Tüm binary aritmetiğinin temelinde **toplama** ve **kaydırma** vardır.

Diğerleri ise:

* **Çıkartma**: Negatif haliyle toplama. Carry varsa sonuç birin tümleyeninin negatif olarak düşünülen hali olacaktır. Carry var ise sonuca bir ilave edilerek onun pozitif olduğu düşünülecektir.
* **Çarpma**: Kaydırma ve toplama.
* **Bölme**: Çarpmanın bir başka formu?

>**Overflow Hatası:** İki tane sayı toplanıyor ama toplamanın sonucu n-bitlik sistem ile gösterilemeyecek bir sayı. Bu durumda sign biti de aslında sayının değerini gösteren bir eleman oluyor ancak sistem n-bitlik olduğu için bu sayıyı sign biti olarak düşünüp bir anda eksi bir sayı olduğunu sanıyor.

**Böyle bir durumda sistem hatasını bize bu şekilde bildiriyor.**

>Sistem bunu şu şekilde anlıyor. 8 bitlik bir sistem düşünürsek 7. bitten gelen carry ile 6. bitten gelen carry birbirine eşit olmazsa bu hataya sebebiyet verir.

Bu sistem ex-OR ile de gösterilebilir.

$$Overflow = C_1 \oplus C_2$$

Çarpma işlemi için bir örnek:

    İki tane 8 bit çarpıldığı zaman sonuç doğal olarak 16 bit bir sayı çıkacaktır. 
    8 bitlik bir sistem içerisinde bu 16 bit düşük ve yüksek 8 bit için ayrı değişkenler içerisinde saklanacaktır.

>*İşlemler sırasında karşılaşılan hataların önüne geçmek için sayılar daha yüksek bitli gösterilebilir*

### BCD Aritmetiği

Bu aritmetik sırasında sayılar BCD'ye dönüştürülüp basamaklar ayrı ayrı toplanır ancak tek bir basamağın toplamı 9'u geçiyorsa sorunla karşılaşılır çünkü sonucun bir basamağı hex değer gösteriyor olacaktır. Bunun çözümü için 9'u aşan her bir kadrana 6 eklenir.

Çıkartma işleminde de aynı şekilde sonucu 9'dan büyük olan kadranlara 6 eklenerek doğru sonuca ulaşılır.

---

## Lojik Kapılar ve Kullanım Alanları

> **NOT Gate**: Girişi tam tersine çevirir, birin tümleyenini almada kullanılır

> **AND Gate**: Sadece iki giriş de bir olursa çıkışı bir olur.

> **NAND Gate**: Sadece iki giriş de bir olursa çıkış sıfır olur.

> **OR Gate**: Girişlerde herhangi bir bir olması durumunda çıkış bir olur.

### <u>Aktif 0 - Aktif 1</u>

**Yuvarlağın farklı konumlarda kullanımının farklı anlamları.**

Bu özellik entegrelerin veri hatlarına kapılarla bağlı olmasını ve bu kapıların bir decoder tarafından bu özellik sayesinde aktifleştirilerek sistemdeki uyumsuzlukların önlenmesinde kullanılır.

### <u>Flip-flop</u>

**SR Latch**

S (Set) ve R'nin (Reset) aynı anda 1 olması istenmeyen giriştir. (NOR için)

Aynı sistem NAND ile kurulduğu zaman istenmeyen giriş 0-0 için olacaktır.

İki kapının da baskın girişi sonucu istenmeyen duruma çevirir.

Baskın olmayan girişlerin birlikte olduğu durum read konsepti, istenmeyen durum dışındaki durumlar ise write konseptine benzetilebilir.

İstenmeyen durumu yok etmek için D Flip-flopu devreye girer.

**D Flip-flop**

Bu durumda CLK 1 iken yazma işlemi CLK 0 iken okuma işlemi gerçekleştirilir.

D flip-flop'unda istenmeyen durum ortadan kaldırılmıştır.

### <u>Registerlar</u>

Registerlar 0 ve 1 değerlerini tutan elemanlardır.

Her register işlemcinin bit sayısı uzunluğundadır ve her biri bir adet donanıma işaret etmektedir.

Register hücresi içerisinde her bir değer bir adet D flip-flopuna işaret etmektedir.

> Saklayıcılar sadece veriyi tutmaz aynı zamanda basit aritmatik de yapabilir.

Kaydırma türleri:

Lojik, aritmetik (sign-biti ile kaydır), döndür.

[4 bit General Register Yapısı ve Komutları]

### <u>Random-Access Memory</u>

[Tek bitli RAM yapısı]

Hangi 8 bitlik RAM'e yazma işlemini yapan yapı Select'tir.

Deselect durumunda RAM'lerin çıkışı 0'dır.

[4x2 RAM yapısı]

**Memory Türleri**:

- RAM (Random-Access Memory)
- ROM (Read-Only Memory)

ROM yapısında +Vcc ile Gnd arasında bulunan sigortalardan bir tanesi yakılarak çıkışın tek bir değerde sahip olması sağlanır ancak bu çıktı daha sonra değiştirilemez.

> CD'ler de benzer bir yapı bulunmaktadır.

**RAM Türleri**

- Static RAM
- Dynamic RAM

**ROM Türleri**

- Masked ROM
- Programmable ROM
- Erasable Programmable ROM

A: Address bus

D: Data bus

I/O: Data bus

R/W: Sadece RAM için

Sistemler içerisinde ROM ve RAM adresleri hiçbir zaman üst üste binmez.

> Mikrodenetleyicilere LED vb. elemanlar direkt bağlanmaz.

İki tür segment display vardır:

- Anot display (Akım mikrokontrolcüye akar)
- Katot display (Akım mikrokontrolcüden akar)

