import React from 'react';

import styles from './ItemList.module.css';

import Item from '../Item/intem';
import ItemListHeader from '../ItemListHeader/ItemListHeader';
import ItemInput from '../ItemInput/ItemInput';

function ItemList() {
  return (
    <div className={styles.container}>
      <ItemListHeader />
      <ItemInput />
      <Item />
    </div>
  );
}

export default ItemList;
