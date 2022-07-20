import React from 'react'


import './TicketResume.css'

function TicketResume() {
    return (
        <div className="priceOptionsTicket">
            <div className="priceOptionsResumeSection">
                <div className="priceOptionsTitleSection">
                    <h3 className="ticketTitle">COURS DE YOGA BY SOA</h3>
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