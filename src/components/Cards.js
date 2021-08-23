import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Helped by Our community....</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Newest member of our Community'
              label='Picture Time'
              path='/services'
            />
            <CardItem
              src='images/img-20.jpg'
              text='Member Helping the Stray Dog'
              label='Playing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-22.jpg'
              text='3 Month Puppy Doctor Checkup'
              label='Crying'
              path='/services'
            />
            <CardItem
              src='images/img-16.jpg'
              text='1 Week Puppy'
              label='Sleeping'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Puppy Having Milk'
              label='Breakfast'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
