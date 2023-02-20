import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

import styles from './ItemInput.module.css';

function ItemInput() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" name="todo" id="todo" placeholder="Add todo..." />
      <PlusOutlined className={styles.icon} />
    </div>
  );
}

export default ItemInput;
