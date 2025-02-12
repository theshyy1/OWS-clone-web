import { ITask } from "../../../../types/dashboard.type";
import TaskItem from "../TaskItem";

interface Props {
  todayTasks: ITask[];
}
const TaskList = ({ todayTasks }: Props) => {
  return (
    <div className="h-[195px] space-y-3 overflow-scroll pt-1">
      {todayTasks.map((task: ITask) => (
        <TaskItem task={task} />
      ))}
    </div>
  );
};

export default TaskList;
