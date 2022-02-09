import React from 'react';
import './TodoSearch.css';

const TodoSearch = () => {

   const onSearchValueChange = (e) => {
      console.log(e.target.value);
   }

   return (
      <input 
         className="TodoSearch" 
         type="text" 
         placeholder="Cebolla"
         onChange={onSearchValueChange}
      />
   );
};

export default TodoSearch;
