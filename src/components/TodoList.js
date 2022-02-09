import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
   // console.log(props);

   return (         
      <section>
         <ul>
            {props.children}
         </ul>
      </section>
   );
};

export default TodoList;
