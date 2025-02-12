import { newStatusStyles } from "../../../ultils/ultils";

interface IProps {
  id: number;
  title: string;
  numbers: number;
}

export const ProgressItem = ({ id, title, numbers }: IProps) => {
  return (
    <article key={id}>
      <h4 className={`${newStatusStyles[title]} text-[22px] font-bold`}>
        {numbers}
      </h4>
      <span className="text-text-light text-sm">{title}</span>
    </article>
  );
};
