import React, { useState, useContext } from 'react'
import { TodoContext } from './todoContext/TodoContext';
import './TodoForm.css';

const TodoForm = () => {

   // state para textarea
   const [newTodoValue, setNewTodoValue] = useState('');

   // es el TodoContext
   const { 
      addTodo,
      setOpenModal
   } = useContext(TodoContext);

   // metodo para capturar los cambios ne el textarea
   const onChange = (e) => {
      setNewTodoValue(e.target.value);
   }
   
   // metodo para cancel y cerrar la modal
   const onCancel = () => {
      setOpenModal(false);
   }

   // Metodo para agragar unn uevo todo y cerrar la ventana
   const onSubmit = (e) => {
      e.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
   }

return (
      <form
         onSubmit={onSubmit}
      >
         <label>Escribir tu nuevo TODO</label>
         <textarea 
            value={newTodoValue} 
            onChange={onChange}
            placeholder="Crea una nueva Tarea"            
         />

         <div className="TodoForm-buttonContainer">
            <button
               type="button"
               onClick={onCancel}
               className="TodoForm-button TodoForm-buttom--cancel"
            >
               Cancelar
            </button>
            <button
               type="submit"
               className="TodoForm-button TodoForm-buttom--add"
            >
               Añadir
            </button>
         </div>
      </form>
   )
}

export default TodoForm