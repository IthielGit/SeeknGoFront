import React from 'react';

import './SubHeading.css'


const SubHeading = ({ title }) => (
   <>
      <div className="col-md-12">
         <div className="titlepage">
            <h2>{title}</h2>
         </div>
      </div>
   </>
);

export default SubHeading;