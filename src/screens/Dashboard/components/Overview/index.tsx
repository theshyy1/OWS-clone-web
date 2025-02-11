import Button from "../../../../components/ButtonOption/Button";
import { overviews } from "../../../../constants/resource";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  return (
    <>
      <div className="my-7 h-[1px] bg-[#D8CDC6]" />
      <div className="flex items-center justify-between">
        <h3 className="text-[22px]">Overview</h3>
        <Button name="Last 30 days" />
      </div>
      <div className="mt-5 grid grid-cols-12 gap-6">
        {overviews?.map((item) => <OverviewItem key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Overview;
