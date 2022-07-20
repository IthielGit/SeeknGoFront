import React from 'react'

import { ImWarning } from "react-icons/im";
import { Footer, Navbar } from '../../components';
import './ErrorPage.css'

function ErrorPage() {
    return (
        <>
            <Navbar />
            <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <ImWarning className='iconWarning' />
                            <h1 class="display-1">404</h1>
                            <h1 class="mb-4">Page introuvable</h1>
                            <p class="mb-4">Nous sommes désolés, la page que vous avez recherchée n'existe pas sur notre site Web! <br /> Voulez-vous naviguer vers notre page d'accueil?</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ErrorPage