import React from 'react'
import { ActivityPricedDescription, ActivitySingleImage, Footer, MinPriceSection, Navbar, SelectTarif, SubHeading, TicketResume } from '../../components'

import { data } from '../../constants';

import './ActivitySingle.css'

function ActivitySingle() {
 



  return (
    <div>
      <Navbar />
      <SubHeading title="Détails de l'activité" />

      <div className="activitySingleContainer">
        <div className="activitySingleWrapper">

          <div className="activityImageAndTicketSection">
            <ActivitySingleImage/>
            <MinPriceSection/>
          </div>

          <div className="priceOptionsDetails">
            <ActivityPricedDescription/>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ActivitySingle