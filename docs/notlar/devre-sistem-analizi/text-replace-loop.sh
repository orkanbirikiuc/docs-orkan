#!/bin/bash

for i in {1..100}
do
  sed -i "s|./gorsel-($i)|./hafta-7-img/gorsel-($i)|g" hafta-7.md
done

