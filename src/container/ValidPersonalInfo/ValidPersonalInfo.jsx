import React from 'react'
import { ActivitySingleImage, TicketResume,InfoValidation } from '../../components';

function ValidPersonalInfo({ formData, setFormData }) {
  return (
    <div className="">
      {/* top content */}
      <div className="activityImageAndTicketSection">
        <ActivitySingleImage formData={formData} setFormData={setFormData} />
        <TicketResume formData={formData} setFormData={setFormData} />
      </div>

      {/* bottom content */}
      <div>
        <InfoValidation formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  )
}

export default ValidPersonalInfo