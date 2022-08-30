import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/molecules/Navbar";
import ItemListContainer from './components/molecules/ItemListContainer';
import ItemDetailContainer from './components/molecules/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemDetailContainer/>
      {/* <ItemListContainer/> */}
    </div>
  );
}

export default App;
