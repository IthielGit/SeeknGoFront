import images from './images';

const category = [
  {
    id: 1,
    title: 'Bien être',
    imgUrl: images.bienEtre,
  },
  {
    id: 2,
    title: 'Sports et loisirs',
    imgUrl: images.sportLoisir,
  },
  {
    id: 3,
    title: 'Fun Time',
    imgUrl: images.funTime,
  },
  {
    id: 4,
    title: 'Balades',
    imgUrl: images.balades,
  },
  {
    id: 5,
    title: 'Virtuels',
    imgUrl: images.virtuels,
  },
  {
    id: 6,
    title: 'Ateliers',
    imgUrl: images.ateliers,
  },
];

//Tarifs de SOA => changé en fetch dans le backend par activity id 
const tarifs = [
  {
    partenaire: 'Yoga Soa',
    location: 'Lalana Andrianaivoravelona Joseph Ampefiloha Antananarivo, Madagascar 101',
    title: 'A domicile',
    prix: 22000
  },
  {
    partenaire: 'Yoga Soa',
    location: 'Lalana Andrianaivoravelona Joseph Ampefiloha Antananarivo, Madagascar 101',
    title: 'En salle',
    prix: 24500
  },
  {
    partenaire: 'Yoga Soa',
    location: 'Lalana Andrianaivoravelona Joseph Ampefiloha Antananarivo, Madagascar 101',
    title: 'En visio',
    prix: 20000
  },



];

const provinces = [
  {
    id: 1,
    title: 'Antananarivo',
  },
  {
    id: 2,
    title: 'Antsiranana',
  },
  {
    id: 3,
    title: 'Mahajanga',
  },
  {
    id: 4,
    title: 'Toliary',
  },
  {
    id: 5,
    title: 'Fianarantsoa',
  },
  {
    id: 6,
    title: 'Toamasina',
  },

];
const times = [
  {
    date: '22/07/2022',
    hour: '15:30',
  },
  {
    date: '22/07/2022',
    hour: '20:30',
  },
  {
    date: '22/07/2022',
    hour: '22:30',
  },
  {
    date: '25/07/2022',
    hour: '09:30',
  },

];

const photoSample = [
  {
    src: "https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },

];

// eslint-disable-next-line import/no-anonymous-default-export
export default { category, provinces, photoSample, tarifs, times }
