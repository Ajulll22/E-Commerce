import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import AuthProvider from "./components/AuthProvider";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
