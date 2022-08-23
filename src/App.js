import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/molecules/Navbar";
import ItemListContainer from './components/molecules/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
