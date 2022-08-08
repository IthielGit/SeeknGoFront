import React from 'react'
import { data } from '../../constants'

import './ActivityPricedDescription.css'

function ActivityPricedDescription() {
    return (
        <div className="activityDetails">
            <div className="activityDetailsTexts">
                <h1>Déscription</h1>
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
                    <table className="table table-striped">
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
    )
}

export default ActivityPricedDescription