import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* searchbar */}
      <Searchbar />
      {/* main */}
    </div>
  );
}

export default App;
