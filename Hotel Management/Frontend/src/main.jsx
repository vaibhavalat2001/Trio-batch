import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
);
