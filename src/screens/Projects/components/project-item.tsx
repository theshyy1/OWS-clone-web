import { statusStyles } from "../../../ultils/ultils";
import { IProject } from "../@types/types";
import { Button } from "./button";

interface IProps {
  sum: IProject;
  selectedId: number | null;
  deleteProject: (id: number) => void;
  handleMouseEnter: (id: number) => void;
  handleMouseLeave: (id: number) => void;
  handleEditItem: (item: IProject | null) => void;
}

export const ProjectItem = ({
  sum,
  deleteProject,
  handleMouseEnter,
  handleMouseLeave,
  handleEditItem,
  selectedId,
}: IProps) => {
  const MouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    handleMouseEnter(sum.id);
  };
  const MouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    handleMouseLeave(sum.id);
  };
  return (
    <div
      className={`flex items-center text-sm ${selectedId === sum.id ? "bg-background-dark rounded-md px-2" : ""}`}
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
    >
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
          {sum.progress || "0%"}
        </span>
      </span>
      <span className="flex w-[15%] items-center justify-end space-x-3 pr-5">
        <Button
          onClick={() => handleEditItem(sum)}
          className="fill-success bg-success/80 text-white"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          }
        />
        <Button
          onClick={() => deleteProject(sum.id)}
          className="bg-error/80 text-white"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          }
        />
      </span>
    </div>
  );
};
