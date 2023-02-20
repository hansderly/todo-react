import React, { useState } from 'react';

import styles from './ItemList.module.css';

import Item from '../Item/intem';
import ItemListHeader from '../ItemListHeader/ItemListHeader';
import ItemInput from '../ItemInput/ItemInput';

function ItemList() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const { length: id } = todos;
    const newTodo = { id, todo, isComplet: false };
    setTodos((prev) => [...prev, newTodo]);
    setValue('');
  }

  console.log(todos);

  return (
    <div className={styles.container}>
      <ItemListHeader />
      <ItemInput value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => (e.key === 'Enter' ? addTodo(value) : null)} />
      <Item />
    </div>
  );
}

export default ItemList;
