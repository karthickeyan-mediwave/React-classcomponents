import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Movie from "./components/Movie";
// import User from "./components/User";
// import Learn from "./components/Learn.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Learn /> */}
    <Movie />
    {/* <User /> */}
  </React.StrictMode>
);
