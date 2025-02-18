import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../components/button";
import { useState } from "react";
import { IProject } from "../@types/types";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { getProjectsLocal } from "../ultils/ultils";
import { Error } from "../components/errors";

interface FormValues {
  id?: number;
  name: string;
  manager: string;
  date: string;
  status: string;
  progress: string;
}

interface IProps {
  addProject: (project: IProject) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedEditItem: IProject | null;
  handleEditDone: () => void;
  updateProject: (project: IProject) => void;
}

const validationSchema = Yup.object({
  name: Yup.string().min(10, "Long is so short").required("Name is required"),
  manager: Yup.string().required("Manager is required"),
  date: Yup.date().required("Date is required"),
  status: Yup.string().required("Status is required"),
  progress: Yup.string().required("Progress is required"),
});

const statusOptions = [
  { value: "At risk", label: "Not Started" },
  { value: "Delayed", label: "Delayed" },
  { value: "On going", label: "In Progress" },
  { value: "Completed", label: "Completed" },
];

const progressOptions = ["0", "10", "20", "50", "100"];

export const FormContainer = ({
  addProject,
  selectedEditItem,
  handleEditDone,
  updateProject,
}: IProps) => {
  const [customValue, setCustomValue] = useState("");
  const allProjects = getProjectsLocal();

  const formatProgressValue = (progressValue: string) => {
    if (typeof progressValue === "string" && !progressValue.endsWith("%")) {
      return `${progressValue}%`;
    }
    return progressValue;
  };

  const validateProjetValue = (
    values: { name: string; date: string },
    projects: IProject[],
  ) => {
    const errors: { name?: string; date?: string } = {};

    if (projects.some((item: IProject) => item.name === values.name)) {
      errors.name = "This name already exists";
    }

    const now = new Date();
    const dueDate = new Date(values.date);

    if (now >= dueDate) {
      errors.date = "Invalid date";
    }
    return errors;
  };

  const handleUpdateProject = (
    selectedItem: IProject,
    values: any,
    formatProgressValue: string,
    projects: IProject[],
  ) => {
    const errors = validateProjetValue(values, projects);
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    const newValue = {
      ...selectedItem,
      ...values,
      progress: formatProgressValue,
    };
    updateProject(newValue);
  };

  const handleAddProject = (
    values: any,
    customValue: string,
    projects: IProject[],
  ) => {
    const errors = validateProjetValue(values, projects);
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    const newProject = {
      ...values,
      progress: `${customValue ? customValue : values.progress}%`,
      id: Date.now(),
    };

    addProject(newProject);
    return null;
  };
  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    resetForm,
    setErrors,
    handleBlur,
    touched,
  } = useFormik<FormValues>({
    initialValues: {
      name: selectedEditItem?.name || "",
      manager: selectedEditItem?.manager || "",
      date: selectedEditItem?.date || "",
      status: selectedEditItem?.status || "",
      progress: selectedEditItem?.progress || "",
    },
    validationSchema,
    onSubmit: (values) => {
      const progressValue = customValue || values.progress;
      const formattedProgressValue = formatProgressValue(progressValue);

      if (selectedEditItem) {
        const errors = handleUpdateProject(
          selectedEditItem,
          values,
          formattedProgressValue,
          allProjects,
        );
        if (errors) {
          setErrors(errors);
          return;
        }
      } else {
        const errors = handleAddProject(values, customValue, allProjects);
        if (errors) {
          setErrors(errors);
          return;
        }
      }
      resetForm();
      handleEditDone();
    },
  });

  const handleCustomChange = (event: any) =>
    setCustomValue(event.target.value || "");

  return (
    <form className="mx-auto" onSubmit={handleSubmit}>
      <span className="block pb-4 text-center text-3xl italic text-orange">
        {selectedEditItem ? "edit project here!" : "create more new"}
      </span>
      <div className="mx-10 grid grid-cols-12 gap-10 space-x-10">
        <div className="col-span-6 pl-10">
          <div className="group relative z-0 mb-5 w-full">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            <Label htmlFor="name-project">Name</Label>
            {touched.name && errors.name && <Error>{errors.name}</Error>}
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <Input
              type="text"
              name="manager"
              placeholder="Manager Project"
              onChange={handleChange}
              value={values.manager}
            />
            <Label htmlFor="manager-project">Manager Project</Label>
            {touched.manager && errors.manager && (
              <Error>{errors.manager}</Error>
            )}
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <Input
              type="date"
              name="date"
              placeholder="Date"
              onChange={handleChange}
              value={values.date}
            />
            <Label htmlFor="date-time">Date</Label>
            {touched.date && errors.date && <Error>{errors.date}</Error>}
          </div>
        </div>
        <div className="col-span-6 pr-10">
          <div className="group relative z-0 mb-5 w-full">
            <select
              onChange={handleChange}
              name="status"
              value={values.status}
              id="status"
              className="text-text-light/90 bg-background-light border-text-light peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm focus:outline-none focus:ring-0"
            >
              <option defaultValue={""}>Choose a status</option>
              {statusOptions.map((status, index) => (
                <option key={index} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
            <Label htmlFor="status">Status</Label>
            {touched.status && errors.status && <Error>{errors.status}</Error>}
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <select
              onChange={handleChange}
              name="progress"
              id="progress"
              value={values.progress}
              className="text-text-light/90 bg-background-light border-text-light peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm focus:outline-none focus:ring-0"
            >
              <option defaultValue={""}>
                {values.progress || "Choose a progress"}
              </option>
              {progressOptions.map((num, index) => (
                <option key={index} value={num}>
                  {num}%
                </option>
              ))}
            </select>
            <Label htmlFor="progress">Progress</Label>
            {touched.progress && errors.progress && (
              <Error>{errors.progress}</Error>
            )}
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="number"
              name="progress"
              id="custom-value"
              placeholder="Or enter custom value"
              value={customValue}
              onChange={handleCustomChange}
              min="0"
              max="100"
              className="text-text-light/90 bg-background-light border-text-light peer mt-2 block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm focus:outline-none focus:ring-0" // Added margin top
            />
            <Label htmlFor="custom-value">Custom Value</Label>
          </div>
        </div>
      </div>
      <div className="item-center flex justify-center space-x-4 py-5">
        <Button
          type="submit"
          className="bg-success hover:bg-error/80 focus:ring-error/30 mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
        >
          Submit
        </Button>
        <Button
          type="submit"
          onClick={handleEditDone}
          className="bg-warning hover:bg-warning/80 mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
