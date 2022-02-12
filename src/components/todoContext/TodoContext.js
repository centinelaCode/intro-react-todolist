import React, { useState, createContext } from 'react';
import useLocalStorage from './useLocalStorage';

const TodoContext = createContext();
// console.log(TodoContext);

const TodoProvider = (props) => {
  // consumimos el hook personalizado
  const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
   } = useLocalStorage("TODOS_V1", []);

   // state para el input de busqueda
   const [searchValue, setSearchValue] = useState("");

   // Se obtiene el numero de los todos y los completados
   const completedTodos = todos.filter((todo) => todo.completed).length;
   const totalTodos = todos.length;

   // Se filtan los todos en base al search
   let searchedTodos = [];
   if (!searchValue.length >= 1) {
      searchedTodos = [...todos];
   } else {
      searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
      });
   }

   // para completar el Todo seleccionado
   const competeTodo = (text) => {
      // ontenemos el indice del todo a completar
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      // todos[todoIndex] = { text: todos[todoIndex].text, completed: !todos[todoIndex].completed };
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
   };

   // Para eliminar el Todo seleccionado
   const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => todo.text != text);
      saveTodos(newTodos);
   };

   return (
      <TodoContext.Provider value={{
         loading,
         error,
         totalTodos,
         completedTodos,
         searchValue,
         setSearchValue,
         searchedTodos,
         competeTodo,
         deleteTodo
      }} >
         {props.children}
      </TodoContext.Provider>
   );
}

export { TodoContext, TodoProvider };



