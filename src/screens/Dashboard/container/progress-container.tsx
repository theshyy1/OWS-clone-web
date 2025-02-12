import Dropdown from "../../../components/Dropdown";
import { overallImage } from "../../../constants/images";
import { overallProgress } from "../../../constants/resource";
import { ProgressItem } from "../components/ProgressItem";

export const ProgressContainer = () => {
  return (
    <div className="bg-background-light h-[349px] rounded-2xl p-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Overall Progress</h3>
        <Dropdown name="All" />
      </div>
      <div className="flex items-center justify-center pb-6 pt-4">
        {overallImage}
      </div>
      <div className="flex items-center justify-between text-left">
        {overallProgress?.map((progress) => <ProgressItem {...progress} />)}
      </div>
    </div>
  );
};
