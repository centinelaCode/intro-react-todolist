import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
   // console.log(props);
  return (
   <li className="TodoItem"> 
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✓</span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
         {props.text}
      </p>
      <span className="`Icon Icon-delete">✘</span>
   </li>
  );
};

export default TodoItem;