import React from 'react';

import styles from './ItemListHeader.module.css';

function ItemListHeader() {
  return (
    <div className={styles.container}>
      <h1>todos</h1>
      <p>Item will persist in the browser local storage</p>
    </div>
  );
}

export default ItemListHeader;
