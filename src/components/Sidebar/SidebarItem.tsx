import { JSX, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContent } from "../../contexts/app.context";
import Popover from "../Popover";

export interface ICategory {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}

export const SidebarItem = (props: ICategory) => {
  const { id, title, icon, link } = props;
  const { isCollapsed } = useContext(AppContent);

  return (
    <Popover
      renderProp={
        !isCollapsed && (
          <div className="relative rounded-full border border-none bg-white px-3 py-1 text-sm text-black shadow-md">
            {title}
          </div>
        )
      }
    >
      <NavLink
        to={link}
        key={id}
        end
        className={({ isActive }) =>
          isActive
            ? `${!isCollapsed && "h-12 w-12 items-center justify-center text-orange"} flex cursor-pointer rounded-full bg-white py-3 text-orange hover:opacity-95`
            : `${!isCollapsed && "h-12 w-12 cursor-pointer items-center justify-center"} hover:shadow-m flex overflow-hidden rounded-full py-3 transition-transform duration-100 hover:translate-y-[-0.04rem] hover:bg-white/80 hover:text-orange`
        }
      >
        <span className="px-4">{icon}</span>
        {isCollapsed && <span>{title}</span>}
      </NavLink>
    </Popover>
  );
};
