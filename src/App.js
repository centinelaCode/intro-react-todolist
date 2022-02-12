import React, { useEffect, useState } from "react";
import AppUI from "./components/AppUI";
// import './App.css';

// const deafultTodos = [
//    { text: 'Cortar Cebolla', completed: true },
//    { text: 'Tomar curso intro a React', completed: false },
//    { text: 'Llorar con la Llorona', completed: true },
//    { text: 'Platzi react', completed: false },
// ]

const useLocalStorage = (itemName, initialValue) => {
  // states
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    try {
      setTimeout(() => {
        //localstorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setError(error);
    }
  });

  const saveItem = (newItem) => {
    try {
      // to string all Item
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
};

const App = () => {
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

  // console.log('render - ante useEfect')

  // // definimos un useEfect
  // useEffect(() => {
  //    console.log('use efcet')
  // }, [totalTodos])

  // console.log('render - despues useEfect')

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      competeTodo={competeTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default App;
