import React from 'react';

import { Header,Searchbar,Categorylist,Howto } from './container/';
import {Navbar, Footer} from './components/index';

import './App.css';


function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Searchbar/>
      <Categorylist />
      <Howto/>
      <Footer/>
    </div>
  );
}

export default App;
