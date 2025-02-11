import Button from "../../../../components/ButtonOption/Button";
import { overallImage } from "../../../../constants/images";
import { statusStyles } from "../ProjectSummary/SummaryItem/Summary";

interface IProps {
  overallProgress: {
    id: number;
    title: string;
    numbers: number;
  }[];
}
const newStatusStyles: any = {
  ...statusStyles,
  "Total projects": "text-[#E65F2B]",
  Completed: `text-[#1A932E] `,
  Delayed: `text-[#EE201C] `,
  "At risk": `text-[#E65F2B] `,
  "On going": `text-[#E65F2S]`,
};

const OverallProgress = ({ overallProgress }: IProps) => {
  return (
    <div className="h-[349px] rounded-2xl bg-[#F2EAE5] p-4 transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Overall Progress</h3>
        <Button name="All" />
      </div>
      <div className="flex items-center justify-center pb-6 pt-4">
        {overallImage}
      </div>
      <div className="flex items-center justify-between text-left">
        {overallProgress?.map((item) => (
          <article key={item.id}>
            <h4
              className={`${newStatusStyles[item.title]} text-[22px] font-bold`}
            >
              {item.numbers}
            </h4>
            <span className="text-[14px] text-[#797979]">{item.title}</span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OverallProgress;
