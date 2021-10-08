import React from "react";
import "./TodoList.css";

interface TodoListProps {
  todos: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  onDeleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
