import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__navbar-container'>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="app logo" className='navbar-logo'/>
        </div>
        <ul className="app__navbar-links">
          <li className="p__roboto"> <a href='#home'>Accueil</a> </li>
          <li className="p__roboto"> <a href='#about'>A propos de nous</a> </li>
          <li className="p__roboto"> <a href='#contact'>Contact</a> </li>
        </ul>
        <div className="app__navbar-login">
          <a href='#login' className="p__roboto">Login / Register</a>
          <div />
          <a href='#/' className="p__roboto">Book table</a>
        </div>
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color="#0C0C0C" fontSize={27} onClick={() => {setToggleMenu(true)}}></GiHamburgerMenu>

          {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>  
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => {setToggleMenu(false)}} />
            <ul className="app__navbar-smallscreen_links">
            <li className="p__roboto"> <a href='#home'>Accueil</a> </li>
          <li className="p__roboto"> <a href='#about'>A propos de nous</a> </li>
          <li className="p__roboto"> <a href='#contact'>Contact</a> </li>
            </ul>
          </div>
          )} 

          
        </div>
      </nav>
    </div>
  )
};

export default Navbar;