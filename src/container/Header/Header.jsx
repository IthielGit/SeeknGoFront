import React from 'react';
import { Searchbar } from '../../container/';



import './Header.css';

const Header = ({ type }) => (
  <div>
    <div className={type === "list" ? "app__bg-header section__padding_header list_mode" : "app__header app__bg-header section__padding_header"} id="home">

      {type !== "list" &&
        <>

          {/* textInfo */}
          <div style={{ margin: "5% 0" }}>
            <h1 className="app__header-h1">Le moyen le plus simple de trouver une activité de loisir à faire à coté de chez vous</h1>
          </div>
          <div style={{ margin: "5% 0" }}>
            <p className="p__inter header__p" style={{ margin: '4rem 0', color: "var(--color-white)", fontSize: "1.4rem" }}>Tous avec SeeknGo !<br></br> Vous cherchez une activité à faire et vous manquez d'inspiration ? <br></br> SeeknGo vous propose un large choix d'activités et de loisirs à faire  toute l'année dans tout Madagascar. <br></br> Que ce soit en famille,  entre amis, pour une Team Building ou en solo, vous trouverez forcément la formule qui vous conviendra le mieux! Piscine, Yoga, karting,  paintball,  jeux vidéo, ateliers de cuisine, photographie, visites guidées...</p>
          </div>
        </>
      }

      {/* searchbar */}
      <Searchbar type="list" />

    </div>
  </div>
);

export default Header;