import "./App.css";
import Home from "./components/Home";
import PaginatedItems from "./components/PaginatedItems";

function App() {
  return (
    <div>
      <Home />
      <PaginatedItems itemsPerPage={4} />
    </div>
  );
}

export default App;
