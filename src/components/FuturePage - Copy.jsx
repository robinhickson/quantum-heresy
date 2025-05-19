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
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747426324/Schism-spiral-fullpage_q8tsrk.png"
          alt="Future Background"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.contentBox}>
        <ShimmerText className={styles.title}>Future</ShimmerText>

        <p className={styles.paragraph}>
         After all, it's one thing to process the colour of a traffic light, but quite another to experience its redness. 
Dr Tom McClelland, Cambridge University

          <br />
          "But with regard to the material world, we can at least go so far as this—we can perceive that events are brought about not by insulated interpositions of Divine power, exerted in each particular case, but by the establishment of general laws." 
Whewell: Bridgewater Treatise.
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
