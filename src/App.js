import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Success from "./pages/Success";
import Riwayat from "./pages/Riwayat";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/shop/add" element={<AddProduct />} />
          <Route path="/shop/edit/:id" element={<EditProduct />} />
          <Route path="/success" element={<Success />} />
          <Route path="/riwayat" element={<Riwayat />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
