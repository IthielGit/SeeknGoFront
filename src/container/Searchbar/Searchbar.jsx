import React from "react";
import { BsSearch } from 'react-icons/bs';
import { data } from '../../constants'

import "./Searchbar.css";

function Searchbar({type}) {
  return (
    <div className={type === "list" ? ".app__wrapper_searchbar-list_mode":"app__wrapper_searchbar"}>
      <ul className={type === "list" ? "app__header_searchbar-list_mode":"app__header_searchbar"}>
        <li>
          <input
            type="text"
            className="form-control"
            id="floatingInputGrid"
            placeholder="Rechercher une activité"
          />
        </li>
        <li>
          <select className="form-select" id="floatingSelectGrid">
            <option>Province</option>
            {data.provinces.map((province, index)=>(
              <option key={index} value={province.title}>{province.title}</option>
            ))}
          </select>
        </li>
        <li>
          <button type="button" className="custom__button_search-red">
            <BsSearch fontSize={20}></BsSearch>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Searchbar;
