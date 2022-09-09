import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
