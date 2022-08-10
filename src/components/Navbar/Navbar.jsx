import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';
import { currentUser$, resetCurrentUser } from '../../services/rxjs/loggedUser';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
/* TSY HOVAINA "===" ILAY "==" REHETRA IZAY MISY ERROR */
  const [currentUser, setCurrentUser] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  

  useEffect(() => {
    //RXJS Behaviour listener
    currentUser$.subscribe((newCurrentUser) => setCurrentUser([...newCurrentUser]));
  }, [])

  const authority = currentUser.map(item => (item.authority.authority))

  console.log(authority);


  const handleLogout = () => {
    resetCurrentUser();
  };


  return (
    <div className='app__navbar-container app__bg-header'>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/"><img src={images.logo} alt="app logo" className='navbar-logo' /></Link>
        </div>

        {authority == "" && (
          <ul className="app__navbar-links">
            <li className="p__inter"> <Link to="/">Accueil</Link> </li>
            <li className="p__inter"> <Link to='/about'>A propos de nous</Link> </li>
            <li className="p__inter"> <Link to='/contact'>Contact</Link> </li>
          </ul>
        )}

        {authority == "PARTENAIRE" && (
          <ul className="app__navbar-links">
            <li className="p__inter"> <Link to='/mesreservations'>Mes réservations</Link> </li>
            <li className="p__inter"> <Link to='/mesprestations'>Mes préstations</Link> </li>
            <li className="p__inter"> <Link to="/moncompte">Mon compte</Link> </li>
          </ul>
        )}

        {authority == "ADMIN" && (
          <ul className="app__navbar-links">
            <li className="p__inter"> <Link to="/moncompte">Mon compte</Link> </li>
            <li className="p__inter"> <Link to='/dashboard'>Tableau de bord</Link> </li>
          </ul>
        )}

        {authority == "CLIENT" && (
          <ul className="app__navbar-links">
            <li className="p__inter"> <Link to="/moncompte">Mon compte</Link> </li>
            <li className="p__inter"> <Link to='/contact'>Contact</Link> </li>
            <li className="p__inter"> <Link to='/mesreservations'>Mes réservations</Link> </li>
          </ul>
        )}

        {authority == "" && (
          <div className="app__navbar-login">
            <Link to='/login' className="p__inter">Se connecter</Link>
            <div />
            <Link to='/signup' className="p__inter">S'inscrire</Link>
          </div>

        )}
        {authority != "" && (
          <div className="app__navbar-login">
            <Link to='/login' className="p__inter" onClick={handleLogout}>Se déconnecter</Link>
          </div>
        )}

        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color="#0C0C0C" fontSize={27} onClick={() => { setToggleMenu(true) }}></GiHamburgerMenu>

          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />

              {/* <li className="p__inter"> <Link to="/">Accueil</Link> </li>
                <li className="p__inter"> <Link to='/about'>A propos de nous</Link> </li>
                <li className="p__inter"> <Link to='/mesprestations'>Mes préstations</Link> </li>
                <li className="p__inter"> <Link to='/mesreservations'>Mes réservations</Link> </li>


                <li className="p__inter"> <Link to='/login' onClick={handleLogout}>Se déconnecter</Link> </li>
                 */}

              {authority == "" && (
                <ul className="app__navbar-smallscreen_links">
                  <li className="p__inter"> <Link to="/">Accueil</Link> </li>
                  <li className="p__inter"> <Link to='/about'>A propos de nous</Link> </li>
                  <li className="p__inter"> <Link to='/contact'>Contact</Link> </li>
                </ul>
              )}

              {authority == "PARTENAIRE" && (
                <ul className="app__navbar-smallscreen_links">
                  <li className="p__inter"> <Link to="/">Accueil</Link> </li>
                  <li className="p__inter"> <Link to='/mesreservations'>Mes réservations</Link> </li>
                  <li className="p__inter"> <Link to='/mesprestations'>Mes préstations</Link> </li>
                </ul>
              )}

              {authority == "ADMIN" && (
                <ul className="app__navbar-smallscreen_links">
                  <li className="p__inter"> <Link to='/dashboard'>Tableau de bord</Link> </li>
                  <li className="p__inter"> <Link to="/moncompte">Mon compte</Link> </li>
                </ul>
              )}

              {authority == "CLIENT" && (
                <ul className="app__navbar-smallscreen_links">
                  <li className="p__inter"> <Link to="/moncompte">Mon compte</Link> </li>
                  <li className="p__inter"> <Link to='/contact'>Contact</Link> </li>
                  <li className="p__inter"> <Link to='/mesreservations'>Mes réservations</Link> </li>
                </ul>
              )}

              {authority == "" && (
                <ul className="app__navbar-smallscreen_links">
                  <Link to='/login' className="p__inter">Se connecter</Link>
                  <div />
                  <Link to='/signup' className="p__inter">S'inscrire</Link>
                </ul>

              )}
              {authority != "" && (
                <ul className="app__navbar-smallscreen_links">
                  <Link to='/login' onClick={handleLogout} className="p__inter">Se déconnecter</Link>
                </ul>
              )}

            </div>
          )}


        </div>
      </nav>
    </div>
  )
};

export default Navbar;