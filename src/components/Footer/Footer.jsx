import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit";

import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdAddLocationAlt } from "react-icons/md";

import { images } from "../../constants";

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
              <h3>menu LINKS</h3>
              <ul className="link_menu">
                <li><a href="#">Home</a></li>
                <li><a href="about.html"> About</a></li>
                <li><a href="product.html">Our Product</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
            <div className=" col-md-3">
              <h3>TOP food</h3>
              <p className="many">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
              </p>
            </div>
            <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
              <h3>Contact </h3>
              <ul className="conta">
                <li><i className="fa fa-map-marker" aria-hidden="true"></i> Location</li>
                <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                <li><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
