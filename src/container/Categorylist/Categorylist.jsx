import React from 'react'

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import './Categorylist.css'

const CategoryCard = ({ category: { title, imgUrl } }) => (
  <div className="app__categoryList_category-card">
    <img src={imgUrl} alt="category" />
    <div className="app__laurels_awards-card_content">
      <p className="p__roboto" style={{margin:"0"}}>{title}</p>
    </div>
  </div>
);

function Categorylist() {
  return (
    <div className="app__wrapper section__padding" id="categoryList">
      <div className=".app__wrapper_info-center">
          <SubHeading className="app__categoryList_subheading" title="Choisir par catégorie d'activités" />
          <div className="app__categorylist_category">
            {data.category.map((catego)=><CategoryCard category={catego} key={catego.title}/>)}
          </div>
      </div>

      {/* <div className="app__wrapper_img">
        Second column
      </div> */}
    </div>
  );
}

export default Categorylist
