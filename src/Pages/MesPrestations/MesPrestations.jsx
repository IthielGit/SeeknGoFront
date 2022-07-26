import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Footer, Navbar, SearchItem, SubHeading } from '../../components'
import { data } from '../../constants'


import './MesPrestations.css'

function MesPrestations() {

  return (
    <div>
      <Navbar />
      <SubHeading title="Résultats" />
      <div className="activitiesListContainer">
        <div className="activitiesListWrapper">

          <div className="activitiesListSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Mots clés</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Province</label>
              <select className="" value="">
                <option>Province</option>
                {data.provinces.map((province, index) => (
                  <option key={index} defaultValue={province.title}>{province.title}</option>
                ))}
              </select>
            </div>
            <button>Rechercher</button>
            <Link to='/activityForm' className="siCheckButton">Créer une nouvelle préstation</Link>
          </div>

          <div className="activitiesListResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>

        </div>
      </div>
      <Footer />
      +Planning : date not inline + heure en string

    </div>
  )
}

export default MesPrestations