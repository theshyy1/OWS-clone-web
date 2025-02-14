import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AppProvider } from "./contexts/app.context.tsx";
import "./index.css";
import { FilterProvider } from "./screens/TodoList/contexts/filters-context.tsx";
import { ModalProvider } from "./screens/TodoList/contexts/modal-context.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppProvider>
      <ModalProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ModalProvider>
    </AppProvider>
  </BrowserRouter>,
);
