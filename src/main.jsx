import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './Context/FavoritesContext.jsx'
import { SearchProvider } from "./Context/SearchContext";
import { CartProvider } from './Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
  <SearchProvider>
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
  </SearchProvider>
  </CartProvider>
  </BrowserRouter>
  ,
)
