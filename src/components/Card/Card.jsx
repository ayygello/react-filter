import React from 'react';
import './Card.scss';

const Card = ({ ...card }) => {
  const cardStyle = {
    backgroundImage: `url(${card.image})`,
    backgroundSize: 'cover',
  };

  return (
    <div className='card' style={cardStyle}>
      <div className='card__title'>{card.title}</div>
      <div className='card__category'>
        <p>{card.category}</p>
      </div>
    </div>
  );
};

export default Card;
