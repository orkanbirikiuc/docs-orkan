---
sidebar_position: 2
title: Hafta 3
description: Üçüncü dersin konuları
---
## 8051 Registerları

8 bit registerlar:

- A
- B
- R0
- R1
- R2
- R3
- R4
- R5
- R6
- R7

16 bit registerlar:


## 8051 Komutları

**MOV Komutu**: Sourceyi destination'a kopyalama işlemini yapan komut

`MOV Destination, Source`

Burada source hex bir sayı olabilir ve şu şekilde gösterilir:

`#023H`

İki operand yerine de bir register yazılabilir.

İki tip hata:

- Syntax hatası
- Logic hatası (compiler söylemez)

**ADD Komutu**

`ADD A, Value`

Buradaki value bir değer veya register olabilir ancak her zaman ilk operand A olacaktır.

8051 serisinde PC her zaman 0000'dan başlar.

8051'de halt komutu olmadığı için HERE: SJMP HERE ile program sonlandırılır.

8051 ailesi 64K byte'dan fazla büyüklükte program çalıştıramaz, float point değildir (fixed point) ve tüm registerlar ve data tipleri 8 bittir.

`END`: Compilera programın sonlandığını iletir.

`EQU`: Değişken ayarlarken kullanılır, kod yazılırken kolaylık sağlamak için kullanılır.

`PSW` - Flag bitleri bu register içerisinde tutulur.

PSW.1'de kullanılan .1 saklayıcı içerisindeki 1 numaralı biti ifade eder.

Flag bitlerini etkileyen komutlar:

8051 internal RAM'i ve register bankları:

PSW.3 ve .4 ile bank değiştirilir

`SETB PSW.4`

## 8051 Simulatörleri

