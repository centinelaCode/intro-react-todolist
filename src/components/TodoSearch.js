import React, { useContext } from 'react';
import { TodoContext } from './todoContext/TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {

   const { searchValue, setSearchValue } = useContext(TodoContext);
   
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
