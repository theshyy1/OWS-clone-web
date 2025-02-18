import { Suspense, useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppContext } from "./contexts/app.context";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./screens/Dashboard/dashboard-screen";
import { NotFound } from "./screens/Notfound/Notfound";
import { ProjectScreen } from "./screens/Projects/projects-screen";
import RegisterForm from "./screens/RegisterForm";
import { TaskScreen } from "./screens/Tasks/task-screen";
import { TodosProvider } from "./screens/TodoList/contexts/todos-context";
import { TodoScreen } from "./screens/TodoList/todos-screen";

function App() {
  const location = useLocation();
  const { setTitleHeader } = useContext(AppContext);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitleHeader("Dashboard");
        break;
      case "/projects":
        setTitleHeader("Projects");
        break;
      case "/tasks":
        setTitleHeader("Tasks");
        break;
      case "/demo":
        setTitleHeader("Demo");
        break;
      case "/todolist":
        setTitleHeader("ToDolist");
        break;
      case "/register":
        setTitleHeader("Register");
        break;
      default:
        setTitleHeader("");
        break;
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/projects" element={<ProjectScreen />} />
        <Route path="/tasks" element={<TaskScreen />} />
        <Route
          path="/todolist"
          element={
            <Suspense>
              <TodosProvider>
                <TodoScreen />
              </TodosProvider>
            </Suspense>
          }
        />
      </Route>
      <Route path="">
        <Route path="/register" element={<RegisterForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
