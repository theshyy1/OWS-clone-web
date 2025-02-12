import { ITask } from "../../../types/dashboard.type";

interface Props {
  task: ITask;
}

const statusStyles: any = {
  Approved: `bg-[#ABCDA9] text-[#1A932E]`,
  "In review": `text-[#EE201C] bg-[#F1C6C1]`,
  "On going": `text-[#E65F2B] bg-[#F0D1C4]`,
};

const TaskItem = ({ task }: Props) => {
  const { id, isCompleted, title, status } = task;
  return (
    <>
      <div key={id} className="relative flex items-center">
        <div className="flex items-center">
          {isCompleted ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#E65F2B" />
              <path d="M6 9L8 11L12 7" stroke="white" stroke-linecap="round" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                stroke="#060606"
                stroke-opacity="0.64"
              />
            </svg>
          )}
          <span className="mx-2 text-sm">{title}</span>
        </div>
        <span
          className={`${statusStyles[status]} absolute right-24 rounded-full px-2 py-[5px] text-left text-xs`}
        >
          {status}
        </span>
      </div>
    </>
  );
};

export default TaskItem;
