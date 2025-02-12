import { JSX } from "react";

interface Ioverview {
  id: number;
  title: string;
  numbers: string;
  descriptions: string;
  icon: JSX.Element;
  rate: JSX.Element;
}

export const OverviewItem = (item: Ioverview) => {
  const { id, icon, descriptions, title, numbers, rate } = item;
  return (
    <article
      key={id}
      className="bg-background-light z-0 col-span-3 overflow-hidden rounded-2xl shadow-sm transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md"
    >
      <div className="p-[18px] pb-[30px]">
        <div className="">{icon}</div>
        <p className="text-text-light pb-2.5 pt-5 text-sm">{title}</p>
        <span className="my-2.5 text-[28px]">{numbers}</span>
        <p className="text-text-light flex items-center text-[10px]">
          <span className="mr-1">{rate}</span>
          {descriptions}
        </p>
      </div>
    </article>
  );
};
