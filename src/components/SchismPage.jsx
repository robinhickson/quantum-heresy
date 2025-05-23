import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SchismPage.module.css";

export default function SchismPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.gridContainer}>
        <div className={styles.boxTopLeft}>
          <img
            src="https://res.cloudinary.com/robinkhickson/image/upload/v1747426340/the_esha_yxzspg.png"
            alt="Esha"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>

        <div className={styles.boxTopRight}>
          <h1>Quantum Heresy Book 1: Schism</h1>
          <p>Lok turned back to the shore.</p>
          <p>Esha watched him, this strange man, as he left the water.</p>
          <p>
            His shoulders hung, muscles sharp, and his golden hair fell past his
            nape, sticking to the dark skin between his shoulder blades. As the
            waves curled underneath her, lifting her feet from the pebbles on the
            seafloor, a wave passed through Esha's body, too. A pulse—previously
            unfelt, yet somehow familiar.
          </p>
          <p>
            Warmth bloomed inside her, pushing out the sea’s cold, rising from her
            belly to her chest and mouth. An overwhelming urge propelled her,
            driving her legs along the seafloor, into the shallows.
          </p>
          <p>This was her choice.</p>
          <p>
            The breeze dragged at her, cooling her burning skin. She ran at Lok,
            pushing him hard in the small of his back. He stumbled, fell to the
            sand, and Esha was on him as he spun around.
          </p>
          <p>
            She pressed her nose, her mouth against his, and the fight left him—but
            not the strength. He grinned, breathless.
          </p>
          <p>“I-".</p>
          <p>
            Esha put a finger to his lips.
</p>
<p>“Shsh. Don’t ruin it,” she
            whispered, laughing into his neck.
          </p>
          <p>
            Lok held her by the waist and rolled her onto her back. Without another
            word between them, he lifted himself above her, and she moved her legs
            apart, giving him space for his hips to join hers.
          </p>
          <p>
            Gently, almost unnoticed, he was inside her, and they rocked together,
            digging toes and clasped hands into the sand, Esha’s eyes closed
            against the sun.
          </p>
        </div>

        <div className={styles.contentBoxExcerpt}>
          As species are produced and exterminated by slowly acting and still
          existing causes, and not by miraculous acts of creation and by
          catastrophes; and as the most important of all causes of organic change
          is one which is almost independent of altered and perhaps suddenly
          altered physical conditions, namely, the mutual relation of organism to
          organism, -- the improvement of one being entailing the improvement or
          the extermination of others.
          <p>Charles Darwin, The Origin of Species</p>
        </div>

        <div className={styles.boxBottomRight}>
          <img
            src="https://res.cloudinary.com/robinkhickson/image/upload/v1747821700/People_of_the_Darkness1_r2bkm2.jpg"
            alt="Schism Homeworld"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>

      {/* Back button bottom centre */}
      <div className={styles.backButtonContainer}>
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
