import React from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import styles from './ItemInput.module.css';

function ItemInput({ value, onChange, onKeyDown }) {
  return (
    <div className={styles.container}>
      <input value={value} onChange={onChange} onKeyDown={onKeyDown} className={styles.input} type="text" name="todo" id="todo" placeholder="Add todo..." />
      <PlusOutlined className={styles.icon} />
    </div>
  );
}

ItemInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default ItemInput;
