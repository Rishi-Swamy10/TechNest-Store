
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import { Routes ,Route, Router} from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import About from './Pages/About'
import Catalog from './Pages/Catalog'
import Wishlist from './Pages/Wishlist'
import Checkout from './Pages/Checkout'
import Login from './Pages/LoginSignup'
import Contact from './Pages/Contact'
import SearchBar from "./Components/SearchBar";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
