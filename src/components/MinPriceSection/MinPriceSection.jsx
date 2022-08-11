import React from 'react'
import { useNavigate } from 'react-router-dom';
import { data } from '../../constants';


import './MinPriceSection.css'
function MinPriceSection() {
    /* *****************************function to get the min price *********************************** */
    let listPrices = [];
    data.tarifs.forEach(
        (item) => {
            listPrices.push(item.prix);
        })
    let minPrice = Math.min(...listPrices);
    const minPriceAriary = minPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' });
    /* **************************************************************** */

    const navigate = useNavigate();
    const handleBookSession = () => {
        navigate("/activity/:id/reservation");
    }

    
    return (
        <div className="minPriceContainer">
            <div className="minPriceDetailsTexts">
                <div className="minPriceTitleSection">
                    <p>À partir de</p>
                    <h3 className="minPriceMGA"> {minPriceAriary}</h3>
                    <p>Par personne</p>
                </div>
            </div>
            <button onClick={handleBookSession}>Réserver une session</button>
        </div>

    )
}

export default MinPriceSection
