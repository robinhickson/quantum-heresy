import React from "react";
import { useNavigate } from "react-router-dom";
import ShimmerText from "./ShimmerText";
import styles from "./Subpage.module.css";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageWrapper}>
      {/* Background Image */}
      <div className={styles.background}>
        <img
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747426286/LukeWarm_profile_dygmqx.jpg"
          alt="About Background"
          className={styles.bgImage}
        />
      </div>

      {/* Content Container */}
      <div className={styles.contentBox}>
        <ShimmerText className={styles.title}>
         Robin K Hickson
        </ShimmerText>

        <p className={styles.paragraph}>
          Robin K Hickson used to keep planes apart for a living; now he crashes species into each other on purpose.
       <br />
          This is philosophical and literary science fiction for people who suspect that reality is lying to them. 
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
