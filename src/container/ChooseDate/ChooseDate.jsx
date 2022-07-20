import React from 'react';
import { ActivitySingleImage, TicketResume, SelectDateTime } from '../../components';
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";



import './ChooseDate.css';

function ChooseDate({ formData, setFormData }) {
  registerLocale("fr", fr);


  return (
    <div className="">
      {/* top content */}
      <div className="activityImageAndTicketSection">
        <ActivitySingleImage formData={formData} setFormData={setFormData} />
        <TicketResume formData={formData} setFormData={setFormData} />
      </div>

      {/* bottom content */}
      <div>
        <SelectDateTime formData={formData} setFormData={setFormData} />
      </div>
    </div>
  )
}

export default ChooseDate