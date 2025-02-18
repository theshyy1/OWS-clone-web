import { statusStyles } from "../../../ultils/ultils";

interface ISummary {
  id: number;
  name: string;
  manager: string;
  date: string;
  status: string;
  progress: string;
}
interface IProps {
  sum: ISummary;
}

export const SummaryItem = ({ sum }: IProps) => {
  return (
    <div className="justify- flex items-center text-sm">
      <span className="flex-grow">{sum.name}</span>
      <span className="w-[15%] text-left">{sum.manager}</span>
      <span className="w-[15%] text-center">{sum.date}</span>
      <span
        className={`${statusStyles[sum.status]} w-[15%] rounded-full py-1 text-center text-xs`}
      >
        {sum.status}
      </span>
      <span className="flex w-[15%] items-center justify-end pr-5">
        <span className="relative flex border-spacing-1 items-center justify-center overflow-hidden rounded-full border-[#DFD7D3] text-xs">
          {sum.progress || "0%"}
        </span>
      </span>
    </div>
  );
};
