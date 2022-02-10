import React from 'react';
import './TodoItem.css';

const TodoItem = ({text, completed, todos, setTodos}) => {
   // console.log(todos);

   const onComplete = () => {
      // alert('Completaste el todo ' + text);
      const newTtodos = todos.map(todo => {
         if(todo.text === text) {
            return { ...todo, completed: !todo.completed };
         }
         return todo;
      })
      setTodos(newTtodos);
   }

   const onDelete = () => {
      // alert('Borraste el todo ' + text);
      const newTodos = todos.filter(todo => todo.text != text);
      setTodos(newTodos);
      // alert('Eliminastae el todo ' + text);
   }

  return (
   <li className="TodoItem"> 
      <span 
         className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
         onClick={ onComplete }
      >✓</span>

      <p 
         className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
      >
         {text}
      </p>

      <span 
         className="`Icon Icon-delete"
         onClick={ onDelete }
      >
         ✘
      </span>
   </li>
  );
};

export default TodoItem;