import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faBars,
  // faAlignLeft,
  // faUserCircle,
  // faCaretSquareDown,
  // faSearch,
  // faSliders,
  faBell,
  faGlobe,
  faUser,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

// ********* BACKROADS APP **************

import tour1 from './images/imagesR/tour-1.jpeg';
import tour2 from './images/imagesR/tour-2.jpeg';
import tour3 from './images/imagesR/tour-3.jpeg';
import tour4 from './images/imagesR/tour-4.jpeg';
import tour5 from './images/imagesR/tour-5.jpeg';
import tour6 from './images/imagesR/tour-6.jpeg';
// ********* BACKROADS APP  END **************
import img7 from '../src/images/NIGMA-IMAGE.png';
import img8 from '../src/images/profile.jpg';
import img9 from '../src/images/Snip20220826_2.png';
import img10 from '../src/images/Snip20220828_3.png';
import img11 from '../src/images/Snip20220829_4.png';
import img12 from '../src/images/Snip20220829_6.png';
import img13 from '../src/images/cambios.png';
import img14 from '../src/images/lam.png';
import img15 from '../src/images/un-refugees.png';
// import img15 from '../src/images/unhcr.png';
import img16 from '../src/images/alfaiataria.jpeg';
import img17 from '../src/images/at.jpeg';
import img18 from '../src/images/cfm.jpg';
import img19 from '../src/images/igreja.jpeg';
import img20 from '../src/images/logo-senami.png';
import img21 from '../src/images/manchester.png';
import img22 from '../src/images/municipio.jpeg';
import img23 from '../src/images/prm.jpeg';
import img24 from '../src/images/tpm.jpeg';
import img25 from '../src/images/veg.jpg';

export const navLinks = [
  {
    id: 1,
    class: 'lang-icons',
    icon: <FontAwesomeIcon icon={faGlobe} />,
    dropdown: <FontAwesomeIcon icon={faCaretDown} />,
    text: 'Select Language',
  },
  {
    id: 2,
    class: 'bell-icon',
    icon: <FontAwesomeIcon icon={faBell} />,
    dropdown: '',
    text: 'Notification',
    // dropdown: <FontAwesomeIcon icon={faCaretDown} />,
  },
  {
    id: 3,
    class: 'user-icons',
    icon: <FontAwesomeIcon icon={faUser} />,
    dropdown: <FontAwesomeIcon icon={faCaretDown} />,
    text: 'Login/Register',
  },
];

export const footerLinks = [
  { id: 1, classs: 'link', text: 'about' },
  { id: 2, classs: 'link', text: 'terms of use' },
  { id: 3, classs: 'link', text: 'privacy policy' },
  { id: 4, classs: 'link', text: 'contact us' },
];

// ********* BACKROADS APP **************

// export const pageLinks = [
//   { id: 1, href: '#home', text: 'home' },
//   { id: 2, href: '#about', text: 'about' },
//   { id: 3, href: '#services', text: 'services' },
//   { id: 4, href: '#tours', text: 'tours' },
// ];

// export const socialLinks = [
//   {
//     id: 1,
//     href: 'https://www.facebook.com',
//     icon: 'fab fa-facebook',
//   },
//   {
//     id: 2,
//     href: 'https://www.twitter.com',
//     icon: 'fab fa-twitter',
//   },
//   {
//     id: 3,
//     href: 'https://www.squarespace.com',
//     icon: 'fab fa-squarespace',
//   },
// ];

// export const services = [
//   {
//     id: 1,
//     icon: 'fas fa-wallet fa-fw',
//     title: 'saving money',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
//   },
//   {
//     id: 2,
//     icon: 'fas fa-tree fa-fw',
//     title: 'endless hiking',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
//   },
//   {
//     id: 3,
//     icon: 'fas fa-socks fa-fw',
//     title: 'amazing comfort',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
//   },
// ];

export const posts = [
  {
    id: 1,
    image: tour1,
    update: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime.',
    location: 'china',
    duration: '6',
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    update: 'october 1th, 2020',
    title: 'best of java',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime.',
    location: 'indonesia',
    duration: '11 ',
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    update: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime.',
    location: 'hong kong',
    duration: '8 ',
    price: 5000,
  },
  {
    id: 4,
    image: tour4,
    update: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime.',
    location: 'kenya',
    duration: '20 ',
    price: 3300,
  },
  {
    id: 5,
    image: tour5,
    update: 'december 5th, 2019',
    title: 'gorongoza park',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime.',
    location: 'mozambique',
    duration: '20 ',
    price: 9900,
  },
  {
    id: 6,
    image: tour6,
    update: 'december 5th, 2019',
    title: 'taj mahal',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime.',
    location: 'india',
    duration: '20 ',
    price: 3300,
  },
  {
    id: 7,
    image: img7,
    update: 'we are hiring!',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, which delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },

  {
    id: 8,
    image: img8,
    update: 'pedreiro procurando biscates',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },

  {
    id: 9,
    image: img9,
    update: 'clearing stocks from next week ',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 10,
    image: img10,
    update: 'new showroom in #Mafalala!',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 11,
    image: img11,
    update: 'New release, hybrid model!',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, which delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 12,
    image: img12,
    update: 'celebrating our 50th anniversary, 50% off!',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 13,
    image: img13,
    update: 'MZN/USD=63.5 EUR=67.3 ZAR=3.4',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 14,
    image: img14,
    update: 'New destination, Maputo-Lagos from 21,000Mt',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 15,
    image: img15,
    update: 'accepting <u>donation</u> for Israel-Hamas war refugees',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 16,
    image: img16,
    update: 'desc.30% p/uniforme escolar ate 30.Nov.23 ',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 17,
    image: img17,
    update: 'isencao de todas taxas aduaneiras para startups, a partir...',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },

  {
    id: 18,
    image: img18,
    update: 'brevemente, nova rota Maputo-Maxixe-Beira',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 19,
    image: img19,
    update: 'preparativos da visita do santo papa',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 20,
    image: img20,
    update: 'to start online passport application for expats',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 21,
    image: img21,
    update: 'contractando 3 jgdores africanos...',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 22,
    image: img22,
    update: 'atribuicao de DUAT reduzido para 5 dias',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 23,
    image: img23,
    update: `BI's gratuitos para estudantes e idosos`,
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 24,
    image: img24,
    update: 'novas tarifas a partir de 11/12/23',
    title: 'nigma pictures',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
  {
    id: 25,
    image: img25,
    update: '400Mt/album, 80Mt/Musica',
    title: 'Vania Graciano',
    info: 'We are worldwide film production company, that delivers quality content media at competitive budget. We produce movies, documentaries, long and short videos, commercials, event coverages and more.',
    location: 'Maputo',
    duration: '44 ',
    price: 5300,
  },
];
