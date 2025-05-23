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
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747429746/whale-eye-quatum-sail_vv25nh.png"
          alt="Story Background"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.contentBox}>
        <ShimmerText className={styles.title}>BOOK1: SCHISM</ShimmerText>

     <>
  <p className={styles.paragraph}>
    <strong>SCHISM</strong> unfolds in a universe ruled by the strange laws of quantum uncertainty, where the very act of observation doesn’t merely reveal reality — it creates it. Consciousness and cosmos are entwined in a delicate dance, collapsing infinite possibilities into singular moments that shape destinies.
  </p>

  <p className={styles.paragraph}>
    As quantum entities watch, a young tribal woman named Esha begins to question the purpose of her existence. Her journey becomes a bridge between ancient human rites and the Eye at the centre of the Universe.
  </p>

  
  <p className={styles.paragraph}>
    Inspired by Adrian Tchaikovsky’s grand vision and Iain M. Banks’ rich characterisation, Schism is a cerebral yet profoundly human journey into a universe where science and spirit collide — and where the future hinges on who, or what, is watching.
  </p>
</>


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
