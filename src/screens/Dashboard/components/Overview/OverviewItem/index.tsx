import { JSX } from "react";

interface Ioverview {
  id: number;
  title: string;
  numbers: string;
  descriptions: string;
  icon: JSX.Element;
  rate: JSX.Element;
}

const OverviewItem = (item: Ioverview) => {
  const { id, icon, descriptions, title, numbers, rate } = item;
  return (
    <article
      key={id}
      className="z-0 col-span-3 overflow-hidden rounded-2xl bg-[#F2EAE5] shadow-sm transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md"
    >
      <div className="p-4">
        <div className="">{icon}</div>
        <p className="pt-4 text-[14px] text-[#797979]">{title}</p>
        <span className={`my-[10px] text-xl`}>{numbers}</span>
        <p className="flex items-center text-[10px] text-[#797979]">
          <span className="mr-1">{rate}</span>
          {descriptions}
        </p>
      </div>
    </article>
  );
};

export default OverviewItem;
