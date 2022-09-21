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
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
