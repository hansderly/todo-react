import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './Item.module.css';

function Item() {
  return (
    <div className={styles.container}>
      <div>
        <input type="checkbox" name="complete" id="complete" />
        <p>Todo name</p>
      </div>
      <DeleteOutlined className={styles.icon} />
    </div>
  );
}

export default Item;
