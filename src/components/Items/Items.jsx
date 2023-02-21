import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/Item';

function Items({ items, handleChange, handleDelete }) {
  return (
    items.map(({ id, isComplete, todo }) => (
      <Item
        key={id}
        id={id}
        isComplete={isComplete}
        todo={todo}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    ))
  );
}

Items.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export default Items;
