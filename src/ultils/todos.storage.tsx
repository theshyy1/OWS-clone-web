import { ITodos } from "../screens/TodoList/contexts/todos-context";

export const getTodosLocal = (): ITodos[] => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const saveTodosLocal = (todos: ITodos[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
