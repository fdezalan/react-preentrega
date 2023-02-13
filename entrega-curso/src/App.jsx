import NavBar from "./components/NavBar";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron productos"} /> 
      <Main />
      <Footer />
    </div>
    );
}

export default App;
