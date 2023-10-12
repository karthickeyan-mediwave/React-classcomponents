import "./App.css";
// import Home from "./components/Home";
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomForm from "./components/Form";
import Nav from "./components/Home";

function Loading() {
  return <p>Loading ...</p>;
}

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/form" element={<CustomForm />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
