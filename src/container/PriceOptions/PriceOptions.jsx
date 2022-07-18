import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Footer, Navbar, SubHeading } from '../../components'
import { ImLocation2 } from "react-icons/im";
import { MdOutlineTimer } from "react-icons/md";
import { data } from '../../constants';


import './PriceOptions.css'
function PriceOptions() {
  let listPrices = [];
  // eslint-disable-next-line no-unused-vars
  let priceToArray = data.tarifs.forEach((item) => { listPrices.push(item.prix); }
  )
  let minPrice = Math.min(...listPrices);
  // eslint-disable-next-line no-unused-vars
  const minPriceAriary = minPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' });


  return (
    <div className="priceOptionsWrapper">

      <div className="priceOptionsTicketAndImages">
        <div className="priceOptionsImagesContainer">
          {data.photoSample.map((photo, index) => (
            <div className="priceOptionsImgWrapper" key={index}>
              <img src={photo.src} alt="" className="priceOptionsImg" />
            </div>
          ))}
          <div className="priceOptionsResume">
            <div className="priceOptionsLocationDuration">
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

        <div className="priceOptionsTicket">
          <div className="priceOptionsResumeSection">
            <div className="priceOptionsTitleSection">
              <h3 className="ticketTitle">COURS DE YOGA BY SOA</h3>
              <div className='priceOptionsItems'>
                <div className='priceOptionsItemsText'>
                  <p>2</p>
                  <p>x</p>
                  <p>Tail Yoga</p>
                </div>
                <div className="priceOptionsItemsVar">
                  <p>20 000 MGA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="priceOptionsTotalSection">
            <div className="priceOptionsTotalText">
              <p>Total</p>
            </div>
            <div className="priceOptionsTotalVar">
              <p>20 000 MGA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="priceOptionsDetails">

        <div className="priceOptionsDetailsPrice">
          <h1 className="priceOptionsTitle">Les Tarifs</h1>
          <div className="tarifContainer">
            <table class="table table-striped">
              <tbody>
                {data.tarifs.map((tarif, index) => (
                  <tr key={index}>
                    <th scope="row">{tarif.title}</th>
                    <td>{tarif.prix.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' })}</td>
                    <td> x </td>
                    <td>
                      <select>
                        <option>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                      </select>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceOptions