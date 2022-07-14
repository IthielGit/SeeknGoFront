import React from 'react'
import { SubHeading } from "../../components";

import './About.css'

function About() {
  return (
    <div className="container" id="signupForm">
      <SubHeading title="A propos de nous" />

      <div id="about" className="about">
        <div className="container">
              <div className="titlepage">
                <span>Créé en 2022, SeeknGo est un startup qui met en relation les acteurs et les clients des activités de divertissements à Madagascar. Il met à disposition des résidants malagasy toutes les informations pratiques et culturelles pour bien préparer leur moment de loisir. De la simple escapade aux ateliers de formations en passant par le week-end entre amis, tout le monde trouve son compte sur notre plateforme!</span>
              </div>

        </div>
      </div>


    </div>
  )
}

export default About
