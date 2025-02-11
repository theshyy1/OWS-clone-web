import { useMemo, useState } from "react";
import { todayTasks } from "../../../../constants/resource";
import { ITask } from "../../../../types/dashboard.type";
import TaskItem from "./TaskItem";

const TodayTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>(todayTasks);
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
    <div className="relative rounded-2xl bg-[#F2EAE5] p-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <h2 className="text-base font-semibold">Today task</h2>
      <div className="mt-5 pb-3">
        <ul className="flex items-center justify-start space-x-10">
          <button className="relative" onClick={() => handleMarkClick("All")}>
            All
            <span className="absolute right-[-24px] h-5 w-5 rounded-full bg-[#DEDCE5] p-1 text-center text-[10px] font-bold text-[#2B5CE6]">
              {allTasksCount}
            </span>
          </button>
          {uniqueMarksWithLinks?.map((item, index) => (
            <button
              key={index}
              className="relative"
              onClick={() => handleMarkClick(item.mark)}
            >
              {item.mark}
              <span className="absolute right-[-24px] top-0 flex h-5 w-5 items-center rounded-full bg-[#DEDCE5] p-1 text-center text-[10px] font-bold text-[#2B5CE6]">
                {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
              </span>
            </button>
          ))}
        </ul>
      </div>
      <span className="h-[1px] bg-[#DAD3CE]"></span>
      <div className="h-[195px] space-y-[14px] overflow-scroll">
        <TaskItem todayTasks={filteredTasks} />
      </div>
    </div>
  );
};

export default TodayTasks;
