import "./App.css";
import Home from "./pages/Home";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
