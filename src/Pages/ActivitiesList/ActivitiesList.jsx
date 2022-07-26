import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Footer, Navbar, SearchItem, SubHeading } from '../../components'
import { data } from '../../constants'


import './ActivitiesList.css'

function ActivitiesList() {
  const location = useLocation();

  const [keywords, setKeywords] = useState(location.state.keywords);
  const [province, setProvince] = useState(location.state.province);


  return (
    <div>
      <Navbar />
      <SubHeading title="Résultat" />
      <div className="activitiesListContainer">
        <div className="activitiesListWrapper">

          <div className="activitiesListSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Mots clés</label>
              <input type="text" placeholder={keywords} />
            </div>
            <div className="lsItem">
              <label>Province</label>
              <select className="" value={province}>
                <option>Province</option>
                {data.provinces.map((province, index) => (
                  <option key={index} defaultValue={province.title}>{province.title}</option>
                ))}
              </select>
            </div>
            <button>Rechercher</button>
            {/* <Link to='/activityForm' className="siCheckButton">Créer une nouvelle préstation</Link> */}
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
    </div>
  )
}

export default ActivitiesList;
