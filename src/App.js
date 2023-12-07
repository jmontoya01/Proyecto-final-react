import ListaItems from './Components/pages/ListaItems/ListaItems';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/Navbar/Navbar';
import ListaDetail from './Components/pages/ListaDetail/ListaDetail';
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./Context/CartProvider";
import Cart from './Components/pages/Cart/Cart';
import TerminarCompra from './Components/pages/TerminarCompra/TerminarCompra';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListaItems />} />
          <Route path="/category/:id" element={<ListaItems />} />
          <Route path="/item/:id" element={<ListaDetail />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/formulario/" element={<TerminarCompra />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}


export default App;
