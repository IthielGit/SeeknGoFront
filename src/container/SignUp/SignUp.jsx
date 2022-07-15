import React, { useState, useEffect } from 'react'
import { SubHeading } from "../../components";
import { data } from '../../constants'

import './SignUp.css'

function SignUp() {

  const [accountType, setAccountType] = useState(null);

  const [nifContentVisible, setNifContentVisible] = useState(false);

  useEffect(() => {
    accountType === "partenaire" ? setNifContentVisible(true) : setNifContentVisible(false);
  }, [accountType]);

  const handleChange = (e) => {
    setAccountType(e.target.value);
  }

  return (
    <div className="container" id="signupForm">
      <SubHeading title="Inscrivez-vous" />
      
      <section className="signup_section layout_padding-bottom layout_padding2-top">
        <div className="container">
          <div className="box layout_padding2">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <div className="signup-form">
                  <form action="">

                    <select className="form-select" id="accountType" value={accountType} onChange={handleChange} required>
                      <option selected>Sélectionner le type de compte</option>
                      <option value="client">Client</option>
                      <option value="partenaire">Partenaire</option>
                    </select>
                    <div className='app__signup_inputs__inline'>
                      <input className="signup__input" type="text" placeholder="Prénom" />
                      <input type="text" placeholder="Nom" />
                    </div>
                    <div>
                      <input type="text" placeholder="Numéro de telephone" />
                    </div>
                    <div className='app__signup_inputs__inline'>
                      <input className="signup__input" type="text" placeholder="Adresse" />
                      <select className="form-select" required>
                        <option>Province</option>
                        {data.provinces.map((province, index) => (
                          <option key={index} value={province.title}>{province.title}</option>
                        ))}
                      </select>
                    </div>

                    {nifContentVisible &&
                      <div>
                        <input type="text" placeholder="Numéro NIF" />
                        <input type="text" placeholder="Numéro STAT" />
                        <input type="text" placeholder="Numéro RCS" />
                      </div>
                    }
                    <div>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <input type="password" placeholder="Mot de passe" />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="custom__button-red">
                        S'inscrire
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

export default SignUp
