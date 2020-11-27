import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
  const [input, setInput] = useState("")
  const [todos, setTodos]= useState([]);



    const handleChange = (e) => setInput(e.target.value);


    const handleSubmit = (e) => {
      e.preventDefault();
      const newTodo = {id: Math.random(), todo: input , completed: false} ;
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    }
    const handleRemove = (todo) => {
      const newTodos = todos.filter((test) => test.id !== todo.id);
      setTodos(newTodos);
    }
    
    const handleToggle = (todo) => {
      const newTodos = todos.map((test) => {
        if (test.id === todo.id) return { ...todo, completed: !todo.completed}; 
        else return test
      });
      setTodos(newTodos);
    }

    
  return (
    <div>
      <TodoForm
      value={input}
      onSubmit={handleSubmit}
      onChange={handleChange} 
      />
      <div>
       {todos.map((todo) => (
         <Todo 
         key={todo.id}
         todo={todo.todo}
         isCompleted={todo.completed}
         onRemove={() => handleRemove(todo)}
         onToggle={() => handleToggle(todo)}
         />
       ))}  
      </div>      
    </div>
  )
}

export default TodoList
