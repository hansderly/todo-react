import React, { useState } from 'react';

import styles from './ItemList.module.css';

import Item from '../Item/intem';
import ItemListHeader from '../ItemListHeader/ItemListHeader';
import ItemInput from '../ItemInput/ItemInput';

function ItemList() {
  const [value, setValue] = useState('');

  function addTodo(todo) {
    setValue('');
  }

  return (
    <div className={styles.container}>
      <ItemListHeader />
      <ItemInput value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => (e.key === 'Enter' ? addTodo(value) : null)} />
      <Item />
    </div>
  );
}

export default ItemList;
