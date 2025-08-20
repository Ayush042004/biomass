export interface Partner {
  name: string;
  logo: string;
}
import ntpc from '../assets/ntpc.png';
import mercury from '../assets/Mercurylogo.png';
import weavetex from '../assets/weavetex.jpg';
import ssf from '../assets/ssf.png';
import shiroki from '../assets/shiroki.jpg';
import coke from "../assets/coke.webp";
import shree from "../assets/logoshree.png";
import Vb from "../assets/apple-touch-icon.png";
import shi from "../assets/images.jpg"
export const partners: Partner[] = [
  {
    name: 'NTPC',
    logo: ntpc
  },
  {
    name: 'Varun Beverages',
    logo: Vb
  },
  {
    name: 'Coca-Cola',
    logo: coke
  },
  {
    name: 'Mercury',
    logo: mercury
  },
  {
    name: 'Shreeji',
    logo: shree
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
    logo: shi
  }
];