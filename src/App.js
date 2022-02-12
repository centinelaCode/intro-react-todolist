import React from "react";
import { TodoProvider } from './components/todoContext/TodoContext';
import AppUI from "./components/AppUI";
// import './App.css';

// const deafultTodos = [
//    { text: 'Cortar Cebolla', completed: true },
//    { text: 'Tomar curso intro a React', completed: false },
//    { text: 'Llorar con la Llorona', completed: true },
//    { text: 'Platzi react', completed: false },
// ]



const App = () => {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export default App;
