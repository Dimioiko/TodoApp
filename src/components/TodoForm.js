import React from 'react'
import styled from "styled-components"

function TodoForm({ value, onSubmit, onChange }) {

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="add to do"
        value={value}
        onChange={onChange}/>
        <button type="sumbit" className="todo-button">Add to Do</button>
      </Form>
      
    </div>
  )
}

export default TodoForm

const Form = styled.form`
  margin-bottom: 32px;
  margin-top: 20px;
`
