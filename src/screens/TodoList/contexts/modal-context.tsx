import {
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface ModalContextInterface {
  openAddTodoModal: () => void;
  cancelAddTodoModal: () => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  isShow: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  isModalMark: boolean;
  setModalMark: React.Dispatch<SetStateAction<boolean>>;
}

const initialMoalContext: ModalContextInterface = {
  openAddTodoModal: () => null,
  cancelAddTodoModal: () => null,
  isModalOpen: false,
  setIsModalOpen: () => null,
  isShow: false,
  setShow: () => null,
  isModalMark: false,
  setModalMark: () => null,
};
export const ModalContext =
  createContext<ModalContextInterface>(initialMoalContext);
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(
    initialMoalContext.isModalOpen,
  );
  const [isShow, setShow] = useState(initialMoalContext.isShow);
  const [isModalMark, setModalMark] = useState(initialMoalContext.isModalMark);

  const openAddTodoModal = () => {
    setIsModalOpen(true);
  };
  const cancelAddTodoModal = () => {
    setIsModalOpen(false);
  };

  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      openAddTodoModal,
      cancelAddTodoModal,
      isShow,
      setShow,
      isModalMark,
      setModalMark,
    }),
    [isModalOpen, isShow, isModalMark],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
