import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Footer, Navbar, SubHeading } from '../../components'
import { data } from '../../constants';
import { ActivitySingleImage, TicketResume, SelectTarif } from '../../components';


import './PriceOptions.css'
function PriceOptions({ formData, setFormData }) {
// selection des prix pour la résa
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