import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/Item';

function Items({ items }) {
  return (
    items.map(({ id, isComplete, todo }) => (
      <Item key={id} isComplete={isComplete} todo={todo} />
    ))
  );
}

Items.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export default Items;
