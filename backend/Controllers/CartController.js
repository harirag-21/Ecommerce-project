const User = require("../Models/UserModel"); // adjust the path if needed

// Get user's cart
exports.getCart = async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // assuming you have user ID from auth middleware
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user.cartData);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const qty = Number(quantity) || 1;
    user.cartData[productId] = (user.cartData[productId] || 0) + qty;

    user.markModified("cartData"); // 👈 Important
    await user.save();

    res.json({ message: "Item added to cart", cart: user.cartData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        delete user.cartData[productId];
        await user.save();

        res.json({ message: "Item removed from cart", cart: user.cartData });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Clear entire cart
exports.clearCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.cartData = {};
        await user.save();

        res.json({ message: "Cart cleared", cart: user.cartData });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
