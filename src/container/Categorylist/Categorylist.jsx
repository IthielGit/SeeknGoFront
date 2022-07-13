import React from 'react'

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import './Categorylist.css'

const CategoryCard = ({ category: { title, imgUrl } }) => (
  <div className="app__categoryList_category-card">
    <img src={imgUrl} alt="category" />
    <div className="app__laurels_awards-card_content">
      <p className="p__roboto" style={{ margin: "0" , fontSize:"1.2rem" }}>{title}</p>
    </div>
  </div>
);

function Categorylist() {
  return (
    <div className="app__wrapper" id="categoryList">
      <div className="">
          <SubHeading title="Choisir par catégorie d'activités" />
          <div className="app__categorylist_category">
            {data.category.map((catego)=><CategoryCard category={catego} key={catego.title}/>)}
          </div>
      </div>
    </div>
  );
}

export default Categorylist
