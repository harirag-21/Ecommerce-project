const Order = require("../Models/OrderModel");
const Product = require("../Models/ProductModels");

// Create new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, address, paymentMethod, items } = req.body;

    // Basic validation
    if (!userId || !address || !paymentMethod || !items || items.length === 0) {
      return res.status(400).json({ message: "All fields and at least one item are required" });
    }

    // Map items to include name, price, image, quantity
    const orderItems = await Promise.all(
      items.map(async (i) => {
        const product = await Product.findById(i.productId);
        if (!product) throw new Error(`Product not found: ${i.productId}`);
        return {
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image[0] || "",
          quantity: i.quantity
        };
      })
    );

    // Calculate total amount
    const amount = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const newOrder = new Order({
      userId,
      items: orderItems,
      amount,
      address,
      paymentMethod,
      payment: false, // default
      status: "order placed",
      date: Date.now()
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get orders for a single user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ date: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status, payment } = req.body;
    const updatedData = {};
    if (status) updatedData.status = status;
    if (typeof payment === "boolean") updatedData.payment = payment;

    const order = await Order.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
