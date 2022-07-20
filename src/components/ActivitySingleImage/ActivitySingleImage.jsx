import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Footer, Navbar, SubHeading } from '../../components'
import { ImLocation2 } from "react-icons/im";
import { MdOutlineTimer } from "react-icons/md";
import { data } from '../../constants';

import './ActivitySingleImage.css';

function ActivitySingleImage() {
  return (
    <div className="ActivitySingleImageImagesContainer">
      {data.photoSample.map((photo, index) => (
        <div className="ActivitySingleImageImgWrapper" key={index}>
          <img src={photo.src} alt="" className="ActivitySingleImageImg" />
        </div>
      ))}
      <div className="ActivitySingleImageResume">
        <div className="ActivitySingleImageLocationDuration">
          <div className="LocationDurationItem">
            <ImLocation2 className='IconSingle' />
            <span>Rue Rabetrano 112 Analamahitsy, Antananarivo, Madagascar</span>
          </div>
          <div className="LocationDurationItem">
            <MdOutlineTimer className='IconSingle' />
            <span>1 heure 30 minutes</span>
          </div>
        </div>
        <div className="singleCategory">
          <hr />
          <span className="">Bien être</span>
        </div>
      </div>
    </div>
  )
}

export default ActivitySingleImage