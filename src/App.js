import './App.css';
import TodoList from './components/TodoList';
import styled from "styled-components"

function App() {
  return (
    <TodoApp>
      <TodoList />
    </TodoApp>
  );
}

export default App;

const TodoApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #e8e3eb;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`