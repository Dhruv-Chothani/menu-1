import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Menu.css";

const menuItems = {
  Dosa: [
    { name: "Masala Dosa", price: "₹80" },
    { name: "Cheese Dosa", price: "₹120" },
    { name: "Mysore Dosa", price: "₹100" },
  ],
  "Cold Drinks": [
    { name: "Coca-Cola", price: "₹40" },
    { name: "Pepsi", price: "₹40" },
    { name: "Lemon Soda", price: "₹50" },
  ],
  "Fancy Dosa": [
    { name: "Chocolate Dosa", price: "₹150" },
    { name: "Paneer Tikka Dosa", price: "₹140" },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dosa");

  return (
    <div className="menu-page-container">
      <motion.div
        className="menu-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="menu-heading">🍽️ Menu</h1>
        <p className="menu-subtext">Delicious Food Awaits You!</p>

        {/* Category Buttons */}
        <div className="menu-category-buttons">
          {Object.keys(menuItems).map((category) => (
            <motion.button
              key={category}
              className={`menu-category-btn ${selectedCategory === category ? "active-category" : ""}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Menu List */}
        <ul className="menu-food-list">
          {menuItems[selectedCategory].map((item, index) => (
            <li key={index}>
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        {/* Back Button */}
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="menu-back-btn"
          >
            ⬅ Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Menu;
