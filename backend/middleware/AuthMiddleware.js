const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1]; // Bearer <token>
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = { id: decoded.id }; // This makes req.user.id available in controllers
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
