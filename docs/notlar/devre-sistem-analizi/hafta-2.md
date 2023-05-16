---
sidebar_position: 1
title: Hafta 2
description: İkinci dersin konuları
---
## Elektrik Devrelerinin Frekans Alanında Çözümlenmesi

**NOT: Ders 1'de önemli bir kısım bulunmuyor.**

---

### Alternatif İşaretler ve Özellikleri

Bir kaynağın AC mi DC mi olduğu işaretin pozitif ve negatif değerler alıyor olmasından anlaşılmaktadır.

$T=\frac{1}{f}\hspace{0.1cm},\hspace{0.5cm}\omega = 2\times \Pi\times f\newline\newline\hspace{1cm}\newline T: Period \newline f: Frequency \newline w: Angular\hspace{0.1cm} Frequency$


Sinusoidal işaretlerin gösterimi:

![](./hafta-2-img/gorsel-(2).png)

$\phi: \hspace{0.1cm} Phase\newline V_{m}: \hspace{0.1cm} Magnitude$

**Etkin değer**: Bir AC kaynağın etkin değeri aynı direnç üzerinde aynı değerde ısı oluşturan DC kaynağın değerine eşittir. Aynı zamanda alternatif işaretin iş yapan kısmı şeklinde de ifade edilebilir.

**Sinüzoidal kaynağın etkin değerinin hesaplanması:**

![](./hafta-2-img/gorsel-(1).png)

Aşağıda ilgili hesaplamalar yapılmıştır:

![](./hafta-2-img/gorsel-(3).png)

![](./hafta-2-img/gorsel-(4).png)

![](./hafta-2-img/gorsel-(5).png)

![](./hafta-2-img/gorsel-(6).png)

**Sonuç:** Sinüzoidal bir işaretin etkin değeri aşağıdaki eşitlik aracılığıyla bulunabilir.

$V_{rms}=\frac{V_{m}}{\sqrt{2}}$

*Ödev*: Aşağıdaki işaretlerin etkin değerinin elde edilmesi.

![](./hafta-2-img/gorsel-(7).png)

**Alternatif akım devreleri**: Uyaran kaynağın sinüzoidal olduğu elektrik devrelerine denir.

Zaman domaininde alternatif akım devrelerinin analiz zorlayıcı olabilmektedir, bu yüzden devre çözüm için frekans domenine taşınabilir. Frekans domeninde ise karmaşık cebir ile gerekli işlemler gerçekleştirilir.

---

## Bir Elektrik Devresinin Sinüzoidal Tepkesi

> Sinüs dalgalarının tercih edilme sebeplerinden biri de işaretin türevinin de kendisine benzemesidir.

*Örnek Devre:*

![](./hafta-2-img/gorsel-(8).png)

Bu alternatif akım devresinin zaman domeninde çözümü:

$y_{tam}=y_{homojen}+y_{ozel}$

Homojen çözümün bulunması:

![](./hafta-2-img/gorsel-(9).png)

Sonrasinda özel çözüm bulunur:

![](./hafta-2-img/gorsel-(10).png)

- (B1 ve B2 katsayıları elde edilmeye çalışılır)
- A değeri bulunur ve B1 ve B2 yerine konulur

**Bu kadar basit bir devrede bile işlemlerin bu kadar karışık hale gelmesi zaman domaininin yarattığı darboğazı göstermiş oluyor.**

- Yukarıdaki denklemler için trigonometrik eşitliklerden faydalanarak ek sadeleştirmeler yapılabilir.

Geçici tepke: Homojen çözüm (Transient Response)

Sürekli hal tepkesi: Özel çözüm (Steady State Response)

İkisinin toplamı tam çözümü verir.

Doğrusal devrelerde kaynak frekansı ile tepkenin frekansı birbirine eşittir, doğrusal olmayan eleman varsa ve doğrusal değilse tepke kaynak frekansından farklı olabilir.

- Bunun dışında genlikler farklı olabilir
- Faz açısı farklı olabilir

> "Çıkarılacak sonuç sürekli durum tepkesinin elde edilmesi sürekli durum genel çözümünün sadece genlik ve faz açısının bulunmasına indirgenebilir. Bunu da frekans domenindeki çözüm yöntemlerini kullanarak yapabiliriz. Bunun için karmaşık cebir kullanılır."

---

## Sinüzoidal İşaretin Fazör Gösterimi

**Bir sinüzoidal işlevin genlik ve faz açısı bilgisini taşıyan karmaşık sayıya fazör denir. (Phasor)**

*Bir sinüzoidal işlevin fazör gösterimi uzunluğu sinüzoidal işlevin genliği, açısı sinüzoidal işlevin faz açısına eşik olan bir vektördür.*

![](./hafta-2-img/gorsel-(11).png)

**Fazör:**

![](./hafta-2-img/gorsel-(13).png)

*Fazör gösterimi:*

![](./hafta-2-img/gorsel-(14).png)

**Dönen fazör:** Fazörün $e^{jw}$ ile çarpılmış hali. (Asıl fonksiyonumuzu verir)

![](./hafta-2-img/gorsel-(12).png)

### Ters Fazör Dönüşümü (Zaman Domeni İfadesi)

![](./hafta-2-img/gorsel-(15).png)

---

## Fazörler ile Frekans Domeninde Devre Çözümü

![](./hafta-2-img/gorsel-(16).png)

$I=\frac{V}{Z}\newline\hspace{0.1cm}\newline I:\hspace{0.1cm} Current\hspace{0.1cm} Phasor\newline V:\hspace{0.1cm} Voltage \hspace{0.1cm}Phasor\newline Z:\hspace{0.1cm} Total \hspace{0.1cm}Impedence$

*Bir RL devresi için toplam empedansın ($Z$) eldesi:*

$Z = R + j \times \omega \times L\newline\hspace{0.1cm}\newline L: Inductance$

> Böylece fazörler yardımıyla alternatif akım ile beslenen bir RL devresinin çözümüne kolaylıkla ulaşılır, aynı işlem zaman domeninde çok daha karmaşık bir hale gelecekti.

---

## Karmaşık Sayılar Özeti

>Temelde $\sqrt{-1}$'in ifadesinde yaşanan zorluklar nedeniyle ortaya çıkan bir kavram.

![](./hafta-2-img/gorsel-(20).png)

**Kartezyen gösterim**:

Karmaşık sayı = $a + bj\newline\hspace{0.1cm}\newline a: Reel\hspace{0.1cm}Kisim\newline b: Imajiner \hspace{0.1cm}Kisim$

![](./hafta-2-img/gorsel-(17).png)

**Kutupsal gösterim**:

Karmaşık sayı = $Ce^{j\theta}$

![](./hafta-2-img/gorsel-(18).png)

*Kutupsal gösterimle işlemler*

![](./hafta-2-img/gorsel-(22).png)


**Karmaşık eşlenik:**

![](./hafta-2-img/gorsel-(19).png)

![](./hafta-2-img/gorsel-(21).png)

*Ekstra karmaşık sayı eşitlikleri*

![](./hafta-2-img/gorsel-(23).png)

![](./hafta-2-img/gorsel-(24).png)

![](./hafta-2-img/gorsel-(25).png)

---

## Sinüs ve Kosinüs Fazörleri

![](./hafta-2-img/gorsel-(26).png)

Toplama ve çıkarma işlemleri sırasında kartezyen koordinatlar, çarpma ve bölme işlemleri sırasında fazör gösterim kullanmak işlemleri kolaylaştıracaktır.

*Örnek Soru:*

![](./hafta-2-img/gorsel-(27).png)