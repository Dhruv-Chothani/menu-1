import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="menu-container">
      <motion.div
        className="menu-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="menu-header">
          <span className="menu-logo">👣</span>
          <h1 className="menu-title">MOM'S INN</h1>
        </div>
        <p className="menu-tagline">Unexpected Deliver</p>

        {/* Pure Veg Tag */}
        <motion.div
          className="pure-veg"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          PURE VEG
        </motion.div>

        {/* Food Image */}
        <motion.div
          className="menu-image"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=cc0c7fc694a4b1e5cf6b15cf12e9301f78392996791d556d-7457232-images-thumbs&n=13"
            alt="Dosa"
          />
        </motion.div>

        {/* Navigation Buttons */}
        <div className="menu-buttons">
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="menu-btn"
            >
              Menu
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="contact-btn"
            >
                <div className="txtcnt">

              Contact
                </div>
            </motion.button>
          </Link>
        </div>
        <div className="myname">
        Made By Friend's & Cards <br></br>
        Contact - 9537288254
      </div>
      </motion.div>
      
    </div>
  );
};

export default Home;
