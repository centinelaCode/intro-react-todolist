import React from "react";
import { TodoContext } from "./todoContext/TodoContext";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButton";

const AppUI = () => {
  return (
    <>
      <TodoCounter 
        // totalTodos={totalTodos} 
        // completedTodos={completedTodos} 
      />
      <TodoSearch 
        // searchValue={searchValue} 
        // setSearchValue={setSearchValue} 
      />

      <TodoContext.Consumer>      
        {({ 
          error, 
          loading, 
          searchedTodos, 
          competeTodo, 
          deleteTodo 
        }) => (
            <TodoList >
              {error && <p>Upss hubo un error...</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}
              {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => competeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          )
        }
      </TodoContext.Consumer>

      <CreateTodoButtom />
    </>
  );
};

export default AppUI;
