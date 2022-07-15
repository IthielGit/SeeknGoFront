import React from 'react'
import { SubHeading } from "../../components";

import './Login.css'


function Login() {
  return (
    <div className="container" id="loginForm">
      <SubHeading title="Connectez-vous" />

      <section className="login_section layout_padding-bottom layout_padding2-top">
        <div className="container">
          <div className="box layout_padding2">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <div className="login-form">
                  <form action="">
                    <div>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <input type="password" placeholder="Mot de passe"/>
                    </div>

                    <select class="form-select" required>
                      <option selected>Sélectionner le type de compte</option>
                      <option value="client">Client</option>
                      <option value="partenaire">Partenaire</option>
                      <option value="administrateur">Administrateur</option>
                    </select>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="custom__button-red">
                        Se connecter
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
  )
}

export default Login