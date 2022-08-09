import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact, About, ErrorPage, Login, SignUp, ActivityCreationForm } from "./container/";
import { ActivitiesList, ActivitySingle, HomeMain, Reservation, MesReservations, MesPrestations, MonCompte, DashboardAdmin } from "./Pages";

import "./App.css";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* public */}
        <Route path="/" element={<HomeMain />} />
        <Route path="/activities" element={<ActivitiesList />} />
        <Route path="/activity/:id" element={<ActivitySingle/>} />
        <Route path="/activity/:id/reservation" element={<Reservation/>} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage/>} />

        {/* partenaire */}
        <Route path="/mesprestations" element={<MesPrestations/>} />
        <Route path="/mesreservations" element={<MesReservations/>} />
        <Route path="/moncompte" element={<MonCompte/>} />
        <Route path="/activityForm" element={<ActivityCreationForm/>} />

        {/* admin */}
        <Route path="/dashboard" element={<DashboardAdmin/>} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
