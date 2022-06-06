import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import "./App.css";

function App() {
  return (
    <div className="container App">
      <div className="row">
        <div className="col-md-12">
          <h1>Shopping Store</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
