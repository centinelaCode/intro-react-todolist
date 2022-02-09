import React, { useState } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButtom from './components/CreateTodoButton';

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
      searchedTodos = todos;
   } else {
      searchedTodos = todos.filter(todo => {
         const todoText = todo.text.toLowerCase();
         const searchText = searchValue.toLowerCase();
         return todoText.includes(searchText);
      })
   }
   

   return (
      <>
         <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
         />         
         <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />
         
         <TodoList>
            {searchedTodos.map(todo => (
               <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
               />
            ))}
         </TodoList>
                     
         <CreateTodoButtom />               
      </>
   );
}

export default App;
