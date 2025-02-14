import { useContext, useState } from "react";
import { TodosContext } from "../contexts/todos-context";
import { Button } from "../components/button";
import { ModalContext } from "../contexts/modal-context";
import { FilterContext } from "../contexts/filters-context";

export const FiltersContainer = () => {
  const { todos, handleDeleteSelected } = useContext(TodosContext);
  const [isFocus, setFocus] = useState<"all" | "completed" | "active">("all");
  const { openAddTodoModal, setModalMark } = useContext(ModalContext);
  const { setFilter } = useContext(FilterContext);

  const onHandleClick = (key: "all" | "completed" | "active") => {
    setFilter(key);
    setFocus(key);
  };

  return (
    <div className="flex items-center justify-between pt-8">
      <Button onClick={() => setModalMark(true)} className="bg-success">
        List Mark ({todos.filter((todo) => todo.highlight === true).length})
      </Button>
      <div className="flex space-x-1">
        <Button
          isFocus={isFocus === "all"}
          className="w-[120px] justify-center"
          onClick={() => onHandleClick("all")}
        >
          All
        </Button>
        <Button
          isFocus={isFocus === "active"}
          className="w-[120px] justify-center"
          onClick={() => onHandleClick("active")}
        >
          Active
        </Button>
        <Button
          isFocus={isFocus === "completed"}
          className="w-[120px] justify-center"
          onClick={() => onHandleClick("completed")}
        >
          Completed
        </Button>
      </div>
      <div className="flex items-center space-x-3">
        <Button
          onClick={handleDeleteSelected}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          }
          className="bg-error flex items-center rounded px-4 py-2 text-white"
        >
          Delete ({todos.filter((item) => item.isCompleted === true).length})
        </Button>
        <Button
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
          onClick={openAddTodoModal}
          className="bg-success flex items-center rounded px-4 py-2 text-white"
        >
          Add new
        </Button>
      </div>
    </div>
  );
};
