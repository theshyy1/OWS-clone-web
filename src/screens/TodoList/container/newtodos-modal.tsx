import { useContext, useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { ITodos, TodosContext } from "../contexts/todos-context";

interface IProps {
  onClose: () => void;
}

export const NewTodoContainer = ({ onClose }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const { addTodo, todos } = useContext(TodosContext);

  const handleSave = () => {
    const itemsExisted = todos.some(
      (item: ITodos) => item.title === inputValue,
    );
    if (!inputValue.trim()) {
      setIsError(true);
      setMessage("Please enter a value");
      return;
    }
    if (itemsExisted) {
      setIsError(true);
      setMessage("This todo is already saved");
      return;
    }

    addTodo(inputValue);
    setInputValue("");
    setIsError(false);
    onClose();
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-background-light flex h-[400px] w-[750px] flex-col items-center justify-center rounded-lg pb-10 shadow-md"
    >
      <span className="pb-10 text-3xl font-bold">Create more todos!</span>
      <Input
        type="text"
        placeholder="Enter a new todo"
        className="w-[600px] truncate rounded px-3 py-3 text-sm outline-none"
        value={inputValue}
        onChange={(text) => setInputValue(text.toString())}
        isError={isError}
        messsage={message}
        autoFocus={isError}
      />
      <div className="flex space-x-3 pt-5">
        <Button
          onClick={handleSave}
          className="bg-warning w-[100px] rounded py-3 text-center text-sm font-bold text-white hover:bg-orange/20"
        >
          Save
        </Button>
        <Button
          onClick={onClose}
          className="bg-error w-[100px] rounded py-3 text-center text-sm font-bold text-white hover:bg-orange/20"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
