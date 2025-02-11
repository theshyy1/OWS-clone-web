import { JSX, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContent } from "../../../../contexts/app.context";
import Popover from "../../../../components/Popover";

export interface ICategory {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}

const AsideItem = (props: ICategory) => {
  const { id, title, icon, link } = props;
  const { isCollapsed } = useContext(AppContent);

  return (
    <Popover
      renderProp={
        !isCollapsed && (
          <div className="relative rounded-md border border-gray-200 bg-white px-3 py-2 text-black shadow-sm">
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
            ? `${!isCollapsed ? "h-12 w-12 items-center justify-center" : "w-full"} text-orange flex cursor-pointer rounded-full bg-white py-3 hover:opacity-95`
            : `${!isCollapsed ? "flex h-12 w-12 cursor-pointer items-center justify-center" : "flex"} hover:text-orange hover:shadow-m flex overflow-hidden rounded-full py-3 transition-transform duration-100 hover:translate-y-[-0.04rem] hover:bg-white/80`
        }
      >
        <span className="px-4">{icon}</span>
        {isCollapsed && <span>{title}</span>}
      </NavLink>
    </Popover>
  );
};

export default AsideItem;
