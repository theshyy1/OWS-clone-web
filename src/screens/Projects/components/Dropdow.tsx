import { IProject } from "../@types/types";

interface IProps {
  label: string;
  fieldItems?: (string | number)[];
  field?: keyof IProject;
  filters?: (field: keyof IProject, value: string) => void;
}

export const Dropdown = ({ label, fieldItems, field, filters }: IProps) => {
  return (
    <select
      onChange={(e) =>
        filters && filters(field as keyof IProject, e.target.value)
      }
      className="flex items-center rounded-full bg-white px-[14px] py-[9px] text-sm hover:opacity-60"
    >
      <option value="" hidden>
        {label}
      </option>
      <option value={"all"}>All</option>
      {fieldItems?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
