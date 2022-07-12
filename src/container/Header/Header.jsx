import React from 'react';
import { SubHeading } from '../../components';


import './Header.css';

const Header = () => (
  <div>
    <div className="app__header app__bg-header app__wrapper-header section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Le moyen le plus simple de trouver une activité de loisir à faire à coté de chez vous</h1>
        <p className="p__inter header__p" style={{margin:'2rem 0', color:"var(--color-white)"}}>Tous avec SeeknGo !<br></br> Vous cherchez une activité à faire et vous manquez d'inspiration ? <br></br> SeeknGo vous propose un large choix d'activités et de loisirs à faire  toute l'année dans tout Madagascar. <br></br> Que ce soit en famille,  entre amis, pour une Team Building ou en solo, vous trouverez forcément la formule qui vous conviendra le mieux! Piscine, Yoga, karting,  paintball,  jeux vidéo, ateliers de cuisine, photographie, visites guidées...</p>
        <button type='button' className="custom__button-red">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">

      </div>
    </div>
  </div>
);

export default Header;