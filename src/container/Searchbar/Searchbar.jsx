import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { data } from '../../constants'

import "./Searchbar.css";

function Searchbar({type}) {

  const [keywords,setKeywords] = useState("");
  const [province,setProvince] = useState("");
  const navigate = useNavigate();

  const handleKeyword = (e)=>{
    setKeywords(e.target.value);
  };


  const handleProvince = (e)=>{
    setProvince(e.target.value);
  }
  
  const handleSearch = () =>{
    navigate("/activities", {state:{keywords,province}});
  };


  return (
    <div className="app__wrapper_searchbar">
      <ul className="app__header_searchbar">
        <li>
          <input
            type="text"
            className="keywordSearchInput"
            placeholder="Rechercher une activité"
            onChange={handleKeyword}
          />
        </li>
        <li>
          <select className="keywordSearchSelect" onChange={handleProvince} value={province}  id="floatingSelectGrid">
            <option>Province</option>
            {data.provinces.map((province, index)=>(
              <option key={index} value={province.title}>{province.title}</option>
            ))}
          </select>
        </li>
        <li>
          <button type="button" onClick={handleSearch} className="custom__button_search-red">
            <BsSearch fontSize={20}></BsSearch>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Searchbar;
