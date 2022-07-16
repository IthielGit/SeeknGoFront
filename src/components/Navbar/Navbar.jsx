import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__navbar-container app__bg-header'>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/"><img src={images.logo} alt="app logo" className='navbar-logo'/></Link>
        </div>
        <ul className="app__navbar-links">
          <li className="p__inter"> <Link to="/">Accueil</Link> </li>
          <li className="p__inter"> <Link to='/about'>A propos de nous</Link> </li>
          <li className="p__inter"> <Link to='/contact'>Contact</Link> </li>
        </ul>
        <div className="app__navbar-login">
          <Link to='/login' className="p__inter">Se connecter</Link>
          <div />
          <Link to='/signup' className="p__inter">S'inscrire</Link>
        </div>
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color="#0C0C0C" fontSize={27} onClick={() => {setToggleMenu(true)}}></GiHamburgerMenu>

          {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>  
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => {setToggleMenu(false)}} />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__inter"> <Link to="/">Accueil</Link> </li>
                <li className="p__inter"> <Link to='/about'>A propos de nous</Link> </li>
                <li className="p__inter"> <Link to='/contact'>Contact</Link> </li>
              </ul>
          </div>
          )} 

          
        </div>
      </nav>
    </div>
  )
};

export default Navbar;