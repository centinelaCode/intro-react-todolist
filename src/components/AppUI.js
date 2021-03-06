import React, { useContext } from "react";
import { TodoContext } from "./todoContext/TodoContext";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButton";
import Modal from './Modal';
import TodoForm from "./TodoForm";

const AppUI = () => {

  const { 
    error, 
    loading, 
    searchedTodos, 
    competeTodo, 
    deleteTodo,
    openModal, 
    setOpenModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList >
        {error && <p>Upss hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => competeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButtom 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default AppUI;
