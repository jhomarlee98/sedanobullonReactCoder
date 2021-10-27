import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Lee Sedano" />
    </div>
  );
}

export default App;
