import Dropdown from "../../../components/Dropdown";
import { overviews } from "../../../constants/resource";
import { OverviewItem } from "../components/OverviewItem";

export const OverviewsContainer = () => {
  return (
    <div className="border-text-light border-t-2 pt-7">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">Overview</h3>
        <Dropdown name="Last 30 days" />
      </div>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
        {overviews?.map((item) => <OverviewItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};
