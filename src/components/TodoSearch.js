import React, {useState} from 'react';
import './TodoSearch.css';

const TodoSearch = () => {
   // se inicializa el estado para el input d ebusqueda
   const [searchValue, setSearchValue] = useState('');

   const onSearchValueChange = (e) => {
      setSearchValue(e.target.value);
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
