import React from 'react'


import './InfoValidation.css'
function InfoValidation({ formData, setFormData }) {
    return (
        <>
            <h4 className="infoPersTitle">Informations personnelles pour la réservation</h4>
            <div className="infoValidation">
                <div className='fullNameInputsSection'>
                    <input
                        className=""
                        type="text"
                        placeholder="Prénom"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    <input
                        type="text"
                        placeholder="Nom"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                </div>
                <div className='contactInputsSection'>
                    <input
                        type="text"
                        placeholder="Numéro de telephone"
                        value={formData.telNum}
                        onChange={(e) => setFormData({ ...formData, telNum: e.target.value })} />
                </div>
                <div className='contactInputsSection'>
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
            </div>
        </>
    )
}

export default InfoValidation
