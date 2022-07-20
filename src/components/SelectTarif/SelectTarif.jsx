import React, { useState } from 'react';
import { data } from '../../constants';


import './SelectTarif.css'

function SelectTarif() {
    const [paxNumber, setPaxNumber] = useState(null);

    let listPrices = [];
    // eslint-disable-next-line no-unused-vars
    let priceToArray = data.tarifs.forEach((item) => { listPrices.push(item.prix); }
    )
    let minPrice = Math.min(...listPrices);
    // eslint-disable-next-line no-unused-vars
    const minPriceAriary = minPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' });



    return (

        <div className="selectTarifPrice">
            <h1>Les Tarifs</h1>
            <div className="tarifContainer">
                <table class="table table-striped">
                    <tbody>
                        {data.tarifs.map((tarif, index) => (
                            <tr key={index}>
                                <th scope="row">{tarif.title}</th>
                                <td>{tarif.prix.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' })}</td>
                                <td> x </td>
                                <td>
                                    <select name="paxNumber" id="paxNumber" onChange={(e) => setPaxNumber(e.target.value)}>
                                        <option>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </select>
                                </td>
                                <td>{tarif.prix * paxNumber}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SelectTarif