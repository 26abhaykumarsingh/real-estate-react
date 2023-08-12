import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Main />
    </div>
  );
}

export default App;
