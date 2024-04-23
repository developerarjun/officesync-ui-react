import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./scss/style.scss"
import { Routes } from "./app/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
