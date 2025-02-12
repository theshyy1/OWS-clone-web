import { useMemo, useState } from "react";
import { ITask } from "../../../types/dashboard.type";
import TaskList from "../components/TodayTasks/TaskList";
import { todayTasks } from "../../../constants/resource";

export const TasksContainer = () => {
  const [tasks] = useState<ITask[]>(todayTasks);
  const [selectedMark, setSelectedMark] = useState<string | null>(null);

  const allTasksCount = tasks.length;

  const filteredTasks = useMemo(() => {
    if (!selectedMark || selectedMark === "All") {
      return tasks;
    }
    return tasks.filter((task) => task.mark === selectedMark);
  }, [tasks, selectedMark]);

  const uniqueMarksWithLinks = useMemo(() => {
    const markCounts = tasks.reduce((counts: any, task) => {
      counts[task.mark] = (counts[task.mark] || 0) + 1;
      return counts;
    }, {});

    const result = [];
    for (const mark in markCounts) {
      result.push({ mark, link: mark, quantity: markCounts[mark] });
    }
    return result;
  }, [tasks, allTasksCount]);

  const handleMarkClick = (mark: string) => {
    setSelectedMark(mark);
  };

  return (
    <div className="bg-background-light relative h-[400px] rounded-2xl p-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <h2 className="text-base font-semibold">Today task</h2>
      <div className="pb-3 pt-5">
        <ul className="flex items-center justify-start space-x-9">
          <button
            className="flex items-center"
            onClick={() => handleMarkClick("All")}
          >
            All
            <span className="ml-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#2B5CE6]/20 p-1 text-center text-[10px] font-bold text-[#2B5CE6]">
              {allTasksCount}
            </span>
          </button>
          {uniqueMarksWithLinks?.map((item, index) => (
            <button
              key={index}
              className="flex items-center"
              onClick={() => handleMarkClick(item.mark)}
            >
              {item.mark}
              <span className="ml-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#2B5CE6]/20 p-1 text-center text-[10px] font-bold text-[#2B5CE6]">
                {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
              </span>
            </button>
          ))}
        </ul>
      </div>
      <TaskList todayTasks={filteredTasks} />
    </div>
  );
};
