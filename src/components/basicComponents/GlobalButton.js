import React from "react";
import { motion } from "framer-motion";

function GlobalButton({ children, classes = "", actionEvent }) {
  return (
    <motion.div
      className={`global-btn ${classes}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={actionEvent}
    >
      {children}
    </motion.div>
  );
}

export default GlobalButton;
