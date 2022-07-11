import React from 'react';
import './ToolBar.scss';

const ToolBar = ({ filter, selected, onSelectFilter }) => {
  return (
    <div className='toolbar'>
      {filter.map((category, index) =>
        category === selected ? (
          <button className='toolbar__category active' key={index}>
            {category}
          </button>
        ) : (
          <button
            className='toolbar__category'
            key={index}
            onClick={onSelectFilter}
          >
            {category}
          </button>
        )
      )}
    </div>
  );
};

export default ToolBar;
