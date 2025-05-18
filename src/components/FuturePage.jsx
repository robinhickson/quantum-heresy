import React from "react";
import { useNavigate } from "react-router-dom";
import ShimmerText from "./ShimmerText";
import styles from "./Subpage.module.css";

export default function FuturePage() {
  const navigate = useNavigate();

 
   return (
     <div className={styles.pageWrapper}>
       {/* Background Image */}
       <div className={styles.background}>
         <img
           src="https://res.cloudinary.com/robinkhickson/image/upload/v1747429746/whale-eye-quatum-sail_vv25nh.png"
           alt="Future Background"
           className={styles.bgImage}
         />
       </div>
 
       {/* Content Container */}
       <div className={styles.contentBox}>
         <ShimmerText className={styles.title}>
           In the future
         </ShimmerText>
 
         <p className={styles.paragraph}>
           Former air traffic controller. Lifelong scribbler. Accidental mythographer.
           <br />
           Robin Hickson writes philosophical science fiction for people who suspect reality might be lying to them.
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
 