import React from 'react';
import PropTypes from 'prop-types';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './Item.module.css';

function Item({ isComplete, todo }) {
  return (
    <div className={styles.container}>
      <div>
        <input type="checkbox" name="complete" id="complete" checked={isComplete} />
        <p>{todo}</p>
      </div>
      <DeleteOutlined className={styles.icon} />
    </div>
  );
}

Item.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  todo: PropTypes.string.isRequired,
};

export default Item;
