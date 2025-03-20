import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="contact-heading">📞 Contact Us</h1>
        <p className="contact-subtext">We are happy to serve you!</p>

        <div className="contact-details">
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p>📍 <strong>Address:</strong> 123 Food Street, Surat</p>
          </motion.div>

          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p>📞 <strong>Phone:</strong> +91 95372 88254</p>
          </motion.div>

          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p>📧 <strong>Email:</strong> contact@momsinn.com</p>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <div className="contact-social">
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn facebook"
            whileHover={{ scale: 1.1 }}
          >
            🔵 Facebook
          </motion.a>

          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
            whileHover={{ scale: 1.1 }}
          >
            🎨 Instagram
          </motion.a>
        </div>

        {/* Back Button */}
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="contact-back-btn"
          >
            ⬅ Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
