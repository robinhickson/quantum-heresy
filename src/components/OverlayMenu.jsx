import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./OverlayMenu.module.css";

export default function OverlayMenu({ onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.overlay} ${visible ? styles.visible : ""}`}
      style={{ willChange: "opacity" }}
    >
      <div className={styles.background}>
        <img
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747426331/small-esha-eye_vbcxan.png"
          alt="Menu Background"
          className={styles.bgImage}
        />
      </div>
      <ul className={styles.menuList}>
        <li>
          <Link to="/story" className={`${styles.menuLink} ${styles.shimmerText}`}>
            Story
          </Link>
        </li>
        <li>
          <Link to="/about" className={`${styles.menuLink} ${styles.shimmerText}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/future" className={`${styles.menuLink} ${styles.shimmerText}`}>
            Future
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`${styles.menuLink} ${styles.shimmerText}`}>
            Contact
          </Link>
        </li>
      </ul>

      <button
        onClick={onClose}
        className={styles.closeButton}
        aria-label="Close menu"
      >
        ×
      </button>
    </div>
  );
}
