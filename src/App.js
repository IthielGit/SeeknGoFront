import React from 'react';

import { Header,Searchbar,Categorylist,Howto } from './container/';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

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
