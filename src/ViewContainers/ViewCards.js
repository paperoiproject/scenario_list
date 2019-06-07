import React from 'react';
import Cards from '../components/Cards.js';

const ViewCards = (props) => {
  return (
    <div className="">
      <Cards
        image={props.image}
        name={props.name}
        onClick={props.onClick}
      />
   </div>
  );
}

export default ViewCards;
