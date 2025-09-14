import React from "react";
import "./assets/scss/app.scss";
import ReactDOM from "react-dom/client";
import App from "./App";
import { unstable_batchedUpdates } from "react-dom";

unstable_batchedUpdates(() => {
  console.error = () => {};
});

class ErrorBoundary extends React.Component {
  componentDidCatch(error) {
    if (error.message.includes("Tooltip", "defaultProps")) {
      return;
    }
  }

  render() {
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
