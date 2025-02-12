import Dropdown from "../../../components/Dropdown";
import { summaries } from "../../../constants/resource";
import { SummaryItem } from "../components/SummaryItem";

export const SummaryContainer = () => {
  return (
    <div className="bg-background-light h-[349px] rounded-2xl p-[18px] pb-[29px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Project summary</h3>
        <div className="flex items-center space-x-2">
          <Dropdown name="Project" />
          <Dropdown name="Project manager" />
          <Dropdown name="Status" />
        </div>
      </div>

      <div className="border-text-light flex w-full justify-between border-b-2 pb-2.5 pt-6">
        <p className="flex-grow font-bold">Name</p>
        <p className="w-[15%] text-left font-bold">Project manager</p>
        <p className="w-[15%] text-center font-bold">Due date</p>
        <p className="w-[15%] text-center font-bold">Status</p>
        <p className="w-[15%] text-right font-bold">Progress</p>
      </div>
      <div className="space-y-4 pt-2.5">
        {summaries?.map((sum) => <SummaryItem key={sum.id} sum={sum} />)}
      </div>
    </div>
  );
};
