import React, { useState } from 'react';
import AppUI from './components/AppUI';
// import './App.css';


const deafultTodos = [
   { text: 'Cortar Cebolla', completed: true },
   { text: 'Tomar curso intro a React', completed: false },
   { text: 'Llorar con la Llorona', completed: true },
   { text: 'Platzi react', completed: false },
]

const App = () => {

   // state for todos
   const [todos, setTodos] = useState(deafultTodos);
   // state para el input de busqueda
   const [searchValue, setSearchValue] = useState('');

   // Se obtiene el numero de los todos y los completados
   const completedTodos = (todos.filter(todo => todo.completed).length);
   const totalTodos = todos.length;
   
   // Se filtan los todos en base al search
   let searchedTodos = [];
   if(!searchValue.length >= 1) {
      searchedTodos = [...todos];
   } else {
      searchedTodos = todos.filter(todo => {
         const todoText = todo.text.toLowerCase();
         const searchText = searchValue.toLowerCase();
         return todoText.includes(searchText);
      })
   }

   // para completar el Todo seleccionado
   const competeTodo = (text) => {
      // ontenemos el indice del todo a completar
      const todoIndex = todos.findIndex(todo => todo.text === text);
      // todos[todoIndex] = { text: todos[todoIndex].text, completed: !todos[todoIndex].completed };
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      setTodos(newTodos);
   }

   // Para eliminar el Todo seleccionado
   const deleteTodo = (text) => {
      const newTodos = todos.filter(todo => todo.text != text);
      setTodos(newTodos);
   }
   

   return (
      <AppUI 
         totalTodos={totalTodos}
         completedTodos={completedTodos}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         searchedTodos={searchedTodos}
         competeTodo={competeTodo}
         deleteTodo={deleteTodo}
      />
   );
}

export default App;
