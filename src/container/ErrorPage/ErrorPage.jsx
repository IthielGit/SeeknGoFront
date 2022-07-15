import React from 'react'

import { ImWarning } from "react-icons/im";
import './ErrorPage.css'

function ErrorPage() {
  return (

        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <ImWarning className='iconWarning'/>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page introuvable</h1>
                        <p class="mb-4">Nous sommes désolés, la page que vous avez recherché n'existe pas sur notre site Web ! Allez sur notre page d'accueil pour effectuer une recherche ?</p>
                    </div>
                </div>
            </div>
        </div>


  )
}

export default ErrorPage