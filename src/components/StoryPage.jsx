import React from "react";
import { useNavigate } from "react-router-dom";
import ShimmerText from "./ShimmerText";
import styles from "./Subpage.module.css";

export default function StoryPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.background}>
        <img
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747426340/the_esha_yxzspg.png"
          alt="Story Background"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.contentBox}>
        <ShimmerText className={styles.title}>The Story</ShimmerText>

        <p className={styles.paragraph}>
          A myth written across the skin of a quantum singularity.
          <br />
          A tribe that speaks to beasts.
          <br />
          A god who can't remember if it was ever real.
        </p>

        <button
          onClick={() => navigate("/?menu=true")}
          className={styles.backButton}
        >
          ← Back to Menu
        </button>
      </div>
    </div>
  );
}
