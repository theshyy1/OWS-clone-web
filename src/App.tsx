import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./screens/Dashboard/dashboard-screen";
import { NotFound } from "./screens/Notfound/Notfound";
import Projects from "./screens/Projects";
import RegisterForm from "./screens/RegisterForm";
import Tasks from "./screens/Tasks";
import { TodoScreen } from "./screens/TodoList/todos-screen";
import { AppContext } from "./contexts/app.context";
import { TodosProvider } from "./screens/TodoList/contexts/todos-context";

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route
          path="/todolist"
          element={
            <TodosProvider>
              <TodoScreen />
            </TodosProvider>
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
