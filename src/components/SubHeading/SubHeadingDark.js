import React from 'react';

import './SubHeadingDark.css'


const SubHeading = ({title}) => (
  <div className="row">
  <div className="col-md-12">
     <div className="titlepage__dark">
        <h2>{title}</h2>
     </div>
  </div>
</div>
);

export default SubHeading;