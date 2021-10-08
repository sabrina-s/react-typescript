import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo.model";
import { v4 as uuidv4 } from "uuid";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (value: string) => {
    const newTodo = { id: uuidv4(), text: value };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;
