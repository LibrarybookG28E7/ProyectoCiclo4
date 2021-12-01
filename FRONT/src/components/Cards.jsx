import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Libros disponibles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/elamorenlostiemposdelcolera.jpg'
              text='EL AMOR EN LOS TIEMPOS DEL COLERA'
              label='Drama'
              path='/libro1'
            />
            <CardItem
              src='images/Elolvidoqueseremos.jpg'
              text='EL OLVIDO QUE SEREMOS'
              label='Drama'
              path='/libro2'
            />
            <CardItem
              src='images/tapacaicedo.jpg'
              text='¡QUE VIVA LA MUSICA!'
              label='Drama'
              path='/libro3'
            />
          </ul>
          </div>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/elamorenlostiemposdelcolera.jpg'
              text='EL AMOR EN LOS TIEMPOS DEL COLERA'
              label='Drama'
              path='/libro1'
            />
            <CardItem
              src='images/Elolvidoqueseremos.jpg'
              text='EL OLVIDO QUE SEREMOS'
              label='Drama'
              path='/libro2'
            />
            <CardItem
              src='images/tapacaicedo.jpg'
              text='¡QUE VIVA LA MUSICA!'
              label='Drama'
              path='/libro3'
            />
          </ul>
          </div>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/elamorenlostiemposdelcolera.jpg'
              text='EL AMOR EN LOS TIEMPOS DEL COLERA'
              label='Drama'
              path='/libro1'
            />
            <CardItem
              src='images/Elolvidoqueseremos.jpg'
              text='EL OLVIDO QUE SEREMOS'
              label='Drama'
              path='/libro2'
            />
            <CardItem
              src='images/tapacaicedo.jpg'
              text='¡QUE VIVA LA MUSICA!'
              label='Drama'
              path='/libro3'
            />
          </ul>
          </div>
      </div>
    </div>
  );
}

export default Cards;
