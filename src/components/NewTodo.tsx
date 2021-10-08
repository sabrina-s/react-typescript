import React, { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (value: string) => void;
}

const NewTodo: React.FunctionComponent<NewTodoProps> = ({ onAddTodo }) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const value = ref.current!.value;
    onAddTodo(value);
  };

  return (
    <form>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={ref} />
      </div>
      <button type="submit" onClick={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default NewTodo;
