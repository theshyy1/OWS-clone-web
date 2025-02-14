import { useContext } from "react";
import { TodosContext } from "../contexts/todos-context";

interface IProps {
  onClose: () => void;
}
export const ShowTodo = ({ onClose }: IProps) => {
  const { todoDetail } = useContext(TodosContext);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-background-light flex h-[400px] w-[750px] flex-col items-center rounded-lg pb-10 pt-4 shadow-md"
    >
      <div className="relative w-full text-center">
        <span className="text-success pb-3 text-xl italic underline">
          Detail Todo
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
      <div className="flex h-full w-full items-center justify-center space-x-4">
        <div className="flex flex-col items-end space-y-3">
          <span className="text-text-light text-base italic">Identify</span>
          <span className="text-text-light text-[18px] italic">
            Description
          </span>
          <span className="text-text-light text-base italic">Create At</span>
          <span className="text-text-light text-base italic">Highlight</span>
          <span className="text-text-light text-base italic">Process</span>
        </div>
        <div className="flex flex-col space-y-3">
          {todoDetail && (
            <>
              <span className="text-base">{todoDetail.id}</span>
              <span className="text-[18px]">{todoDetail.title}</span>
              <span className="text-base">{todoDetail.createAt}</span>
              <span className="text-base">
                {todoDetail.highlight ? "Yes" : "No"}
              </span>
              <span className="text-base">
                {todoDetail.isCompleted ? "Done" : "Active"}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
