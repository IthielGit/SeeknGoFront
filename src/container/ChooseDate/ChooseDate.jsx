import React, { useState } from 'react'
import { ImLocation2 } from "react-icons/im";
import { MdOutlineTimer, MdDateRange } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { data } from '../../constants';
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";


import "react-datepicker/dist/react-datepicker.css";
import './ChooseDate.css';

function ChooseDate() {
  registerLocale("fr", fr);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);


  return (
    <div className="chooseDateWrapper">
      {/* top content */}
      <div className="chooseDateTicketAndImages">
        <div className="chooseDateImagesContainer">
          {data.photoSample.map((photo, index) => (
            <div className="chooseDateImgWrapper" key={index}>
              <img src={photo.src} alt="" className="chooseDateImg" />
            </div>
          ))}
          <div className="chooseDateResume">
            <div className="chooseDateLocationDuration">
              <div className="LocationDurationItem">
                <ImLocation2 className='IconSingle' />
                <span>Rue Rabetrano 112 Analamahitsy, Antananarivo, Madagascar</span>
              </div>
              <div className="LocationDurationItem">
                <GiSandsOfTime className='IconSingle' />
                <span>1 heure 30 minutes</span>
              </div>
            </div>
            <div className="singleCategory">
              <hr />
              <span className="">Bien être</span>
            </div>
          </div>
        </div>

        <div className="chooseDateTicket">
          <div className="chooseDateResumeSection">
            <div className="chooseDateTitleSection">
              <h3 className="ticketTitle">COURS DE YOGA BY SOA</h3>

              {selectedDate &&
                <div className="ticketDatetime">
                  <MdDateRange className='IconSingle' />
                  <p className="ticketDate">{selectedDate}</p>
                  <MdOutlineTimer className='IconSingle__DateTime' />
                  <p className="ticketDate">{selectedTime}</p>
                </div>
              }

              <div className='chooseDateItems'>
                <div className='chooseDateItemsText'>
                  <p>2</p>
                  <p>x</p>
                  <p>Tail Yoga</p>
                </div>
                <div className="chooseDateItemsVar">
                  <p>20 000 MGA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chooseDateTotalSection">
            <div className="chooseDateTotalText">
              <p>Total</p>
            </div>
            <div className="chooseDateTotalVar">
              <p>20 000 MGA</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div className="chooseDateDetails">

        <div className="selectDate">
          <div className="selectDateTitle">
            <h3>Les dates disponibles</h3>
          </div>
          <div className="datePickerSection">
            <DatePicker
              onChange={(selectedDt) => setSelectedDate(selectedDt.toLocaleDateString("fr-FR"))}
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

        <div className="selectTime">
          <div className="selectDateTitle">
            <h3>Les heures disponibles</h3>
          </div>
          <div className="timeButtonSection">
            {data.times
              .filter((dt) => dt.date.includes(selectedDate))
              .map((time, index) => (
                <label key={index} class="container timeLabelRadio">
                  <input
                    type="radio"
                    name="radioTime"
                    value={time.hour}
                    checked={time.hour === selectedTime}
                    onChange={(e) => (setSelectedTime(e.target.value))} />
                  <span className="timeCheckmark">{time.hour}</span>
                </label>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseDate