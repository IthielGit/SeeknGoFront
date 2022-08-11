import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Footer, Navbar, SubHeading } from '../../components'
import ticketResaService from '../../services/request/ticketResaService'
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";

import './MesReservations.css'

function MesReservations() {


  const [allResa, setAllResa] = useState([]);

  useEffect(() => {
    //getting all users from the database
    axios.get('http://localhost:8080/reservation/list')
      .then((res) => res.data)
      .then((res) => {
        setAllResa(...allResa, res)
      })
      .catch((err) => {
        console.log("Erreur de connexion : " + err.message);
      });

  }, [])

  // console.log(allResa);
  // allResa.map((res) => { console.log(res.idTicketResa); })

  const handleDelete = id => {
    axios.delete(`http://localhost:8080/reservation/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Erreur de connexion : " + err.message);
      });
  }

  return (
    <div>
      <Navbar />
      <SubHeading title="Mes réservations" />
      <br></br>
      <Table responsive={true} className="table table-striped tableMesResa">
        <thead>
          <tr>
            <th>Numéro ticket</th>
            <th>Date</th>
            <th>Heure</th>
            {/* nomPrestation get byID*/}
            {/* <th>Titre préstation</th> */}
            <th>Status</th>
            <th>Statut facturation Partenaire</th>
            {/* <th>Numéro client</th>
            <th>Numéro préstataire</th> */}
            <th>Date de création</th>
            <th>Net à payer</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {allResa.map(
            (resa, index) =>
              <tr key={index}>
                <td>{resa.idTicketResa}</td>
                <td>{resa.date}</td>
                <td>{resa.heure}</td>
                <td>{resa.statutTicket}</td>
                <td>{resa.statutPaiemenCommission}</td>
                <td>{resa.creationTicketDate}</td>
                <td>{resa.prixTotal.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' })}</td>
                <td>
                  <button className='btn btn-primary btnno'>Valider</button>

                  <button className='btn btn-danger btnno' onClick={(event) => handleDelete(resa.idTicketResa)}>Supprimer</button>
                </td>
              </tr>
          )}
        </tbody>
      </Table>



      <Footer />
    </div>
  )
}

export default MesReservations