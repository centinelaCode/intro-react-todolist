import React from 'react';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButtom from './CreateTodoButton';

const AppUI = ({
   totalTodos,
   completedTodos,
   searchValue,
   setSearchValue,
   searchedTodos,
   competeTodo,
   deleteTodo
}) => {
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

               onComplete={() => competeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
            />
         ))}
      </TodoList>
                  
      <CreateTodoButtom />               
   </>
  )
}

export default AppUI;