import React from 'react'

import { images } from "../../constants";
import { SubHeading, SubHeadingDark } from "../../components";

import './Howto.css'


function Howto() {
  return (
    <div>
      <div className="app__bg-dark section__padding" id="howTo">
        <SubHeadingDark title="Comment ça marche?" />
        {/* textInfo */}
        <div className="app__wrapper-howto flex__center">

          <div className="howto__container">
            <img src={images.blob1} alt="blob point" className='howto__img'></img>
            <h1 className="app__header_h1-desc">Se connecter</h1>
          </div>
          <div className="howto__container">
            <img src={images.blob2} alt="blob point" className='howto__img'></img>
            <h1 className="app__header_h1-desc">Rechercher une activité</h1>
          </div>
          <div className="howto__container">
            <img src={images.blob3} alt="blob point" className='howto__img'></img>
            <h1 className="app__header_h1-desc">Choisir une préstation</h1>
          </div>
          <div className="howto__container">
            <img src={images.blob4} alt="blob point" className='howto__img'></img>
            <h1 className="app__header_h1-desc">Remplir les informations <br></br> de réservation</h1>
          </div>
          <div className="howto__container">
            <img src={images.blob5} alt="blob point" className='howto__img'></img>
            <h1 className="app__header_h1-desc">Envoyer votre demande<br></br> de réservation</h1>
          </div>
          <div className="howto__container">
            <img src={images.blob6} alt="blob point" className='howto__img'></img>
            <h1 className="app__header_h1-desc">Recevoir une notification<br></br> pour le statut <br></br>du ticket de réservation</h1>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Howto