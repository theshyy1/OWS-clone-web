import { overallProgress, summaries } from "../../constants/resource";
import OverallProgress from "./components/OverallProgress";
import Overview from "./components/Overview";
import ProjectSummary from "./components/ProjectSummary";
import TodayTasks from "./components/TodayTasks";
import Workload from "./components/Workload";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Overview />
      <div className="mt-8 grid grid-cols-12 gap-4">
        <div className="col-span-8 space-y-6">
          <ProjectSummary summaries={summaries} />
          <TodayTasks />
        </div>
        <div className="col-span-4 space-y-6">
          <OverallProgress overallProgress={overallProgress} />
          <Workload />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
