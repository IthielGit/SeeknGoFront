import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { SubHeading, Navbar, Footer } from "../../components";
import { addCurrentUser, currentUser$ } from '../../services/rxjs/loggedUser';

import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([]);

  // Password toggle handler
  const togglePassword = () => {
    // toggle the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    //getting all users from the database
    fetch('http://localhost:8080/user/list')
      .then((data) => data.json())
      .then((data) => {
        setAllUsers(...allUsers, data)
      })
    //RXJS Behaviour listener
    currentUser$.subscribe((newCurrentUser) => setCurrentUser([...newCurrentUser]));
  }, [])

  // console.log("------------------AllUsers---------------------");
  // console.log(allUsers);

  function handleSignin() {

    const reqBody = {
      email: email,
      password: password,
    };
    fetch("http://localhost:8080/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        // console.log(response.status);
        if (response.status === 200) {
          // const authority = filtered.map(item => (item.authority.authority))
          // const userID = currentData.map(item => (item.idUser))
          // dispatch(seConnecter(filtered[0]));
          // console.log("response OK");
          // console.log(reqBody);
          // console.log("******************AllUserAfterclick**********************");
          // console.log(allUsers);
          // console.log("******************FilterafterClick**********************");
          let dataFilter = allUsers.filter(item => item.email.includes(reqBody.email) && item.password.includes(reqBody.password));
          addCurrentUser(dataFilter[0]);
          navigate("/");
        } else {
          alert("response error");
        }
      })
      .catch(error => {
        alert("Identifiant ou mot de passe erroné!")
      });
  }

  console.log("******************newCurrrent ures after Click from Behaviour**********************");
  console.log(currentUser);

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