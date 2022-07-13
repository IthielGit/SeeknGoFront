import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit";

import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail,MdAddLocationAlt } from "react-icons/md";

import { images } from "../../constants";

import "./Footer.css";

function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "var(--color-black)" }}
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="app__footer">
          <MDBCol className="app__footer-col_1" md="4">
              <img src={images.logo} alt="Logo" />
          </MDBCol>
          <MDBCol className="app__footer-col_2" md="4">
            <h5 className="title">Liens utiles</h5>
              <ul className="app__footer-links">
                <li className="p__inter" style={{color: 'white'}}><a href="#home">Accueil</a></li>
                <li className="p__inter" style={{color: 'white'}} ><a href="#about">A propos de nous</a></li>
                <li className="p__inter" style={{color: 'white'}} ><a href="#contact">Contact</a></li>
              </ul>
          </MDBCol>
          <MDBCol className="app__footer-col_3" md="4">
            <h5 className="title">Coordonées</h5>
            <ul className="app__footer-list">
              <li> <ImLocation2/>Rue 20 Faravohitra</li>
              <li> <MdAddLocationAlt/>Antananarivo Madagscar 101</li>
              <li> <BsFillTelephoneFill/>+34 26 555 15</li>
              <li> <MdEmail/>seekngo@seekngo.com</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="app__footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright {"SeeknGo"}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
