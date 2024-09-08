import Navbar from "./components/layouts/navbar/navbar";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";

function App() {
  let saludo = "Bienvenido a la tienda de farenheite";
  return (
    <div>
      <Navbar />
      <ItemListContainer gretting={saludo} />
    </div>
  );
}

export default App;
