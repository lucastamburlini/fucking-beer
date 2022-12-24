import "./App.css"
import { CartProvider } from "./context/CartProvider";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="container">
      <CartProvider>
        <Layout />
      </CartProvider>
    </div>
  );
}

export default App;
