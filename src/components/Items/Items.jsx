import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/intem';

function Items({ items }) {
  return (
    items.map((todo) => (
      <Item />
    ))
  );
}

Items.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

export default Items;
