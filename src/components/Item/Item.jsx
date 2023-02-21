import React from 'react';
import PropTypes from 'prop-types';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './Item.module.css';

function Item({
  id, isComplete, todo, handleDelete, handleChange,
}) {
  const onChange = () => {
    handleChange(id);
  };

  const onClick = () => {
    handleDelete(id);
  };

  return (
    <div className={styles.container}>
      <div>
        <input type="checkbox" name="complete" id="complete" checked={isComplete} onChange={onChange} />
        <p className={isComplete && styles.line}>{todo}</p>
      </div>
      <DeleteOutlined className={styles.icon} onClick={onClick} />
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
  todo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Item;
