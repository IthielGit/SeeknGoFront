import React, { useState } from 'react';
import { Footer, Navbar, SubHeading } from '../../components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Multiselect from 'multiselect-react-dropdown';
import { FaTrashAlt } from "react-icons/fa";




import "react-multi-date-picker/styles/colors/red.css"
import './ActivityCreationForm.css'
import { data } from '../../constants';


const ActivityCreationForm = () => {

    const [planning, setPlanning] = useState([
        { titre: "", tarif: "", uniteDeComptage: "", dateDispo: "", heure: {} },
    ])

    const [activityCreationForm, setActivityCreationForm] = useState({
        titreActivite: "",
        categorieActivite: "",
        imageActivite: "",
        adresseActivite: "",
        provinceActivite: "",
        descriptionActivite: "",
    });


    // handle form change for tarif option
    let handleplanningChange = (event, index) => {
        let newplanning = [...planning];
        newplanning[index][event.target.name] = event.target.value;
        setPlanning(newplanning);
    }

    let handleHourChange = (event, index) => {
        let newplanning = [...planning];
        newplanning[index].heure = event;
        setPlanning(newplanning);
    }


    let handleCreationFormChange = (e) => {
        setActivityCreationForm({
            ...activityCreationForm,
            [e.target.name]: e.target.value
        });
    }

    //add dynamically tarifOption fields
    let addFields = () => {
        let newfield = {
            titre: "",
            tarif: "",
            uniteDeComptage: "",
            dateDispo: "",
            heure: {}
        }
        setPlanning([...planning, newfield])
    }

    let removeFields = (index) => {
        let data = [...planning];
        data.splice(index, 1)
        setPlanning(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(planning);
        console.log(activityCreationForm);
    }

    return (
        <div>
            <Navbar />
            <SubHeading title="Details concernant la préstation" />
            <div className="activityCreationFormContainer container">

                <Form onSubmit={handleSubmit} className="formContainer">
                    {/* *************************************************Activity Details****************************************************** */}
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="5">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control
                                name="titreActivite"
                                required
                                type="text"
                                defaultValue=""
                                onChange={handleCreationFormChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} xl="4">
                            <Form.Label>Catégorie</Form.Label>
                            <Form.Select aria-label="Catégorie"
                                onChange={handleCreationFormChange}
                                value={activityCreationForm.categorieActivite}
                                name="categorieActivite" >
                                <option>Catégorie</option>
                                {data.category.map((ctgry, index) => (
                                    <option key={index} value={ctgry.title}>{ctgry.title}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="5">
                            <Form.Label> Importer une image</Form.Label>
                            <Form.Control type="file" required accept=".png,.jpg,.jpeg,.webp" name='imageActivite' />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="5">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control placeholder="Lot II IK 73 Ter, Analakely"
                                type="text"
                                required
                                name='adresseActivite'
                                onChange={handleCreationFormChange} />

                        </Form.Group>
                        <Form.Group as={Col} xl="4">
                            <Form.Label>Province</Form.Label>
                            <Form.Select
                                name="provinceActivite"
                                aria-label="province"
                                onChange={handleCreationFormChange}

                            >
                                <option> Province </option>
                                {data.provinces.map((prvce, index) => (
                                    <option key={prvce.id} value={prvce.title}>{prvce.title}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Mettez une province valide.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group xl="4" >
                            <Form.Label>Déscription de l'activité</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                name="descriptionActivite"
                                onChange={handleCreationFormChange}
                                required />
                        </Form.Group>
                    </Row>
                    {/* *************************************************Tarif Option****************************************************** */}
                    <h5>Option de tarifs</h5>
                    <div>
                        {planning.map((planningInput, index) => {
                            return (
                                <Row className="mb-3 planningSection" key={index}>
                                    <Form.Group as={Col} xl="3">
                                        <Form.Label>Titre</Form.Label>
                                        <Form.Control type="text" name='titre' value={planningInput.titre || ""} onChange={event => handleplanningChange(event, index)} />
                                    </Form.Group>
                                    <Form.Group as={Col} xl="2">
                                        <Form.Label>Tarif</Form.Label>
                                        <Form.Control placeholder="20000" name='tarif' type="number" value={planningInput.tarif || ""} onChange={event => handleplanningChange(event, index)} />
                                    </Form.Group>
                                    <Form.Group as={Col} xl="2">
                                        <Form.Label>Unité de comptage</Form.Label>
                                        <Form.Control placeholder="personne, groupe..." name='uniteDeComptage' type="text" value={planningInput.uniteDeComptage || ""} onChange={event => handleplanningChange(event, index)} />
                                    </Form.Group>
                                    <Form.Group as={Col} xl="2">
                                        <Form.Label>Date disponible</Form.Label>
                                        <Form.Control type="date" id="dateDispo" name="dateDispo" value={planningInput.dateDispo} onChange={event => handleplanningChange(event, index)} />
                                    </Form.Group>
                                    <Form.Group as={Col} xl="3">
                                        <Form.Label>Heures disponibles</Form.Label>
                                        <Multiselect
                                            value={planningInput.heure}
                                            isObject={false}
                                            onRemove={event => handleHourChange(event, index)}
                                            onSelect={event => handleHourChange(event, index)}
                                            options={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '03:00', '07:00', '08:00', '09:00', '10:00', '11:00',
                                                '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']}
                                            showCheckbox
                                            style={{
                                                chips: {
                                                    background: '#CE2127',
                                                    'borderRadius': '5px'
                                                },
                                                searchBox: {
                                                    backgroundColor: '#FFFFFF'
                                                }
                                            }}
                                        />
                                    </Form.Group>
                                    <div className="creerPrestaBtnSection">
                                        <button className='newTarifOptBtn' onClick={addFields}> + </button>
                                        {index ? <button className='removeTarifOptBtn' onClick={() => removeFields(index)}> <FaTrashAlt/> </button> : null}
                                    </div>
                                </Row>
                            )
                        })}
                    </div>

                    <Button type="submit" className='activityCreationFormBtn' >Créer la préstation</Button>
                </Form>

            </div>
            <Footer />
        </div>
    )
}

export default ActivityCreationForm