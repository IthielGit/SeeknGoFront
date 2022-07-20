import React, { useState } from 'react';
import { ImLocation2 } from "react-icons/im";
import { MdOutlineTimer, MdDateRange } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";


import './TicketResume.css'

function TicketResume({formData, setFormData}) {

    // const [selectedDate, setSelectedDate] = useState(null);
    // const [selectedTime, setSelectedTime] = useState(null);



    return (
        <div className="priceOptionsTicket">
            <div className="priceOptionsResumeSection">
                <div className="priceOptionsTitleSection">
                    <h3 className="ticketTitle">COURS DE YOGA BY SOA</h3>

                    {formData.selectedDate &&
                        <div className="ticketDatetime">
                            <MdDateRange className='IconSingle' />
                            <p className="ticketDate">{formData.selectedDate}</p>
                            <MdOutlineTimer className='IconSingle__DateTime' />
                            <p className="ticketDate">{formData.selectedTime}</p>
                        </div>
                    }



                    <div className='priceOptionsItems'>
                        <div className='priceOptionsItemsText'>
                            <p>2</p>
                            <p>x</p>
                            <p>Tail Yoga</p>
                        </div>
                        <div className="priceOptionsItemsVar">
                            <p>20 000 MGA</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="priceOptionsTotalSection">
                <div className="priceOptionsTotalText">
                    <p>Total</p>
                </div>
                <div className="priceOptionsTotalVar">
                    <p>20 000 MGA</p>
                </div>
            </div>
        </div>

    )
}

export default TicketResume