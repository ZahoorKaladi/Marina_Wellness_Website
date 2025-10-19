// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <Layout> {/* <-- Now, we wrap the App component with Layout */}
      <App />
      <ScrollToTop />
    </Layout>
  </BrowserRouter>
);