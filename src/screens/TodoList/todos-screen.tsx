import { useContext } from "react";
import { TodosContext } from "./contexts/todos-context";
import { FiltersContainer } from "./container/filters-container";
import { ListContainer } from "./container/list-container";
import { NewTodoContainer } from "./container/newtodos-modal";
import { ToastContainer } from "react-toastify";
import { EmptyContainer } from "./components/empty";
import { ModalContext } from "./contexts/modal-context";
import { ShowTodo } from "./container/showtodos-modal";
import { ListStarModal } from "./container/list-star-modal";
import { AnimatePresence, motion } from "framer-motion";

export const TodoScreen = () => {
  const { todos } = useContext(TodosContext);
  const {
    isModalOpen,
    cancelAddTodoModal,
    isShow,
    setShow,
    isModalMark,
    setModalMark,
  } = useContext(ModalContext);

  return (
    <div className="bg-background-light relative mx-auto rounded-md p-4 pb-2 pt-10 shadow-md">
      <span className="text-error block pb-6 text-center text-6xl font-bold italic underline">
        Just do it
      </span>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0 }}
            animate={{ opacity: 1, y: "0%", scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <div
              onClick={cancelAddTodoModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500"
            >
              <NewTodoContainer onClose={cancelAddTodoModal} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={() => setShow(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500"
            >
              <ShowTodo onClose={() => setShow(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isModalMark && (
        <div
          onClick={() => setModalMark(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500"
        >
          <ListStarModal onClose={() => setModalMark(false)} />
        </div>
      )}
      {todos.length > 0 ? <ListContainer /> : <EmptyContainer />}
      <FiltersContainer />
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />
    </div>
  );
};
