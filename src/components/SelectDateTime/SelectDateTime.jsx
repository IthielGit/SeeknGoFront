import React from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { data } from '../../constants';
import fr from "date-fns/locale/fr";

import "react-datepicker/dist/react-datepicker.css";
import './SelectDateTime.css';

function SelectDateTime({ formData, setFormData }) {
    registerLocale("fr", fr);


    return (
        <div className='chooseDateTimeSection'>
            {/* selectDate */}
            <div className="selectDate">
                <div className="selectDateTitle">
                    <h3>Les dates disponibles</h3>
                </div>
                <div className="datePickerSection">
                    <DatePicker
                        // onChange={(selectedDt) => setSelectedDate(selectedDt.toLocaleDateString("fr-FR"))}
                        onChange={(selectedDt) => setFormData({ ...formData, selectedDate: selectedDt.toLocaleDateString("fr-FR") })}
                        locale="fr"
                        highlightDates={[new Date('2022-07-22'), new Date('2022-07-25')]}
                        inline
                    />
                    <div className="datePickerLegend">
                        <span className="datePickerLegend__Items">
                            <div></div>
                            <p>Dates disponibles</p>
                        </span>
                        <span className="datePickerLegend__Items">
                            <div className="datePickerLegend__divIndispo"></div>
                            <p>Dates indisponibles</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* selectTime */}
            <div className="selectTime">
                <div className="selectDateTitle">
                    <h3>Les heures disponibles</h3>
                </div>
                <div className="timeButtonSection">
                    {/*  Filtering the data.times array to only show the times that match the selected
                    date. */}
                    {data.times
                        .filter((dt) => dt.date.includes(formData.selectedDate))
                        .map((time, index) => (
                            <label key={index} class="container timeLabelRadio">
                                <input
                                    type="radio"
                                    name="radioTime"
                                    value={time.hour}
                                    checked={time.hour === formData.selectedTime}
                                    //  onChange={(e) => (formData.setSelectedTime(e.target.value))} />
                                    onChange={(e) => setFormData({ ...formData, selectedTime: e.target.value })} /> 
                                {/* display time from mapping */}
                                <span className="timeCheckmark">{time.hour}</span>
                            </label>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default SelectDateTime