import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/molecules/Navbar";
import ItemListContainer from './components/molecules/ItemListContainer';
import ItemDetailContainer from './components/molecules/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from './components/molecules/CartContext';
import CartResume from './components/molecules/CartResume';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/categories/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartResume/>}></Route>
          <Route path='*' element={<ItemListContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
