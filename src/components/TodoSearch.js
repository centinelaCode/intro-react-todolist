import React, {useState} from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
   

   const onSearchValueChange = (e) => {
      setSearchValue(e.target.value);
   }

   return (
      <input 
         className="TodoSearch" 
         type="text" 
         placeholder="Cebolla"
         value={searchValue}
         onChange={onSearchValueChange}
      />
   );
};

export default TodoSearch;
