import { AnimatePresence } from "framer-motion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IProject } from "./@types/types";
import { Dropdown } from "./components/Dropdow";
import { Button } from "./components/button";
import { ProjectItem } from "./components/project-item";
import { FormContainer } from "./containers/form-container";
import { getProjectsLocal } from "./ultils/ultils";

export const ProjectScreen = () => {
  const [allProjects, setAllProjects] =
    useState<IProject[]>(getProjectsLocal());
  const [filteredProjects, setFilteredProjects] = useState([...allProjects]);
  const [isOpen, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<IProject | null>(null);
  const [sortKey, setSortKey] = useState<keyof IProject | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(allProjects));
  }, [allProjects, setAllProjects]);

  const getUniqueValues = (project: IProject[], field: keyof IProject) => {
    const values = project.map((project: IProject) => project[field]);
    return [...new Set(values)];
  };

  const filtersProject = (field: keyof IProject, value: string) => {
    if (value === "all") {
      setFilteredProjects(allProjects);
    } else {
      const values = allProjects.filter(
        (proj: IProject) => proj[field] === value,
      );
      setFilteredProjects(values);
    }
  };

  const addProject = (project: IProject) => {
    setFilteredProjects((prev) => [project, ...prev]);
    setAllProjects((prev) => [project, ...prev]);
  };

  const deleteProject = (id: number) => {
    if (!window.confirm(`Are you sure you wanna delete this id: ${id}`)) return;

    setFilteredProjects((prev) => prev.filter((project) => project.id !== id));
    setAllProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const handleMouseEnter = (id: number) => setSelectedId(id);
  const handleMouseLeave = () => setSelectedId(null);

  const handleEditItem = (item: IProject | null) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleEditDone = () => {
    setSelectedItem(null);
    setOpen(false);
  };

  const updateProject = (project: IProject) => {
    setAllProjects(
      allProjects.map((item) => {
        if (item.id === project.id) {
          return project;
        } else {
          return item;
        }
      }),
    );
    setFilteredProjects(
      filteredProjects.map((item) => {
        if (item.id === project.id) {
          return project;
        } else {
          return item;
        }
      }),
    );
  };

  const sortProject = (key: keyof IProject) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedProjects = sortKey
    ? [...allProjects].sort((a, b) => {
        const aValue =
          sortKey === "progress"
            ? parseFloat(a[sortKey].replace("%", ""))
            : a[sortKey];
        const bValue =
          sortKey === "progress"
            ? parseFloat(b[sortKey].replace("%", ""))
            : b[sortKey];

        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : allProjects;

  const handleSortProject = (key: keyof IProject) => {
    sortProject(key);
    setAllProjects(sortedProjects);
    setFilteredProjects(sortedProjects);
  };

  function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const searchManagers = () => {
    const searchString = removeAccents(searchValue.toLowerCase());
    if (searchString === "") {
      return allProjects;
    } else {
      return [...allProjects].filter((manager) => {
        return removeAccents(manager.manager.toLowerCase()).includes(
          searchString,
        );
      });
    }
  };

  const handleSeachBlur = () => {
    setFilteredProjects(searchManagers);
  };
  const projectStatus = getUniqueValues(allProjects, "status");
  return (
    <div className="bg-background-light relative h-full overflow-hidden rounded-2xl p-[18px] pb-[29px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Project Summary</h3>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setOpen((prev) => !prev)}
            className="bg-white px-10 text-black"
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            }
          >
            {!isOpen ? "New project" : "Close"}
          </Button>
          <input
            type="text"
            name="search-manager"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Enter a manager ..."
            onBlur={handleSeachBlur}
            className="flex items-center rounded-full bg-white px-[14px] py-[9px] text-sm outline-none hover:opacity-60"
          />
          <Dropdown
            label="Status"
            field="status"
            fieldItems={projectStatus}
            filters={filtersProject}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="shadow-text-light my-6 w-full shadow-sm"
          >
            <FormContainer
              handleEditDone={handleEditDone}
              selectedEditItem={selectedItem}
              addProject={addProject}
              setOpen={setOpen}
              updateProject={updateProject}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full">
        <div className="border-text-light flex w-full justify-around border-b-2 pb-2.5 pt-6">
          <p className="flex-grow font-bold">Name</p>
          <p className="w-[15%] text-left font-bold">Project manager</p>
          <p
            className="w-[15%] text-center font-bold"
            onClick={() => handleSortProject("date")}
          >
            Due date
          </p>

          <p
            className="w-[15%] text-center font-bold"
            onClick={() => handleSortProject("status")}
          >
            Status
          </p>
          <p
            className="w-[15%] text-right font-bold"
            onClick={() => handleSortProject("progress")}
          >
            Progress
          </p>
          <p className="w-[15%] pl-12 text-center font-bold">Action</p>
        </div>
        <div
          className={`${isOpen ? "h-[300px]" : "h-[640px] overflow-y-auto"} space-y-4 overflow-y-auto pt-2.5`}
        >
          {filteredProjects?.map((sum) => (
            <ProjectItem
              key={sum.id}
              sum={sum}
              selectedId={selectedId}
              deleteProject={deleteProject}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleEditItem={handleEditItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
