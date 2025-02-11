interface Props {
  todayTasks: {
    id: number;
    title: string;
    status: string;
    isCompleted: boolean;
  }[];
}

const statusStyles = {
  Approved: `bg-[#ABCDA9] text-[#1A932E]`,
  "In review": `text-[#EE201C] bg-[#F1C6C1]`,
  "On going": `text-[#E65F2B] bg-[#F0D1C4]`,
};

const TaskItem = ({ todayTasks }: Props) => {
  return (
    <>
      {todayTasks?.map(
        (task: {
          id: number;
          title: string;
          status: string;
          isCompleted: boolean;
        }) => (
          <div key={task.id} className="relative flex items-center">
            <div className="flex items-center">
              {task.isCompleted ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="9" fill="#E65F2B" />
                  <path
                    d="M6 9L8 11L12 7"
                    stroke="white"
                    stroke-linecap="round"
                  />
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
              <span className="mx-2 text-[14px]">{task.title}</span>
            </div>
            <span
              className={`${statusStyles[task.status] || statusStyles["On going"]} absolute right-24 top-0 rounded-full px-3 py-1 text-[12px]`}
            >
              {task.status}
            </span>
          </div>
        ),
      )}
    </>
  );
};

export default TaskItem;
