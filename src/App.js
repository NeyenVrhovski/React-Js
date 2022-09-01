import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/molecules/Navbar";
import ItemListContainer from './components/molecules/ItemListContainer';
import ItemDetailContainer from './components/molecules/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/categories/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
        <Route path='*' element={<ItemListContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
