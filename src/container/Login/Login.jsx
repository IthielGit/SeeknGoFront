import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { Navigate } from 'react-router-dom';
import { SubHeading, Navbar, Footer } from "../../components";
// import { useLocalState } from '../../util/useLocalStorage';

import './Login.css'
import { useNavigate } from 'react-router-dom';
import { seConnecter } from '../../services/reduxToolkit/UserSlice';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [accountType, setAccountType] = useState("");

  // Password toggle handler
  const togglePassword = () => {
    // toggle the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {

    fetch('http://localhost:8080/api/userlist')
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        setAllUsers(data)
      })
  }, [])

  //Filter user by email and password in order to get the accountType
  let filtered = allUsers.filter(item => item.email.includes(email) && item.password.includes(password));
  const userRole = filtered.map(item => (item.email))
  console.log("userRole : " + userRole);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    // console.log("current user" + email + password);
    const currentUser = {
      email: email,
      password: password
    }

    if (allUsers.length > 0) {
      axios.post("http://localhost:8080/api/loginUser", currentUser)
        .then(response => {
          // console.log(response.data.idUser);
          dispatch(seConnecter(response.data));
          navigate("/");
        })
        .catch(error => {
          alert("Email ou mot de passe erroné!")
        })

    // } else if (userRole[0] === "Partenaire") {
    //   axios.post("http://localhost:8080/api/loginUser", currentUser)
    //     .then(response => {
    //       // console.log(response.data.idUser);
    //       dispatch(seConnecter(response.data));
    //       navigate("/");
    //     })
    //     .catch(error => {
    //       alert("Email ou mot de passe erroné!")
    //     })

    // } else {
    //   axios.post("http://localhost:8080/api/loginUser", currentUser)
    //     .then(response => {
    //       // console.log(response.data.idUser);
    //       dispatch(seConnecter(response.data));
    //       navigate("/");
    //     })
    //     .catch(error => {
    //       alert("Email ou mot de passe erroné!")
    //     })
    }

  }


  return (
    <>
      <Navbar />
      <div className="container" id="loginForm">
        <SubHeading title="Connectez-vous" />

        <section className="login_section layout_padding-bottom layout_padding2-top">
          <div className="container">
            <div className="box layout_padding2">
              <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <div className="login-form">

                    <div>
                      <input type="email" placeholder="Email"
                        id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className='passwordContainer'>
                      <input type={passwordShown ? "text" : "password"} placeholder="Mot de passe"
                        id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                      {passwordShown ? <AiFillEyeInvisible className='iconEye' onClick={togglePassword} /> : <AiFillEye onClick={togglePassword} />}

                    </div>

                    {/* <select className="form-select" onChange={(e) => setAccountType(e.target.value)}
                      id="accountType" value={accountType} required>
                      <option disabled>Sélectionner le type de compte</option>
                      <option value="client">Client</option>
                      <option value="partenaire">Partenaire</option>
                      <option value="administrateur">Administrateur</option>
                    </select> */}

                    <div className="d-flex justify-content-center">
                      <button id='submit' type="button" onClick={handleSignin} className="custom__button-red">
                        Se connecter
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>

  )
}

export default Login