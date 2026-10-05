import type { ComponentType } from 'react';
import FormatyPapiru from './formaty-papiru';
import PrevodPxNaMm from './prevod-px-na-mm';
import RozmerVizitky from './rozmer-vizitky';
import Spadavka from './spadavka';
import TiskovaData from './tiskova-data';
import RgbVsCmyk from './rgb-vs-cmyk';
import FormatyLoga from './formaty-loga';
import GramazPapiru from './gramaz-papiru';
import GrafickeProgramy from './graficke-programy';

// Těla článků podle slugu (metadata jsou v ../articles.ts)
export const BODIES: Record<string, ComponentType> = {
  'formaty-papiru': FormatyPapiru,
  'prevod-px-na-mm': PrevodPxNaMm,
  'rozmer-vizitky': RozmerVizitky,
  spadavka: Spadavka,
  'tiskova-data': TiskovaData,
  'rgb-vs-cmyk': RgbVsCmyk,
  'formaty-loga': FormatyLoga,
  'gramaz-papiru': GramazPapiru,
  'graficke-programy': GrafickeProgramy,
};
