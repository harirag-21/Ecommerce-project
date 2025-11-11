const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/OrderController");

// Create a new order
router.post("/", orderController.createOrder);

// Get all orders (admin)
router.get("/", orderController.getAllOrders);

// Get orders for a specific user
router.get("/user/:userId", orderController.getUserOrders);

// Get a specific order by ID
router.get("/:id", orderController.getOrderById);

// Update order status and/or payment
router.put("/:id/status", orderController.updateOrderStatus);

// Delete an order
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
