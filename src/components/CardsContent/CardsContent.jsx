import React, { useState } from 'react';
import './CardsContent.scss';
import { cardsData, categories } from '../../inititalValues/initialValues';
import ToolBar from '../ToolBar/ToolBar';
import Card from '../Card/Card';
import LoadMore from '../LoadMore/LoadMore';

const CardsContent = () => {
  const [selectedFilter, setSelectedFilter] = useState('Show All');
  const [cards, setCards] = useState(cardsData);

  const handleOnSelectFilter = (event) => {
    const newSelectedFilter = event.target.textContent;
    setSelectedFilter(() => newSelectedFilter);

    if (newSelectedFilter !== 'Show All') {
      const filteredCards = cardsData.filter(
        (card) => card.category === newSelectedFilter
      );
      setCards(filteredCards);
    } else {
      setCards(cardsData);
    }
  };

  const handleOnLoadMore = () => {
    setCards((prevCards) => prevCards.concat(cards));
  };

  return (
    <div className='main'>
      <div className='container'>
        <div className='main__col'>
          <div className='main__row'>
            <ToolBar
              filter={categories}
              selected={selectedFilter}
              onSelectFilter={(filter) => handleOnSelectFilter(filter)}
            />
            {cards.map((card, index) => (
              <Card {...card} key={index} />
            ))}
          </div>
          <LoadMore onLoadMore={handleOnLoadMore} />
        </div>
      </div>
    </div>
  );
};

export default CardsContent;
