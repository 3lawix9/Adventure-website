import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import './../App.css';
import img9 from '../images/img-9.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img8 from '../images/img-8.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Views!</h1>
      <div className='cards__container'>
        <div className="cards-wrapper">
          <ul className="cards__items">
            <Carditem
              src={img9}
              text='You can see the Waterfall and enjoy it. Dont forget to contact us'
              label='Adventure'
              path='/services'
            />
            <Carditem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Carditem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Carditem
              src={img4}
              text='Experience Football on Top of the Himalayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Carditem
              src={img8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
