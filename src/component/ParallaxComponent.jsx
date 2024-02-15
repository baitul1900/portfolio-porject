import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParallaxComponent = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const leftPosition = -scrollX * 0.5; // Adjust the speed of the parallax effect
  const rightPosition = scrollX * 0.5; // Adjust the speed of the parallax effect

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
    >
      {/* Cards moving from left to right */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: 0, // Set left position to 0
          transform: `translateX(${leftPosition}px)`, // Use transform to apply parallax effect
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "red",
            margin: "0 10px",
          }}
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "blue",
            margin: "0 10px",
          }}
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>

      {/* Cards moving from right to left */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%", // Set left position to 50%
          transform: `translateX(${rightPosition}px)`, // Use transform to apply parallax effect
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "green",
            margin: "0 10px",
          }}
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "yellow",
            margin: "0 10px",
          }}
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxComponent;
