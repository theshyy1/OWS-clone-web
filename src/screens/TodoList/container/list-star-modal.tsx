import { useContext, useState } from "react";
import { Input } from "../components/input";
import { ITodos, TodosContext } from "../contexts/todos-context";

interface IProps {
  onClose: () => void;
}
export const ListStarModal = ({ onClose }: IProps) => {
  const { todos, onHandleCheck, onHandleStar } = useContext(TodosContext);
  const [selectedTodoId] = useState<string | number | null>(null);
  const allTodosMarked = todos.filter(
    (todo: ITodos) => todo.highlight === true,
  );
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-background-light flex h-[400px] w-[750px] flex-col items-center rounded-lg pb-10 pt-4 shadow-md"
    >
      <div className="relative w-full text-center">
        <span className="text-success pb-3 text-xl italic underline">
          Todos Care most
        </span>
        <span
          className="absolute right-4 top-0 cursor-pointer hover:opacity-45"
          onClick={onClose}
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <ul className="h-[280px] w-[95%] space-y-1 overflow-y-auto pt-4">
        {allTodosMarked.map(
          ({ id, title, isCompleted, createAt, highlight }: ITodos, index) => (
            <li
              key={id}
              className="to-background-dark from-background-light flex w-full justify-between rounded-md bg-gradient-to-r px-1 py-2 text-xl shadow-md shadow-black/50 hover:translate-y-[-0.04rem]"
            >
              <div className="ml-3 flex w-[50%] items-center space-x-3">
                <span className="">{index + 1}.</span>
                <div onClick={(event) => event.stopPropagation()} className="">
                  <Input
                    type="checkbox"
                    value={isCompleted}
                    checked={isCompleted}
                    onChange={() => onHandleCheck(id)}
                  />
                </div>
                <span className={`overflow-hidden truncate text-xl`}>
                  {title}
                </span>
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
                <span
                  className="cursor-pointer"
                  onClick={() => onHandleStar(id)}
                >
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
                <span className="mx-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-all duration-500">
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
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
