import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

function Todo({ todo, onToggle, onRemove, isCompleted }) {
    return (
        <TodoStyle>
            <TodoText decoration={ isCompleted ? 'line-through' : 'none'}>
                {todo}
            </TodoText>
            <ButtonStyle>
                <Button onClick={onToggle}>Toggle</Button>
                <DeleteIcon onClick={onRemove}>Delete</DeleteIcon>
            </ButtonStyle>
        </TodoStyle>
    );
}

export default Todo;

const Button = styled.button`
    padding: 5px;
    border: none;
    background: ${(props) => props.color};
    font-size: ${(props) => props.size};
`;

const TodoStyle = styled.div`
    display: flex;
    margin-top: 10 px;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    border: 1px solid black;
`;
const ButtonStyle = styled.div`
    display: flex;
    align-items: center;
`;
const TodoText = styled.span`
    text-decoration: ${(props) => props.decoration};
    flex-shrink: 1;
`;
