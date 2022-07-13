import React from 'react';

import { Header,Categorylist,Howto } from './container/';
import {Navbar, Footer} from './components/index';

import './App.css';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Categorylist/>
      <Howto/>
      <Footer/>
    </div>
  );
}

export default App;
