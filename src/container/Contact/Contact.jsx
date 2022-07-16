import React from "react";
import { SubHeading, Navbar, Footer } from "../../components";

import './Contact.css';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container" id="contactForm">
        <SubHeading title="Contactez-nous" />

        <section className="contact_section layout_padding-bottom layout_padding2-top">
          <div className="container">
            <div className="box layout_padding2">
              <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <div className="contact-form">
                    <form action="">
                      <div>
                        <input type="text" placeholder="Nom" />
                      </div>
                      <div>
                        <input type="text" placeholder="Prénom" />
                      </div>
                      <div>
                        <input type="text" placeholder="Numéro de telephone" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Message" className="input_message" />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="custom__button-red">
                          Envoyer
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Contact;
