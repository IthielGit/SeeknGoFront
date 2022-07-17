import React, { useState } from 'react';
import { Footer, Navbar, SubHeading } from '../../components';
import { ChooseDate, PriceOptions, ValidPersonalInfo } from '../../container';

import "./Reservation.css"

function Reservation() {
    /* Setting the state of the page to 0 and the formData to an initial object. */
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });


    /* Array that will be used to display the title of the page. */
    const formTitles = ["Choisir le tarif", "Choisir une date", "Valider les informations personnelles"];

    /* A function that returns a component based on the page number. */
    const pageDisplay = () => {
        if (page === 0) {
            return <PriceOptions formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <ChooseDate formData={formData} setFormData={setFormData} />;
        } else {
            return <ValidPersonalInfo formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div>
            <Navbar />
            <SubHeading title="Résevez votre ticket" />
            <div className="progressbarSection">
                <div
                    style={{
                        width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
                        backgroundColor: page === 0 ? "#2acfa9" : page === 1 ? "#219D80" : "#1c826a"
                        }}>
                            {page === 0 ? <p className='stepDiv'>Etape 1/3</p> : page === 1 ? <p className='stepDiv'>Etape 2/3</p> : <p className='stepDiv'>Etape 3/3</p>}
                </div>
            </div>

            <div className="bookingContainer">
                <div className="bookingWrapper">

                    <div className="componentStepSection">
                        <div className="componentStepSection_Header">
                            <h3>{formTitles[page]}</h3>
                        </div>

                        <div className="componentStepSection_Body">
                            {pageDisplay()}
                        </div>

                        <div className="componentStepSection_Footer">
                            <button class
                                disabled={page === 0}
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                            >
                                Précédent
                            </button>
                            <button
                                onClick={() => {
                                    if (page === formTitles.length - 1) {
                                        alert("Demande de réservation envoyée");
                                        console.log(formData);
                                    } else {
                                        setPage((currPage) => currPage + 1);
                                    }
                                }}
                            >
                                {page === formTitles.length - 1 ? "Envoyer la demande" : "Suivant"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Reservation