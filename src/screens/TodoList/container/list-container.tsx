import { useContext } from "react";
import { ITodos, TodosContext } from "../contexts/todos-context";
import { TodoItem } from "../components/todo-item";
import { FilterContext } from "../contexts/filters-context";

export const ListContainer = () => {
  const { todos } = useContext(TodosContext);
  const { filter } = useContext(FilterContext);

  const getFilterTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((item) => item.isCompleted === false);
      case "completed":
        return todos.filter((item) => item.isCompleted === true);
      default:
        return todos;
    }
  };
  return (
    <ul className="mx-auto h-[460px] w-[80%] space-y-3 overflow-y-auto px-5 pb-10">
      {getFilterTodos()?.map((todo: ITodos, index) => (
        <TodoItem key={todo.id} order={index} {...todo} />
      ))}
    </ul>
  );
};
