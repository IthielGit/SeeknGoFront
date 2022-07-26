import React from "react";
import { Link } from "react-router-dom";

import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail} from "react-icons/md";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className=" border_top1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3>Liens utiles</h3>
              <ul className="link_menu">
              <li className="p__inter"> <Link to="/">Accueil</Link> </li>
          <li className="p__inter"> <Link to='/about'>A propos de nous</Link> </li>
          <li className="p__inter"> <Link to='/contact'>Contact</Link> </li>
              </ul>
            </div>
            <div className=" col-md-3">
              <h3>SeeknGo</h3>
              <p className="many">
                LE MOYEN LE PLUS SIMPLE DE TROUVER UNE ACTIVITÉ DE LOISIR À
                FAIRE À COTÉ DE CHEZ VOUS
              </p>
            </div>
            <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
              <h3>Contact </h3>
              <ul className="conta">
                <li>
                  {" "}
                  <ImLocation2 /> Faravohitra Antananarivo, Madagascar
                </li>
                <li>
                  {" "}
                  <MdEmail /> contact@seekng.mg
                </li>
                <li>
                  {" "}
                  <BsFillTelephoneFill /> + 261 (20) 22 234 56
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>© 2022 All Rights Reserved. SeeknGo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
