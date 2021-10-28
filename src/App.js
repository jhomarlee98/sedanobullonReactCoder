import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js"
import ItemCount from "./components/itemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
          <ItemListContainer greeting="Lee Sedano" />
          <ItemCount />
      </div>
    </div>
  );
}

export default App;
