import { JSX, useContext } from "react";
import { Link } from "react-router-dom";
import { logoApp, question } from "../../../../constants/images";
import { categories } from "../../../../constants/resource";
import { AppContent } from "../../../../contexts/app.context";
import AsideItem from "./AsideItem";

export interface ICategory {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}
const Aside = () => {
  const { isCollapsed, setIsCollapsed } = useContext(AppContent);
  const handleCollapsed = () => setIsCollapsed((prev) => !prev);
  return (
    <aside
      className={`relative h-full ${isCollapsed ? "w-[420px]" : "w-[120px] pr-8"} bg-black pl-8 pr-12 pt-8 text-white transition-all duration-500`}
    >
      <div className="absolute right-[-14px] top-20 z-10">
        <button
          onClick={handleCollapsed}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-2 text-black"
        >
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </button>
      </div>
      <Link to="/" className="ml-4 flex items-center">
        <>{logoApp}</>
        {isCollapsed && (
          <span className="pl-2 text-2xl font-bold text-white">Promage</span>
        )}
      </Link>
      <button className="mb-3 mt-20 flex w-full cursor-pointer items-center rounded-full bg-white py-2 text-black hover:opacity-85">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <rect width="34" height="34" rx="17" fill="#E65F2B" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 8C17.5523 8 18 8.44772 18 9V16H25C25.5523 16 26 16.4477 26 17C26 17.5523 25.5523 18 25 18H18V25C18 25.5523 17.5523 26 17 26C16.4477 26 16 25.5523 16 25V18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H16V9C16 8.44772 16.4477 8 17 8Z"
            fill="white"
          />
        </svg>
        {isCollapsed && <span>Create new project</span>}
      </button>
      <div className="mt-16 max-h-[500px] overflow-y-auto">
        <ul className="space-y-3">
          {categories &&
            categories?.map((item: ICategory) => {
              return <AsideItem key={item.id} {...item} />;
            })}
        </ul>
      </div>
      <button className="absolute bottom-4 left-4 mt-8 pt-6">{question}</button>
    </aside>
  );
};

export default Aside;
