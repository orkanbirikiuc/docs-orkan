---
sidebar_position: 2
title: Hafta 3
description: Üçüncü dersin konuları
---
## Devre Elemanlarının Fazör Alanındaki Akım-Gerilim İlişkileri

### 1 - Direnç Elemanı

![](./hafta-3-img/gorsel-(1).png)

Direnç akım ve gerilim arasında herhangi bir faz farkına sebep olmaz. Zaman domeni ve frekans domeni gösterimleri birbirleriyle aynıdır.

![](./hafta-3-img/gorsel-(2).png)

### 2 - Endüktör Elemanı

> İpucu: Tanım bağıntılarında türevi alınan değer geriden gelir.

*Endüktör elemanı zaman domeni tanım bağıntısı*

$V_{L}=L\frac{di}{dt}$

![](./hafta-3-img/gorsel-(3).png)

![](./hafta-3-img/gorsel-(4).png)

Endüktör elemanı akımın 90 derece geriden gelmesine sebep olur. Frekans domeni akım-gerilim ilişkisi aşağıdaki gibidir:

![](./hafta-3-img/gorsel-(5).png)

### 3 - Kapasite Elemanı

*Kapasite elemanı zaman domeni tanım bağıntısı*

$i = C\frac{dV}{dt}$

![](./hafta-3-img/gorsel-(6).png)

![](./hafta-3-img/gorsel-(7).png)

![](./hafta-3-img/gorsel-(8).png)

Kapasitör gerilimi akımdan 90 derece geriden gelmektedir. Frekans domeni akım-gerilim ilişkisi aşağıdaki gibidir:

![](./hafta-3-img/gorsel-(9).png)

![](./hafta-3-img/gorsel-(10).png)

---

## Empedans Tanımı ve Elektrik Elemanlarının Empedansları

$V = Z \times I$

> Buradaki V ve I değerleri fazör gösterimdir.

$Z: \hspace{0.1cm}Empedans$

Direnç empedansı: $R$

Endüktör empedansı: $jwL$

Kapasitör empedansı: $\frac{1}{j\omega C}=\frac{-1j}{\omega C}$

Endüktif reaktans: $X_{L} = \omega L$ : Bobinin alternatif akım altında gösterdiği direnç.

Kapasitif reaktans: $X_{C} = \frac{1}{\omega C}$ : Endüktif için olan tanımın kapasite için olan hali.

---

## Fazör Alanında Kirchhoff Yasaları

> Kirchhoff yasaları fazörler için de geçerlidir ancak fazörlerde işlemin nasıl yapıldığı unutulmamalıdır.

### Gerilimler Yasası

![](./hafta-3-img/gorsel-(11).png)

**Sinüzoidal işaretler için 3 tip toplama:**

1. Aritmetik toplama (Faz açıları aynı, genlikler farklı ise): Bu toplamada genlikler toplanır, frekans ve faz açıları aynı olduğu için kalan kısım aynı şekilde kalır.

2. Fazör toplama (Faz açıları farklı ise): Bu toplamada kartezyen düzlemde karmaşık sayıların toplamı gerçekleştirilir.

3. RMS toplama (Frekanslar farklı ise)

*Örnek Soru:*

![](./hafta-3-img/gorsel-(12).png)

### Akımlar Yasası

Fazörler için de aynı şekilde gerçekleştirilir.

*Örnek Soru:*

![](./hafta-3-img/gorsel-(12).png)

---

## Fazör Alanında (Frekans Domeninde) Devre Çözümlemesi

![](./hafta-3-img/gorsel-(13).png)

1. Devrenin fazör alanı modeli elde edilir.
2. Bilinen yasalar fazör alanı tanımlarıyla uygulanır. (KGY-KAY-Ohm)
3. Çözüm fazör alanında elde edilir.
4. Fazör alanından zaman alanına dönülür.

Faz açısı negatif çıktığı zaman devre endüktif bir devre olmaktadır. Aynı şekilde pozitif faz açısı ise kapasitif bir devreye işaret etmektedir.

**Admittans (Frekans domenindeki iletkenlik)**:  $Y = \frac{1}{Z}$

$Y = G + jB$

İletkenlik: $G = \frac{1}{R}$ 

Suseptans: $B = \frac{-1}{X}$

---

## Üçgen-Yıldız Dönüşümü

### Üçgenden Yıldıza Dönüşüm

Dönüşüm aşağıdaki şekilce gerçekleştirilecektir:

![](./hafta-3-img/gorsel-(15).png)

İki şekil arasındaki dönüşüm yapıldığı zaman empedans değerleri de aşağıdaki şekildeki gibi dönüşecektir:

![](./hafta-3-img/gorsel-(16).png)

### Yıldızdan Üçgene Dönüşüm

Bu dönüşümde ise değerler aşağıdaki bağıntılar ile düzenlenecektir:

![](./hafta-3-img/gorsel-(17).png)

*Örnek Soru*

![](./hafta-3-img/gorsel-(19).png)