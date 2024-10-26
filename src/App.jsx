import Navbar from "./components/layouts/navbar/navbar";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
