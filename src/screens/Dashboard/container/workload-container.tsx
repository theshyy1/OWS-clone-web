import Dropdown from "../../../components/Dropdown";

export const WorkloadContainer = () => {
  return (
    <div className="bg-background-light h-[400px] rounded-2xl p-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Projects Workload</h3>
        <Dropdown name="Last 3 months" />
      </div>
    </div>
  );
};
