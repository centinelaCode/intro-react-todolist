import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButtom from './components/CreateTodoButton';

// import './App.css';


const todos = [
   { text: 'Cortar Cebolla', completed: true },
   { text: 'Tomar curso intro a React', completed: false },
   { text: 'Llorar con la Llorona', completed: false },
   { text: 'Platzi react', completed: false },
]

const App = () => {

   // console.log(todos);

   return (
      <>
         <TodoCounter />         
         <TodoSearch />
         
         <TodoList>
            {todos.map(todo => (
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
