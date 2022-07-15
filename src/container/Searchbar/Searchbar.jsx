import React from "react";
import { BsSearch } from 'react-icons/bs';

import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="app__wrapper_searchbar">
      <ul className="app__header_searchbar">
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
            <option value="1">province.value</option>
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
