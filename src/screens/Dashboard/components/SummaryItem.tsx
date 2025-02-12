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

const getNumber = (value: string) => {
  const strings = value.replace("%", "");

  return parseInt(strings);
};

export const SummaryItem = ({ sum }: IProps) => {
  return (
    <div className="flex items-center justify-between text-sm">
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
          <div
            className={`absolute inset-0 border-spacing-1 rounded-full ${getNumber(sum.progress) === 100 ? "border-black" : getNumber(sum.progress) > 50 ? "border-error" : "border-warning"} transition-all duration-500`}
            style={{
              clipPath: `circle(50% at 50% 50%)`,
              transform: `rotate(${getNumber(sum.progress) * 3.6})`,
            }}
          />
          {sum.progress}
        </span>
      </span>
    </div>
  );
};
