import { v4 as uuidv4 } from 'uuid';
import { DropdownItem } from './types';

export const menuDishes: DropdownItem[] = [
    {
      id: uuidv4(),
      title: 'I Danie na gorąco',
      content: [
        'Domowy rosół z makaronem, pietruszką i marchewką',
        'Roladka ze schabu z pieczarkami w sosie z podgrzybków',
        'Roladka z piersi kurczaka panierowana z serem/sznycel drobiowy',
        'Karczek pieczony w ziołach',
        'Udko pieczone faszerowane',
        'Ziemniaki z wody z koperkiem',
        'Surówka z czerwonej kapusty',
        'Mix salat',
        'DESER: sorbet oraz lody z bitą śmietaną i polewą'
      ]
    },
    {
      id: uuidv4(),
      title: 'II Danie na gorąco',
      content: [
        'Schab po madrycku',
        'Szaszłyk z drobiu',
        'Kotlet de volaille z masłem, mozarellą i czerwonym pieprzem',
        'Ziemniaki zapiekane/frytki',
        'Młoda kapusta na słodko'
      ]
    },
    {
      id: uuidv4(),
      title: 'III Danie na gorąco',
      content: ['Czerwony barszczyk z pierogami']
    },
    {
      id: uuidv4(),
      title: 'IV Danie na gorąco',
      content: [
        'Zraz wołowy',
        'Zraz wieprzowy',
        'Nadziewana kieszeń ze schabu',
        'Gnocchi',
        'Warzywa na parze z masełkiem'
      ]
    },
    {
      id: uuidv4(),
      title: 'V Danie na gorąco',
      content: ['Żur staropolski z jajkiem i kiełbasą']
    },
    {
      id: uuidv4(),
      title: 'Zakąski',
      content: [
        'Pasztet z żurawiną',
        'Wrapy z kurczaka/wegetariańskie',
        'Szynka parmeńska na melonie z sosem sezamowym',
        'Kurczak z sezamem z grilla na sałacie w sosie śliwkowym',
        'Brokuły z serem wędzonym, płatkami migdałów i sosem czosnkowym',
        'Gruszka na bukiecie salat z serem pleśniowym, orzechami i sosem pomarańczowym',
        'Pierś z kurczaka pieczona na słodko-kwaśno z ananasem i śliwką',
        'Kaczka pieczona z orzechami w sosie barbacue na sałacie',
        'Półmisek Szefa: schab ze śliwką, schab po sztygarsku, rolada z jajkiem, rolada z piersi indyka ze szpinakiem, salami, szynka wieprzowa',
        'Śledź w śmietanie',
        'Szynka wiejska, kielbasa 2 rodzaje, kaszanka, pasztetowa, czarne, salceson biały i czarny, cienkie kielbaski białe, boczek, pasztet, smalec, ogórki kiszone, grzybki, papryka, cebulki'
      ]
    },
    {
      id: uuidv4(),
      title: 'Stół słodki',
      content: [
        'Ciasta 7 gatunków',
        'Mix mini deserków',
        'Kolorowe babeczki',
        'Klosze owocowe'
      ]
    },
    {
      id: uuidv4(),
      title: 'Napoje zimne i gorące',
      content: [
        'Kawa, herbata czarna i owocowa',
        'Pepsi-cola, Mirinda, woda mineralna z miętą i cytryną',
        'Soki: jabłkowy, pomarańczowy'
      ]
    }
  ];