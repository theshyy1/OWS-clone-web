import { useContext, useState } from "react";
import { ModalContext } from "../contexts/modal-context";
import { TodosContext } from "../contexts/todos-context";
import { Button } from "./button";
import { Input } from "./input";

type Props = {
  id: string;
  title: string;
  isCompleted: boolean;
  createAt: string;
  highlight: boolean;
  order: number;
};
export const TodoItem = ({
  id,
  title,
  isCompleted,
  createAt,
  highlight,
  order,
}: Props) => {
  const { onHandleStar, handleDelete, setTodoDetail, onHandleCheck } =
    useContext(TodosContext);
  const { setShow } = useContext(ModalContext);
  const [selectedTodoId, setSelectedTodoId] = useState<string | number | null>(
    null,
  );

  const onHandleDelete = (id: string) => {
    handleDelete(id);
  };

  const onHandleShowTodo = () => {
    setShow(true);
    setTodoDetail({
      id,
      title,
      isCompleted,
      highlight,
      createAt,
    });
  };

  const handleShowOption = (id: string) => {
    if (selectedTodoId === id) {
      setSelectedTodoId(null);
    } else {
      setSelectedTodoId(id);
    }
  };

  return (
    <li
      className="to-background-dark from-background-light flex items-center justify-between rounded-md bg-gradient-to-r px-1 py-3 text-xl shadow-md shadow-black/70 hover:translate-y-[-0.04rem]"
      key={id}
      onClick={() => handleShowOption(id)}
    >
      <div className="ml-3 flex w-[50%] items-center space-x-3">
        <span className="">{order + 1}.</span>
        <div onClick={(event) => event.stopPropagation()}>
          <Input
            type="checkbox"
            value={isCompleted}
            checked={isCompleted}
            onChange={() => onHandleCheck(id)}
          />
        </div>
        <span className={`overflow-hidden truncate text-xl`}>{title}</span>
      </div>
      <span className="text-success flex items-center text-sm italic">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 pr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {createAt}
      </span>
      <div
        className="relative mr-4 flex flex-row-reverse items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="cursor-pointer" onClick={() => onHandleStar(id)}>
          {highlight ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="fill-warning text-warning size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="fill-text-light/20 text-text-light/20 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          )}
        </span>
        <span
          onClick={() => handleShowOption(id)}
          className="mx-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-all duration-500"
        >
          {selectedTodoId === id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 transition-all duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 transition-all duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          )}
        </span>

        {selectedTodoId === id && (
          <div className="flex flex-col">
            <Button
              onClick={onHandleShowTodo}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              }
              className="bg-success text-sm text-white"
            >
              Show
            </Button>
            <Button
              onClick={() => onHandleDelete(id)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              }
              className="bg-error text-sm text-white"
            >
              Delete
            </Button>
            {/* <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              }
              className="bg-warning text-sm text-white"
            >
              Edit
            </Button> */}
          </div>
        )}
      </div>
    </li>
  );
};
