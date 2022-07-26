import React, { useState } from 'react';
import { Footer, Navbar, SubHeading } from '../../components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { Calendar, DateObject } from "react-multi-date-picker";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";
// import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import Multiselect from 'multiselect-react-dropdown';




import "react-multi-date-picker/styles/colors/red.css"
import './ActivityCreationForm.css'
import { data } from '../../constants';

const ActivityCreationForm = () => {
    // const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    // const weekDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]

    const [optionTarif, setOptionTarif] = useState([{ option: "", tarif: "", dateDispo: "", heure: [] }])

    let handleFormChange = (event, index) => {
        // let dataSpread = [...optionTarif];
        // dataSpread[index][event.target.name] = event.target.value;
        // setOptionTarif(dataSpread);
        let newOptionTarif = [...optionTarif];
        newOptionTarif[index][event.target.name] = event.target.value;
        setOptionTarif(newOptionTarif);
        console.log(optionTarif);
    }


    //add new tarif option field
    let addFields = () => {
        let newfield = {
            option: "",
            tarif: "",
            dateDispo: "",
            heure: []
        }
        setOptionTarif([...optionTarif, newfield])
    }



    let removeFields = (index) => {
        let data = [...optionTarif];
        data.splice(index, 1)
        setOptionTarif(data)
    }

    const [validated, setValidated] = useState(false);
    const [category, setCategory] = useState("");
    const [province, setProvince] = useState("");

    const handlecategory = (e) => {
        setCategory(e.target.value);
    }

    const handleprovince = (e) => {
        setProvince(e.target.value);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const [selTime,setSelTime] = useState();
    let handleTime = (e) => {
        setSelTime(Array.isArray(e) ? e.map(time => time.value) :[])
        console.log(selTime);
    }

    return (
        <div>
            <Navbar />
            <SubHeading title="Details concernant la préstation" />
            <div className="activityCreationFormContainer container">

                <Form noValidate validated={validated} onSubmit={handleSubmit} className="formContainer">
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="5" controlId="titreActivityInput">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue=""
                            />

                        </Form.Group>
                        <Form.Group as={Col} xl="4" controlId="categoryActivityInput">
                            <Form.Label>Catégorie</Form.Label>
                            <Form.Select aria-label="Catégorie" onChange={handlecategory} value={category} >
                                <option>Catégorie</option>
                                {data.category.map((ctgry, index) => (
                                    <option key={index} value={ctgry.title}>{ctgry.title}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="5" controlId="photoActivityInput">
                            <Form.Label> Importer une image</Form.Label>
                            <Form.Control type="file" required accept=".png,.jpg,.jpeg,.webp" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="5" controlId="adresseActivityInput">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control placeholder="Lot II IK 73 Ter, Analakely" type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Mettez une adresse valide.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xl="4" controlId="provinceActivityInput">
                            <Form.Label>Province</Form.Label>
                            <Form.Select aria-label="province" onChange={handleprovince} value={province} >
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
                        <Form.Group xl="4" controlId="ControlDescription" >
                            <Form.Label>Déscrition</Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                        </Form.Group>
                    </Row>

                    <h5>Option de tarifs</h5>
                    <div>
                        {optionTarif.map((input, index) => {
                            return (
                                <Row className="mb-3 optionTarif" key={index}>
                                    <Form.Group as={Col} xl="4" controlId="optionActivityInput">
                                        <Form.Label>Option</Form.Label>
                                        <Form.Control type="text" name='option' value={input.option} onChange={event => handleFormChange(event, index)} />
                                    </Form.Group>
                                    <Form.Group as={Col} xl="2" controlId="prixActivityInput">
                                        <Form.Label>Tarif</Form.Label>
                                        <Form.Control placeholder="20000" name='tarif' type="number" value={input.tarif || ""} onChange={event => handleFormChange(event, index)} />
                                    </Form.Group>
                                    <Form.Group as={Col} xl="2" controlId="dateActivityInput">
                                        <Form.Label>Date disponible</Form.Label>
                                        <Form.Control type="date" id="dateDispo" name="dateDispo" value={input.dateDispo} onChange={event => handleFormChange(event, index)} />
                                    </Form.Group>
                                    <Form.Group as={Col} xl="4" controlId="hoursActivityInput">
                                        <Form.Label>Heures disponibles</Form.Label>
                                        {/* <Form.Select aria-label="Catégorie"  multiple={true}>
                                <option>Heures disponibles</option>
                                {data.dayTimes.map((dtime, index) => (
                                    <option key={index} value={dtime.hour}>{dtime.hour}</option>
                                ))}
                            </Form.Select> */}
                                        <Multiselect
                                            name="heure"
                                            isObject={false}
                                            onKeyPressFn={function noRefCheck() { }}
                                            onRemove={function noRefCheck() { }}
                                            onSearch={function noRefCheck() { }}
                                            onSelect={function noRefCheck() { }}
                                            onChange={handleTime}
                                            options={[
                                                '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '03:00', '07:00', '08:00', '09:00', '10:00', '11:00',
                                                '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
                                            ]}
                                            selectionLimit={{}}
                                            showCheckbox
                                            placeholder=''
                                            style={{
                                                chips: {
                                                    background: '#CE2127',
                                                    'border-radius': '5px'
                                                },
                                                searchBox: {
                                                    backgroundColor: '#FFFFFF'
                                                }
                                            }}
                                        />
                                    </Form.Group>
                                    <button onClick={addFields}>Add More</button>
                                    {index ? <button onClick={() => removeFields(index)}>Remove</button> : null}

                                </Row>

                            )
                        })}

                    </div>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Je confirme l'authenticité de toutes ces informations"
                            feedback="Confirmer avant d'envoyer la formulaire"
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    {/* <div className="dateTimeActivityInput">

                        <div>
                            //date
                            <Calendar
                                className="red"
                                value={dates}
                                onChange={setDates}
                                months={months}
                                weekDays={weekDays}
                                format="DD/MM/YYYY"

                                weekStartDayIndex={1}
                                plugins={[
                                    <DatePanel />
                                ]}
                            />

                            //time


                        </div>
                    </div>*/}
                    <Button type="submit">Créer la préstation</Button>
                </Form>

            </div>
            <Footer />
        </div>
    )
}

export default ActivityCreationForm