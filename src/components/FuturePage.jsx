import React from "react";
import { useNavigate } from "react-router-dom";
import ShimmerText from "./ShimmerText";
import styles from "./Subpage.module.css";

export default function FuturePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.background}>
        <img
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747768580/ChatGPT_Image_May_20_2025_04_42_02_PM_ttqr5u.png"
          alt="Future Background"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.contentBox}>
        <ShimmerText className={styles.title}>Future</ShimmerText>

        <p className={styles.paragraph}>
          After all, it's one thing to process the colour of a traffic light, but quite another to experience its redness. <br />
          Dr Tom McClelland, Cambridge University
                  </p>

      

        {/* Existing Back to Menu button */}
        <button
          onClick={() => navigate("/?menu=true")}
          className={styles.backButton}
          style={{ marginTop: 0 }}
        >
          ← Back to Menu
        </button>

  {/* New Explore Schism button */}
        <button
          onClick={() => navigate("/schism")}
          className={styles.backButton}
          style={{ marginBottom: "1.5rem" }}
        >
          Explore Schism →
        </button>
      </div>
    </div>
  );
}
