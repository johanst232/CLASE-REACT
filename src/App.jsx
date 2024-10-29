import {
  CartContext,
  CartContextProvider,
} from "./components/context/CartContext";
import Navbar from "./components/layouts/navbar/navbar";
import CartContainer from "./components/pages/cartContainer/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route
            path={"/category/:categories"}
            element={<ItemListContainer />}
          />
          <Route path={"/cart"} element={<CartContainer />} />
          <Route
            path={"/productDetail/:id"}
            element={<ItemDetailContainer />}
          />
          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
