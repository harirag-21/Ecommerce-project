const express = require("express");
const { verifyToken } = require("../middleware/AuthMiddleware");
const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart
} = require("../Controllers/CartController");

const cartRouter = express.Router();

// All routes are protected
cartRouter.use(verifyToken);

// Get user's cart
cartRouter.get("/", getCart);

// Add item to cart
cartRouter.post("/add", addToCart);

// Remove item from cart
cartRouter.delete("/remove", removeFromCart);

// Clear entire cart
cartRouter.delete("/clear", clearCart);

module.exports = cartRouter;
