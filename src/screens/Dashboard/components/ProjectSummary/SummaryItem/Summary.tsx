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
export const statusStyles = {
  Completed: `text-[#1A932E] bg-[#ABCDA9] `,
  Delayed: `text-[#EE201C] bg-[#F1C6C1]`,
  "At risk": `text-[#E65F2B] bg-[#F0D1C4]`,
  "On going": `text-[#E65F2S] bg-[#F0D1C4]`,
};

const getNumber = (value: string) => {
  const strings = value.replace("%", "");

  return parseInt(strings);
};

const SummaryItem = ({ sum }: IProps) => {
  return (
    <tr className="my-3 text-[14px] hover:bg-gray-50">
      <td className="py-2">{sum.name}</td>
      <td className="py-2 text-left">{sum.manager}</td>
      <td className="py-2 text-left">{sum.date}</td>
      <td
        className={`rounded-full px-3 py-1 text-left text-[12px] text-[#1A932E]`}
      >
        {sum.status}
      </td>
      <td className="flex justify-center">
        <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-[4px] border-[#DFD7D3] text-[10px]">
          <div
            className={`absolute inset-0 rounded-full border-[4px] ${getNumber(sum.progress) === 100 ? "border-[#1A932E]" : getNumber(sum.progress) > 50 ? "border-[#EE201C]" : "border-[#EBC155]"} transition-all duration-500`}
            style={{
              clipPath: `circle(50% at 50% 50%)`,
              transform: `rotate(${getNumber(sum.progress) * 3.6})`,
            }}
          />
          {sum.progress}
        </span>
      </td>
    </tr>
  );
};

export default SummaryItem;
