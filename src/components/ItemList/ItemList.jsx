import React, { useState } from 'react';

import styles from './ItemList.module.css';

import ItemListHeader from '../ItemListHeader/ItemListHeader';
import ItemInput from '../ItemInput/ItemInput';
import Items from '../Items/Items';

function ItemList() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    if (!todo.length) return;
    const { length: id } = todos;
    const newTodo = { id, todo, isComplete: false };
    setTodos((prev) => [...prev, newTodo]);
    setValue('');
  }

  // console.log(value);

  const handleDelete = (id) => setTodos((prev) => prev.filter(({ id: todoId }) => todoId !== id));

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
        return todo;
      }),
    );
  };

  return (
    <div className={styles.container}>
      <ItemListHeader />
      <ItemInput value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => (e.key === 'Enter' ? addTodo(value) : null)} />
      <Items items={todos} handleChange={handleChange} handleDelete={handleDelete} />
    </div>
  );
}

export default ItemList;
