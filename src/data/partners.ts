export interface Partner {
  name: string;
  logo: string;
}
import ntpc from '../assets/ntpc.png';
import v3 from '../assets/v3.jpg';
import cocacola from '../assets/cocacola.jpg';
import mercury from '../assets/Mercurylogo.png';
import shreeji from '../assets/shreeji.jpg';
import weavetex from '../assets/weavetex.jpg';
import ssf from '../assets/ssf.png';
import shiroki from '../assets/shiroki.jpg';
export const partners: Partner[] = [
  {
    name: 'NTPC',
    logo: ntpc
  },
  {
    name: 'Varun Beverages',
    logo: v3
  },
  {
    name: 'Coca-Cola',
    logo: cocacola
  },
  {
    name: 'Mercury',
    logo: mercury
  },
  {
    name: 'Shreeji',
    logo: shreeji
  },
  {
    name: 'Weavetex',
    logo: weavetex
  },
  {
    name: 'SSF',
    logo: ssf
  },
  {
    name: 'Shiroki',
    logo: shiroki
  }
];