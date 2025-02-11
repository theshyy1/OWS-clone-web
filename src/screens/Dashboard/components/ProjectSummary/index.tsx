import Button from "../../../../components/ButtonOption/Button";
import SummaryItem from "./SummaryItem/Summary";

interface Props {
  summaries: {
    id: number;
    name: string;
    manager: string;
    date: string;
    status: string;
    progress: string;
  }[];
}
const ProjectSummary = (props: Props) => {
  const { summaries } = props;
  return (
    <div className="h-[349px] rounded-2xl bg-[#F2EAE5] px-[18px] pb-[29px] pt-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Project summary</h3>
        <div className="flex items-center space-x-2">
          <Button name="Project" />
          <Button name="Project manager" />
          <Button name="Status" />
        </div>
      </div>
      <table className="mt-7 w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left">Name</th>
            <th className="text-left">Project manager</th>
            <th className="text-left">Due date</th>
            <th className="text-left">Status</th>
            <th className="text-center">Progress</th>
          </tr>
          <div className="my-3"></div>
        </thead>
        <tbody className="">
          {summaries?.map((sum) => <SummaryItem key={sum.id} sum={sum} />)}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectSummary;
