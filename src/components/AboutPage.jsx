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
          Robin K Hickson used to keep planes apart for a living; now he crashes species into each other on purpose.</p>
<p>A qualified lawyer turned speculative fiction author, Robin writes with one foot in deep time and the other in existential dread. His stories tangle tribal memory, quantum minds, and catastrophic first contact—building nuanced cause-and-effect spirals with quantum psychic entanglement as the matchstick. When not writing, he’s probably muttering about narrative causality, planetary ethics, or why quantum uncertainty is the worst.</p>
<p>         <br />
          Robin K Hickson writes philosophical science fiction for people who suspect reality might be lying to them.
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
