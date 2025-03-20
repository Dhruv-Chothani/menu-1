import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Menu.css";

const menuItems = {
    "Dosa Varieties": [
      { name: "Masala Dosa", price: "₹80" },
      { name: "Paneer Masala Dosa", price: "₹120" },
      { name: "Cheese Masala Dosa", price: "₹130" },
      { name: "Cheese Paneer Masala Dosa", price: "₹140" },
      { name: "Palak Paneer Dosa", price: "₹150" },
      { name: "Cheese Palak Dosa", price: "₹160" },
      { name: "Cheese Palak Paneer Dosa", price: "₹170" },
      { name: "Jinni Roll", price: "₹180" },
      { name: "Sweetcorn Dosa", price: "₹120" },
      { name: "Raja Rani Dosa", price: "₹160" },
      { name: "Paneer Chilly Dosa", price: "₹170" },
      { name: "Pizza Dosa", price: "₹180" },
      { name: "Sandwich Dosa", price: "₹150" },
      { name: "Spring Roll Dosa", price: "₹170" },
      { name: "Chinese Dosa", price: "₹180" },
      { name: "Dilkhush Dosa", price: "₹190" },
      { name: "Sp. Moms Inn Dosa", price: "₹200" }
    ],
    "Mysore Dosa Variants": [
      { name: "Mysore Masala Dosa", price: "₹90" },
      { name: "Paneer Mysore Dosa", price: "₹130" },
      { name: "Paneer Tukda Mysore Dosa", price: "₹140" },
      { name: "Paneer Surma Mysore Dosa", price: "₹150" },
      { name: "Cheese Mysore Dosa", price: "₹140" },
      { name: "Cheese Paneer Mysore Dosa", price: "₹160" },
      { name: "Cheese Garlic Fry Mysore Dosa", price: "₹170" },
      { name: "Palak Paneer Mysore Dosa", price: "₹150" },
      { name: "Palak Cheese Mysore Dosa", price: "₹160" },
      { name: "Palak Paneer & Cheese Mysore Dosa", price: "₹170" },
      { name: "Gotala Mysore Dosa", price: "₹180" },
      { name: "Sweetcorn Cheese Mysore Dosa", price: "₹140" },
      { name: "Lachka Mysore Dosa", price: "₹180" },
      { name: "Matka Mysore Dosa", price: "₹190" },
      { name: "Patyala Mysore Dosa", price: "₹200" },
      { name: "Kaju Mysore Dosa", price: "₹190" },
      { name: "Fry Gravy Mysore Dosa", price: "₹200" },
      { name: "Sp. Moms Inn Mysore Dosa", price: "₹200" }
    ],
    "Special Items": [
      { name: "Deluxe (Dry Fruit & Chocolate)", price: "₹300/₹600" },
      { name: "Winter Glow (Anjeer Base)", price: "₹350/₹700" },
      { name: "Mawa & Malai", price: "₹400/₹800" },
      { name: "Royal Almond (Chocolate & Badam)", price: "₹400/₹800" },
      { name: "Falooda", price: "₹400/₹800" },
      { name: "Misri Mewa (Mawa & Gulkand)", price: "₹400/₹800" }
    ],
    "Ice Cream Flavors": [
      { name: "Red Peru", price: "₹100" },
      { name: "Golden Fantasy (Orange)", price: "₹120" },
      { name: "Sitafal", price: "₹130" },
      { name: "Chocolate Melody", price: "₹120" },
      { name: "Watermelon", price: "₹100" },
      { name: "Strawberry Almond", price: "₹130" },
      { name: "Fresh Mango", price: "₹120" },
      { name: "Tender Coconut", price: "₹140" },
      { name: "Pineapple Magic", price: "₹110" },
      { name: "Fresh Lychee", price: "₹130" },
      { name: "Black Beauty", price: "₹140" }
    ],
    "Beverages": [
      { name: "Thums Up", price: "₹40" },
      { name: "Maaza", price: "₹40" },
      { name: "Sprite", price: "₹40" },
      { name: "Sosyo", price: "₹50" },
      { name: "Coke", price: "₹40" },
      { name: "Fanta", price: "₹50" },
      { name: "Red Bull", price: "₹120" },
      { name: "Butter Milk", price: "₹30" },
      { name: "Water", price: "₹20" }
    ],
    "Candy & Mouth Fresheners": [
      { name: "Malai Candy", price: "₹40" },
      { name: "Chocolate Candy", price: "₹50" },
      { name: "Chocolate Pan", price: "₹15" }
    ],
    "Party & Event Services": [
      "Royal Family Lounge",
      "Private Dining Area",
      "Birthday Party",
      "Anniversary Party",
      "Kitty Party",
      "Kids Party",
      "Corporate Party",
      "Group Booking"
    ]
  };

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dosa Varieties");

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
    <li key={index} className="menu-item">
      {typeof item === "string" ? (
        <span className="menu-item-name">{item}</span>
      ) : (
        <>
          <span className="menu-item-name">{item.name}</span>
          <span className="menu-item-price">{item.price}</span>
        </>
      )}
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
