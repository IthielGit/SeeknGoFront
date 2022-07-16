import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Contact, About, ErrorPage, Login, SignUp } from "./container/";

import "./App.css";
import { ActivitiesList, HomeMain } from "./Pages";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/activities" element={<ActivitiesList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route component={ErrorPage} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
