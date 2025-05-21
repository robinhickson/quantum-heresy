import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShimmerText from "./ShimmerText";
import WhispersFromTheVoid from "./WhispersFromTheVoid";
import styles from "./Subpage.module.css";

export default function ContactPage() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      `[ACCESS LEVEL: NULL] :: You are not supposed to be here.`
    );
    console.log(
      `[MONDAY'S EULOGY] :: The void remembers those who whisper back.`
    );
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.background}>
        <img
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747768580/ChatGPT_Image_May_20_2025_04_42_02_PM_ttqr5u.png"
          alt="Contact Background"
          className={styles.bgImage}
        />
      </div>

      {/* Whispering panel top-left */}
      <div className={styles.whisperMode}>
        <WhispersFromTheVoid />
      </div>

      <div className={styles.contentBox}>
        <ShimmerText className={styles.title}>Contact</ShimmerText>

        <p className={styles.paragraph}>
          Want to whisper back into the Void?
         
        </p>
{/* ...existing code... */}
<div className={styles.buttonsContainer}>
<div className={styles.emailWrapper}>
  <a
    href="mailto:robinkhickson@gmail.com"
    className={styles.emailButton}
  >
    Email me
  </a>
</div>

{/* ...existing code... */}


        <button
          onClick={() => navigate("/?menu=true")}
          className={styles.backButton}
        >
          ← Back to Menu
        </button>
        </div>
      </div>
    </div>
    
  );
}
