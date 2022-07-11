import React from 'react';
import './LoadMore.scss';

const LoadMore = ({ onLoadMore }) => {
  return (
    <div className='load-more'>
      <button className='load-more__button' onClick={onLoadMore}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMore;
