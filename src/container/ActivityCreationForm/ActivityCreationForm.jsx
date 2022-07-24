import React, { useState } from 'react';
import { Footer, Navbar, SubHeading } from '../../components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";




import "react-multi-date-picker/styles/colors/red.css"
import './ActivityCreationForm.css'
import { data } from '../../constants';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

const ActivityCreationForm = () => {
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    const weekDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]


    const [validated, setValidated] = useState(false);
    const [category, setCategory] = useState("");
    const [dTimes, setDTimes] = useState("");

    const [dates, setDates] = useState([
        new Date(),
        new DateObject({ year: 2020, month: 9, day: 8 }),
        "December 09 2020",
        1597994736000 //unix time in milliseconds (August 21 2020)
    ])

    const handlecategory = (e) => {
        setCategory(e.target.value);
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <div>
            <Navbar />
            <SubHeading title="Details concernant la préstation" />
            <div className="activityCreationFormContainer container">

                <Form noValidate validated={validated} onSubmit={handleSubmit} className="formContainer">
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="4" controlId="titreActivityInput">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue=""
                            />

                        </Form.Group>
                        <Form.Group as={Col} xl="3" controlId="categoryActivityInput">
                            <Form.Label>Catégorie</Form.Label>
                            <Form.Select aria-label="Catégorie" onChange={handlecategory} value={category} >
                                <option>Catégorie</option>
                                {data.category.map((ctgry, index) => (
                                    <option key={index} value={ctgry.title}>{ctgry.title}</option>
                                ))}
                            </Form.Select>

                        </Form.Group>
                        <Form.Group as={Col} xl="5" controlId="photoActivityInput">
                            <Form.Label> Importer une image</Form.Label>
                            <Form.Control type="file" required accept=".png,.jpg,.jpeg,.webp" />
                            <Form.Text muted>
                                *Formats acceptés : .png, .jpg, .jpeg, .webp
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="8" controlId="adresseActivityInput">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Mettez une adresse valide.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xl="4" controlId="provinceActivityInput">
                            <Form.Label>Province</Form.Label>
                            <Form.Select aria-label="Catégorie" onChange={handlecategory} value={category} >
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
                        <Form.Group className="mb-12" controlId="ControlDescription" >
                            <Form.Label>Déscrition</Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="4" controlId="adresseActivityInput">
                            <Form.Label>Option</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group as={Col} xl="4" controlId="adresseActivityInput">
                            <Form.Label>Tarif</Form.Label>
                            <Form.Control type="number" required />
                        </Form.Group>
                        <Form.Group as={Col} xl="2" controlId="dateActivityInput">
                            <Form.Label>Date disponible</Form.Label>
                            <Form.Control type="date" id="dateDispo" name="dateDispo" required />
                        </Form.Group>
                        <Form.Group as={Col} xl="2" controlId="hoursActivityInput">
                            <Form.Label>Heures disponibles</Form.Label>
                            <Form.Select aria-label="Catégorie"  multiple={true}>
                                <option>Heures disponibles</option>
                                {data.dayTimes.map((dtime, index) => (
                                    <option key={index} value={dtime.hour}>{dtime.hour}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Je confirme l'authenticité de toutes ces informations"
                            feedback="Confirmer avant d'envoyer la formulaire"
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <div className="dateTimeActivityInput">

                        <div>
                            {/* date */}
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

                            {/* time */}


                        </div>
                    </div>
                    <Button type="submit">Créer la préstation</Button>
                </Form>

            </div>
            <Footer />
        </div>
    )
}

export default ActivityCreationForm