import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact, About, ErrorPage, Login, SignUp } from "./container/";
import { ActivitiesList, ActivitySingle, HomeMain, Reservation } from "./Pages";

import "./App.css";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/activities" element={<ActivitiesList />} />
        <Route path="/activity/:id" element={<ActivitySingle/>} />
        <Route path="/activity/:id/reservation" element={<Reservation/>} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
