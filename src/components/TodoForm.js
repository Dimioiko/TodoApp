import React from 'react'

function TodoForm({ value, onSubmit, onChange }) {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="add to do"
        value={value}
        onChange={onChange}/>
        <button type="sumbit">Add to Do</button>
      </form>
      
    </div>
  )
}

export default TodoForm
