import images from './images';

const category = [
  {
    title: 'Bien être',
    imgUrl: images.bienEtre,
  },
  {
    title: 'Sports et loisirs',
    imgUrl: images.sportLoisir,
  },
  {
    title: 'Fun Time',
    imgUrl: images.funTime,
  },
  {
    title: 'Balades',
    imgUrl: images.balades,
  },
  {
    title: 'Virtuels',
    imgUrl: images.virtuels,
  },
  {
    title: 'Ateliers',
    imgUrl: images.ateliers,
  },
];

//Tarifs de SOA => changé en fetch dans le backend par activity id 
const tarifs = [
  {
    partenaire:'Yoga Soa',
    location:'Lalana Andrianaivoravelona Joseph Ampefiloha Antananarivo, Madagascar 101',
    title: 'A domicile',
    prix : 22000
  },
  {
    partenaire:'Yoga Soa',
    location:'Lalana Andrianaivoravelona Joseph Ampefiloha Antananarivo, Madagascar 101',
    title: 'En salle',
    prix : 24500
  },
  {
    partenaire:'Yoga Soa',
    location:'Lalana Andrianaivoravelona Joseph Ampefiloha Antananarivo, Madagascar 101',
    title: 'En visio',
    prix : 20000
  },



];

const provinces = [
  {
    title: 'Antananarivo',
  },
    {
    title: 'Antsiranana',
  },
    {
    title: 'Mahajanga',
  },
    {
    title: 'Toliary',
  },
    {
    title: 'Fianarantsoa',
  },
    {
    title: 'Toamasina',
  },
  
];

const photoSample = [
  {
    src: "https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1593358578736-186f3d13c789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1552286450-4a669f880062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1557512724-931547195611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {category, provinces, photoSample,tarifs}
