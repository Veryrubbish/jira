import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { loadServer, DevTools } from "jira-dev-tool";
import { AppProviders } from "context/index";
import "antd/dist/antd.less";
loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  )
);
