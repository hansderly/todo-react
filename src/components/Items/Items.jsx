import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/intem';

function Items({ items }) {
  return (
    items.map(({ isComplete, todo }, i) => (
      <Item key={i} isComplete={isComplete} todo={todo} />
    ))
  );
}

Items.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

export default Items;
