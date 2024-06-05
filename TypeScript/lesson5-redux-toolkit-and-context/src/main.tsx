import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import { Provider } from "react-redux";
import store from "./tools/store/todo";
import { CharacterProvider } from "./context/CharacterContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </Provider>
  </React.StrictMode>
);
