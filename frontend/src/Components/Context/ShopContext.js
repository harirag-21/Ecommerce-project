import React, { useState, useEffect } from 'react';

export const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products/list');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Add product to cart
 const addToCart = async (product) => {
  setCart((prev) => [...prev, product]); // local UI update

  try {
    const token = localStorage.getItem("token"); // 👈 assuming user logged in

    const response = await fetch("http://localhost:8000/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // 👈 must include token
      },
      body: JSON.stringify({
        productId: product.id,
        quantity: product.quantity,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Error saving cart:", data.message);
    } else {
      console.log("Cart saved:", data);
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};


  // Update quantity
  const updateCartItem = (id, newQty) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <ShopContext.Provider value={{ products, cart, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
