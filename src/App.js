import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Categorylist, Howto, Contact, About, ErrorPage, Login, SignUp } from "./container/";
import { Navbar, Footer, Landing } from "./components/";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={ErrorPage} />
      </Switch> 

      <Footer />
    </Router>
  );
}

export default App;
