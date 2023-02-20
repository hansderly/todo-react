import React from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import styles from './ItemInput.module.css';

function ItemInput({ value, onChange }) {
  return (
    <div className={styles.container}>
      <input value={value} onChange={onChange} className={styles.input} type="text" name="todo" id="todo" placeholder="Add todo..." />
      <PlusOutlined className={styles.icon} />
    </div>
  );
}

ItemInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ItemInput;
