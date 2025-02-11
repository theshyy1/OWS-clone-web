import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Projects from "./screens/Projects";
import Tasks from "./screens/Tasks";
import NotFound from "./screens/Notfound";
import Demo from "./screens/Demo";
import RegisterForm from "./screens/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/demo" element={<Demo />} />
      </Route>
      <Route path="">
        <Route path="/register" element={<RegisterForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
