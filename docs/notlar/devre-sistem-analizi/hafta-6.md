---
sidebar_position: 2
title: Hafta 6
description: Altıncı dersin konuları
---
## Maksimum Güç Aktarımı Koşulunun Elde Edilmesi

> Maksimum güç aktarımı koşulu kaynaktan yüke aktarılan aktif (ortalama) gücün maksimum olması ile alakalıdır.

*Aktaracağımız güç iş yapabileceğimiz güç olacak yani: **Aktif güç.***

![](./hafta-6-img/gorsel-(1).png)

Yük empedansına aktarılan gücün maksimum olabilmesi için yük üzerindeki ortalama gücün $R_{L}$ ve $X_{L}$'ye göre kısmi türevinin sıfır olması gerekmektedir.

![](./hafta-6-img/gorsel-(2).png)

![](./hafta-6-img/gorsel-(4).png)

![](./hafta-6-img/gorsel-(5).png)

![](./hafta-6-img/gorsel-(6).png)

![](./hafta-6-img/gorsel-(7).png)

İşlemler tamamlandıktan sonra maksimum güç için direnç ve reaktansın aşağıdaki değerlere eşit olması gerektiği ortaya çıkmaktadır:

![](./hafta-6-img/gorsel-(8).png)

![](./hafta-6-img/gorsel-(9).png)

![](./hafta-6-img/gorsel-(10).png)

![](./hafta-6-img/gorsel-(11).png)

![](./hafta-6-img/gorsel-(12).png)

Yük empedansının kısıtlamalı olması durumunda: $R_{L}$ ve $X_{L}$ belirli sınırlar içerisinde değişken olabiliyorsa $X_{L}$, $X_{th}$ değerine en yakın değerde seçilir

Yükün faz açısı sabit tutulmak kaydıyla genliği değiştirilebiliyorsa: $\theta_{L}$ sabit $Z_{L}$ değişken olursa $Z_{L}$ genliği $Z_{th}$'a en yakın şekilde seçilmelidir.

*Örnek Soru*:

![](./hafta-6-img/gorsel-(13).png)

*Örnek Soru*:

![](./hafta-6-img/gorsel-(14).png)

*Örnek Soru*:

![](./hafta-6-img/gorsel-(15).png)

![](./hafta-6-img/gorsel-(16).png)

*NOT: Alternatif akım devrelerinde kapasitenin yönünün Var değeri üzerinde herhangi bir etkisi bulunmamaktadır.*

---

## Ortak Endüktans ve Transformatörler

> *(Self-inductance, Mutual-inductance)*

### Öz Endüktans ve Ortak Endüktans

Bir endüktörün sargılarından geçen akımın oluşturduğu manyetik akımın oluşturduğu manyetik akının başka bir sargıyı etkilemesi durumudnda öz endüktans ve ortak endüktans kavramı ortaya çıkar.

![](./hafta-6-img/gorsel-(17).png)

**Öz Endüktans**: Bir bobinin içinden geçen akımın üzerinde oluşturduğu gerilim arasındaki ilişkiyi tanımlayan parametreye denir (L ile gösterilir ve birimi *Henry*).

**Ortak Endüktans**: Bir bobinin sargılarından geçen akım ile bu akımın oluşturduğu manyetik akının etkisiyle başka bir bobin üzerinde oluşan gerilim arasındaki ilişkiyi tanımlar. (M ile gösterilir ve birimi yine *Henry*).

![](./hafta-6-img/gorsel-(18).png)

**Noktaların Anlamı**: Uygulamada sargıların üzerinde izolasyon ve koruma kılıfları olacağından sargının yönünü bilemeyiz. Bu yüzden sarım yönünü ifade etmek için noktaları kullanırız. Akım bir sargının noktalı ucundan giriyorsa, bu akımın diğer sargı üzerindeki oluşturacağı gerilimin + kutpu sargılı noktalı tarafında oluşur.

![](./hafta-6-img/gorsel-(22).png)

![](./hafta-6-img/gorsel-(23).png)

Ortak endüktansın etkisini göstermek için oluşturulan eşlenik devre:

![](./hafta-6-img/gorsel-(19).png)

Bu devrenin terminal bağıntıları aşağıdaki gibidir:

![](./hafta-6-img/gorsel-(20).png)

*Ortak Reaktans Gösterimi*:

![](./hafta-6-img/gorsel-(21).png)

İki bobin içerisinden geçen akım farklı olduğu zaman $j \omega M$ değeri ile diğer bobin üzerinden geçen akım çarpılır.

İkiden fazla endüktans olması durumu: Bu durumda üç farklı ortak endektanstan bahsetmemiz gerekir.

![](./hafta-6-img/gorsel-(24).png)

Noktaların yeri değiştiği zaman:

![](./hafta-6-img/gorsel-(25).png)

Bu durumun da eşdeğer devresinin çizilmesi:

![](./hafta-6-img/gorsel-(26).png)

![](./hafta-6-img/gorsel-(27).png)

*NOT: Akım bir bobine hangi taraftan giriyorsa (nokta bazında) diğer tarafta oluşturacağı akım yönü de aynı yönde olur (yine nokta bazında) [Açıkçası oluşturacağı gerilimin pozitif tarafını bu şekilde belirliyor.]*

*NOT 2: Önceki görsellerden birinde yön karıştırılmış.*

Aşağıdaki devrenin eşdeğer endüktansının bulunması:

![](./hafta-6-img/gorsel-(28).png)

1. Fazör akımı eşdeğeri çizilir.
   
    ![](./hafta-6-img/gorsel-(29).png)

2. Eşdeğer devre çizilir.

    ![](./hafta-6-img/gorsel-(30).png)

3. Çevre akımları yöntemiyle devre çözülür.

Eşdeğer endüktans her zaman sıfırdan büyüktür ancak ortak endektans negatif olabilir. Ancak aşağıdaki eşitlik sağlanmalıdır.

![](./hafta-6-img/gorsel-(31).png)

**Kuplaj Katsayısı:** İki bobinin manyetik olarak ne kadar iyi birbirine bağlandığının bir göstergesi.

![](./hafta-6-img/gorsel-(32).png)

*Endüksiyon ocağı çalışma prensibi ve kuplaj katsayısı bağlantısı*

- k değeri büyükse: transformatör olarak değerlendirilir.
- k değeri küçükse: bobinlerin öz ve ortak endüktansı olacak şekilde ele alınmaları gereklidir.

*Örnek Soru*:

![](./hafta-6-img/gorsel-(33).png)

---

## Ortak Endüktanslı Devrelerde Enerji Hesabı

![](./hafta-6-img/gorsel-(34).png)

![](./hafta-6-img/gorsel-(35).png)

![](./hafta-6-img/gorsel-(36).png)

![](./hafta-6-img/gorsel-(37).png)

![](./hafta-6-img/gorsel-(38).png)

![](./hafta-6-img/gorsel-(39).png)

Bu yöntemin tersini uygulasaydık yani önce $i_{2}$'yi sıfırdan $I_{2}$'ye kadar artırıp $I_{2}$'de sabit tutup, $i_{1}$'i sıfırdan $I_{1}$'e kadar artırsaydık:

![](./hafta-6-img/gorsel-(40).png)

Noktaların yönü farklı olsaydı sondaki terim eksi olabilir, bunu şu şekilde gösterebiliriz:

![](./hafta-6-img/gorsel-(41).png)

Toplam enerji negatif olmaz.

![](./hafta-6-img/gorsel-(42).png)

![](./hafta-6-img/gorsel-(43).png)

![](./hafta-6-img/gorsel-(44).png)

---

## Doğrusal Transformatör

![](./hafta-6-img/gorsel-(45).png)

Transformatör: Dönüştürücü, gerilimi akımı ve empedansı belirli bir kayıp ile dönüştürür.

Gerçek transformatörler doğrusal olamaz, kullanılan malzemenin $\frac{B}{H}$ katsayısı yüzünden.

![](./hafta-6-img/gorsel-(46).png)

Dirençler sarımlar tarafından ortaya çıkartılır. ($R_{1}$ ve $R_{2}$ sargı direnci olarak tanımlanabilir.)

![](./hafta-6-img/gorsel-(47).png)

![](./hafta-6-img/gorsel-(48).png)

![](./hafta-6-img/gorsel-(49).png)

![](./hafta-6-img/gorsel-(50).png)

![](./hafta-6-img/gorsel-(51).png)

![](./hafta-6-img/gorsel-(52).png)

![](./hafta-6-img/gorsel-(53).png)

![](./hafta-6-img/gorsel-(54).png)

![](./hafta-6-img/gorsel-(55).png)