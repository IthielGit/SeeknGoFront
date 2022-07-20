import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Footer, Navbar, SubHeading } from '../../components'
import { data } from '../../constants';
import { ActivitySingleImage, TicketResume, SelectTarif } from '../../components';


import './PriceOptions.css'
function PriceOptions({formData, setFormData}) {

  let listPrices = [];
  // eslint-disable-next-line no-unused-vars
  let priceToArray = data.tarifs.forEach((item) => { listPrices.push(item.prix); }
  )
  let minPrice = Math.min(...listPrices);
  // eslint-disable-next-line no-unused-vars
  const minPriceAriary = minPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' });

  return (
    <div className="priceOptionsWrapper">

      <div className="activityImageAndTicketSection">
        <ActivitySingleImage formData={formData} setFormData={setFormData} />
        <TicketResume formData={formData} setFormData={setFormData} />
      </div>

      <div className="priceOptionsDetails">
        <SelectTarif />
      </div>
    </div>

  )
}

export default PriceOptions