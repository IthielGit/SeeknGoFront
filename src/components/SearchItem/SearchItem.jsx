import React from 'react'
import { ImLocation2 } from "react-icons/im";

import './SearchItem.css'
function SearchItem() {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Spa Jacuzzi privé</h1>
                <span className="siPartenaire">par Niaina Ratsima</span>
                <span className="siCategory">Bien être</span>
                <div className="siLocation">
                    <ImLocation2 className='locationIcon'/>
                    <span className="siLocationText">Rue Rantonirina 52 Andavamamba,
                        Antananarivo, Madagascar
                    </span>
                </div>


            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Note générale</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siTaxOp">A partir de </span>
                    <span className="siPrice">24 000Ar</span>

                    <button className="siCheckButton">Réserver</button>
                </div>
            </div>
        </div>

    )
}

export default SearchItem