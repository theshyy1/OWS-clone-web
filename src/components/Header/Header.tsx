import { useContext } from "react";
import { AppContent } from "../../contexts/app.context";

const Header = () => {
  const { isCollapsed } = useContext(AppContent);
  return (
    <header
      className={`container fixed top-0 z-[2] flex h-[100px] items-center justify-between bg-[#EBDFD7]`}
    >
      <h3 className="text-2xl font-semibold">Dashboard</h3>
      <div
        className={`flex items-center ${isCollapsed && "pr-[278px]"} transition-all duration-500`}
      >
        <input
          type="text"
          placeholder="Search for anything"
          className="rounded-full py-3 pl-5 text-[14px]"
        />
        <div className="mx-[10px] h-12 w-12 rounded-full bg-white"></div>
        <article
          className={`relative flex items-center space-x-1 rounded-full bg-white px-2`}
        >
          <img
            src="https://picsum.photos/38/38"
            className="rounded-full object-contain"
            alt=""
          />
          <div className="pl-1 pr-3">
            <h2 className="text-[14px]">Alex meian</h2>
            <span className="text-sm text-[#A1A3A5]">Prodcut manager</span>
          </div>
          <span className="absolute right-1 top-4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.69038 4.6037C2.49709 4.80251 2.49709 5.12485 2.69038 5.32366L6.64997 9.39639C6.74279 9.49186 6.86869 9.5455 6.99996 9.5455C7.13122 9.5455 7.25712 9.49186 7.34994 9.39639L11.3095 5.32366C11.5028 5.12485 11.5028 4.80251 11.3095 4.6037C11.1162 4.40489 10.8029 4.40489 10.6096 4.6037L6.99996 8.31644L3.39034 4.6037C3.19705 4.40489 2.88367 4.40489 2.69038 4.6037Z"
                fill="#292D32"
              />
            </svg>
          </span>
        </article>
      </div>
    </header>
  );
};
export default Header;
