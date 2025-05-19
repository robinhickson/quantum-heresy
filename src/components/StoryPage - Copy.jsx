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
        <ShimmerText className={styles.title}>Story</ShimmerText>

        <p className={styles.paragraph}>
      
      <strong>SCHISM</strong> unfolds in a universe ruled by the strange laws of quantum uncertainty, where the very act of observation doesn’t merely reveal reality — it creates it. Consciousness and cosmos are entwined in a delicate dance, collapsing infinite possibilities into singular moments that shape destinies.


At its heart lies the Eye — a quantum observer, both legend and mechanism — whose gaze fractures time and space, compelling civilizations to confront the fragile boundary between fate and free will. Ancient gods stir within quantum fields as tribal souls awaken to vast cosmic truths, each choice sending ripples across existence.


Melding hard science with raw human emotion, Schism probes how the observer effect mirrors our own decisions, how uncertainty breeds both dread and liberation, and how the quantum fabric of reality reflects the turmoil within us all.


Inspired by Tchaikovsky’s grand vision and Banks’ rich characterisation, Schism is a cerebral yet profoundly human journey into a universe where science and spirit collide — and where the future hinges on who, or what, is watching.
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
