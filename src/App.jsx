
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {

  const [cart, setCart] = useState([]);

  // Add To Cart
  const addToCart = (meal) => {
    const exist = cart.find(
      (item) => item.idMeal === meal.idMeal
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item.idMeal === meal.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...meal, quantity: 1 }]);
    }

    alert("Added To Cart!");
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.idMeal !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.idMeal === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.idMeal === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col">

        <Navbar cart={cart} />

        <main className="flex-1">
          <Routes>

            <Route
              path="/"
              element={<Home addToCart={addToCart} />}
            />

            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />

            <Route
              path="/details/:id"
              element={<Details addToCart={addToCart} />}
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              }
            />

            <Route path="/about" element={<About />} />

          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
