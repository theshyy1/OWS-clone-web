import { OverviewsContainer } from "./container/overviews-container";
import { ProgressContainer } from "./container/progress-container";
import { SummaryContainer } from "./container/summary-container";
import { TasksContainer } from "./container/tasks-container";
import { WorkloadContainer } from "./container/workload-container";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <OverviewsContainer />
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6 xl:grid-cols-12">
        <div className="col-span-8 space-y-6 pt-8">
          <SummaryContainer />
          <TasksContainer />
        </div>
        <div className="col-span-4 space-y-6 pt-8">
          <ProgressContainer />
          <WorkloadContainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
