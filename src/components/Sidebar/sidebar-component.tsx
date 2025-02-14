import { JSX, useContext } from "react";
import { Link } from "react-router-dom";
import { logoApp, question } from "../../constants/images";
import { categories } from "../../constants/resource";
import { AppContext } from "../../contexts/app.context";
import Popover from "../Popover";
import { SidebarItem } from "./SidebarItem";

export interface ICategory {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}
export const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(AppContext);
  const handleCollapsed = () => setIsCollapsed((prev) => !prev);
  return (
    <aside
      className={`relative h-full ${isCollapsed ? "w-[260px] pl-[30px] pr-[46px]" : "flex w-[100px] flex-col items-center"} truncate bg-black text-white transition-all duration-500`}
    >
      <div className="absolute right-0 top-8">
        <button
          onClick={handleCollapsed}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-2 text-black hover:opacity-85"
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
      <Popover
        renderProp={
          !isCollapsed && (
            <div className="border-gray-200 relative z-[7] rounded-md border bg-white px-3 py-1 text-black shadow-sm">
              Promage Home
            </div>
          )
        }
      >
        <Link to="/" className="flex items-center pt-8">
          <span>{logoApp}</span>
          {isCollapsed && (
            <span className="pl-2 text-2xl font-bold text-white">Promage</span>
          )}
        </Link>
      </Popover>
      <Popover
        renderProp={
          !isCollapsed && (
            <div className="border-gray-200 relative z-[7] rounded-md border bg-white px-3 py-1 text-black shadow-sm">
              Create New
            </div>
          )
        }
      >
        <button
          className={`${isCollapsed && "w-full"} mb-[60px] mt-[78px] flex cursor-pointer items-center rounded-full bg-white px-2 py-1 text-black hover:opacity-85`}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <rect width="34" height="34" rx="17" fill="#E65F2B" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 8C17.5523 8 18 8.44772 18 9V16H25C25.5523 16 26 16.4477 26 17C26 17.5523 25.5523 18 25 18H18V25C18 25.5523 17.5523 26 17 26C16.4477 26 16 25.5523 16 25V18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H16V9C16 8.44772 16.4477 8 17 8Z"
              fill="white"
            />
          </svg>
          {isCollapsed && (
            <span className="ml-[10px] whitespace-normal pr-4 text-left text-sm">
              Create new project
            </span>
          )}
        </button>
      </Popover>
      <div className="h-[470px] overflow-y-auto overflow-x-hidden">
        <ul className="space-y-2.5">
          {categories &&
            categories?.map((item: ICategory) => {
              return <SidebarItem key={item.id} {...item} />;
            })}
        </ul>
      </div>
      <button className="absolute bottom-4 left-4 pt-8">{question}</button>
    </aside>
  );
};
