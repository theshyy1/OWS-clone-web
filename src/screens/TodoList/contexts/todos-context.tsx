import {
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { getTodosLocal, saveTodosLocal } from "../../../ultils/todos.storage";

export interface ITodos {
  id: string;
  title: string;
  isCompleted: boolean;
  createAt: string;
  highlight: boolean;
}

interface AppContextInterface {
  todos: ITodos[];
  setTodos: React.Dispatch<SetStateAction<ITodos[]>>;
  onHandleCheck: (id: string) => void;
  onHandleStar: (id: string) => void;
  handleDelete: (id: string) => void;
  addTodo: (string: string) => void;
  todoDetail: ITodos | null;
  setTodoDetail: React.Dispatch<SetStateAction<ITodos | null>>;
  handleDeleteSelected: () => void;
}
const inititalState: AppContextInterface = {
  todos: getTodosLocal() || [],
  setTodos: () => null,
  onHandleCheck: () => null,
  onHandleStar: () => null,
  handleDelete: () => null,
  addTodo: () => null,
  todoDetail: null,
  setTodoDetail: () => {},
  handleDeleteSelected: () => null,
};

export const TodosContext = createContext<AppContextInterface>(inititalState);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodos[]>(inititalState.todos);
  const [todoDetail, setTodoDetail] = useState<any>(inititalState.todoDetail);

  useEffect(() => {
    saveTodosLocal(todos);
  }, [todos, setTodos]);

  const addTodo = (todo: string) => {
    if (todo.trim()) {
      const newTodo = {
        id: uuidv4(),
        title: todo,
        isCompleted: false,
        highlight: false,
        createAt: new Date(Date.now()).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
      setTodos([...todos, newTodo]);
      toast.success("Successfully added");
    }
  };

  const onHandleCheck = (id: string) => {
    setTodos((prev) =>
      prev.map((todo: ITodos) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    );
  };
  const onHandleStar = (id: string) => {
    setTodos(
      todos.map((todo: ITodos) => {
        if (todo.id === id) {
          return { ...todo, highlight: !todo.highlight };
        }
        return todo;
      }),
    );
  };

  const handleDelete = (id: string) => {
    if (!window.confirm(`Are you sure you want to delete #${id}`)) return;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast.error("Successfully deleted");
  };

  const handleDeleteSelected = () => {
    if (!window.confirm(`Are you sure you want to delete all this todos?`))
      return;
    setTodos((prev) =>
      prev.filter((todo: ITodos) => todo.isCompleted === false),
    );
    toast.error("Successfully");
  };

  const contextValue = useMemo(
    () => ({
      todos,
      setTodos,
      onHandleCheck,
      handleDelete,
      addTodo,
      todoDetail,
      setTodoDetail,
      handleDeleteSelected,
      onHandleStar,
    }),
    [todos, todoDetail],
  );
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
