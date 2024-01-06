//eslint-disable-next-line
//@ts-ignore
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import ReactDOM from "react-dom/client";
import "../../node_modules/framework7/framework7-bundle.min.css";
import "./style.scss";

Framework7.use(Framework7React);

import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);
