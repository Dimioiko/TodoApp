import React from 'react'

function Todo({ todo, onToggle, onRemove, isCompleted }) {
  return (
    <div>
      <span style={{ textDecoration: isCompleted && "line-through" }}>
        {todo}
      </span>
      <button onClick={onToggle}>Toggle</button>
      <button onClick={onRemove}> Delete</button>
      
    </div>
  )
}

export default Todo
