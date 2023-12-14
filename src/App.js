import './App.css';
import UserLayout from './layout/UserLayout';
import Home from './pages/Home';
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import About from "./pages/AboutUs"
import Contact from "./pages/Contact"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='product' element={<Product />} />
            <Route path='about_us' element={<About />} />
            <Route path='contact_us' element={<Contact />} />
          </Route>
          <Route path='*' element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
