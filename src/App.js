import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

// Lazy loading components for performance
const Home = lazy(() => import('./components/Home'));
const Cart = lazy(() => import('./components/Cart'));
const About = lazy(() => import('./components/About'));

function App() {
  const [cart, setCart] = useState([]);

  // Adds a product if it's not already in the cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev; 
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Handles increment, decrement, and removal (if qty < 1)
  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map(item => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <Router>
      {/* Nav gets the number of items to show on the badge */}
      <Nav cartCount={cart.length} />
      
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;