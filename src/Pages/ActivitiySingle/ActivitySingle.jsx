import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar, SubHeading } from '../../components'
import { ImLocation2 } from "react-icons/im";
import { MdOutlineTimer } from "react-icons/md";
import { data } from '../../constants';

import './ActivitySingle.css'

function ActivitySingle() {
  let listPrices = [];
  // eslint-disable-next-line no-unused-vars
  let priceToArray = data.tarifs.forEach((item) => { listPrices.push(item.prix); }
  )
  let minPrice = Math.min(...listPrices);
  const minPriceAriary = minPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' });

  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate("/activity/:id/reservation");
  }



  return (
    <div>
      <Navbar />
      <SubHeading title="Détails de l'activité" />

      <div className="activityContainer">
        <div className="activityWrapper">
          <h1 className="activityTitle">COURS DE YOGA BY SOA</h1>

          <div className="activityPlanningAndImages">
            <div className="activityImagesContainer">
              {data.photoSample.map((photo, index) => (
                <div className="activityImgWrapper" key={index}>
                  <img src={photo.src} alt="" className="activityImg" />
                </div>
              ))}
              <div className="activityResume">
                <div className="activityLocationDuration">
                  <div className="LocationDurationItem">
                    <ImLocation2 className='IconSingle' />
                    <span>Rue Rabetrano 112 Analamahitsy, Antananarivo, Madagascar</span>
                  </div>
                  <div className="LocationDurationItem">
                    <MdOutlineTimer className='IconSingle' />
                    <span>1 heure 30 minutes</span>
                  </div>
                </div>
                <div className="singleCategory">
                  <hr />
                  <span className="">Bien être</span>
                </div>
              </div>
            </div>

            <div className="activityPlanning">
              <div className="activityDetailsTexts">
                <div className="activityTitleSection">
                  <p>À partir de</p>
                  <h3 className="minPriceMGA"> {minPriceAriary}</h3>
                  <p>Par personne</p>
                </div>
              </div>
              <button onClick={handleBookSession}>Réserver une session</button>
            </div>
          </div>

          <div className="activityDetails">
            <div className="activityDetailsTexts">
              <h1 className="activityTitle">Déscription</h1>
              <p className="activityDesc">
                Venez profiter d'une séance de yoga en fonction de vos envies et de vos besoins. Que vous aillez envie de relaxation ou de vous tonifier, le yoga est l'activité idéale pour éveiller vos chakras.
                <br></br>Le Yoga Corporate Class : Ces cours sont destinés à des groupes de personnes venant de la même entreprise afin d'améliorer la productivité, la motivation et partager un moment entre collègues hors des bureaux.
                <br></br>Le Yoga Vinyasa : C'est une des formes la plus dynamique du yoga, constitué de séries non figées. Il permet de réveiller les muscles et rester tonique.
                <br></br>Le Yoga Hatha Flow : Ce yoga équilibré, plus lent que le Vinyasa vous fera enchainer des mouvements et postures statiques tout en vous focalisant sur votre respiration et la précision.
                <br></br>Le Détox Flow : Ce type de yoga a pour but d'activer et simuler votre système digestif.
                <br></br>Le Warrior Yoga : Ce cours vous fera sortir de votre zone de confort en combinant cardio avec des postures engageantes. (non recommandé pour les débutants)
                <br></br>Le Power Flow : Ce type de yoga se caractérise par un enchainement de postures favorisant le dynamisme et la tonicité des mouvements.
                <br></br>Le Core Power : Ce yoga multidisciplinaire vous aidera à renforcer tous les muscles de votre corps.
              </p>
            </div>

            <div className="activityDetailsPrice">
              <h1 className="activityTitle">Les Tarifs</h1>
              <div className="tarifContainer">
                <table class="table table-striped">
                  <tbody>
                    {data.tarifs.map((tarif, index) => (
                      <tr key={index}>
                        <th scope="row">{tarif.title}</th>
                        {/* <td>
                          <select>
                            <option>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                          </select>
                        </td> */}
                        <td>{tarif.prix.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' })}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ActivitySingle