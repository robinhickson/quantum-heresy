import React from "react";
import styles from "./SchismPage.module.css";

export default function SchismPage() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.boxTopLeft}>
        <img
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747426275/Esha-and-daughter-neolithic_vawkbe.png"
          alt="Schism Spiral"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>

      <div className={styles.boxTopRight}>
        <h1>Schism</h1>
        
        <p>
          His shoulders hung, muscles sharp, and his golden hair fell past his nape, sticking to the dark skin
          between his shoulder blades. As the waves curled underneath her, lifting her feet from the pebbles on the seafloor,
          a wave passed through Esha's body, too.
        </p>
        <p>
          A pulse—previously unfelt, yet somehow familiar. Warmth bloomed inside her, pushing out the sea’s cold,
          rising from her belly to her chest and mouth. An overwhelming urge propelled her, driving her legs along the seafloor,
          into the shallows.
        </p>
        <p>
          This was her choice.
</p><p> The breeze caught her, cooling her burning skin.
          She ran at Lok, pushing him hard in the small of his back. He stumbled, fell to the sand,
          and Esha was on him as he spun around.
        </p>
        <p>
          She pressed her nose, her mouth against his, and the fight left him—but not the strength.
          He grinned suddenly, breathless.
</p>
          <p>
“We smell like fish and seaweed,” he muttered.
</p>
         <p> Esha snorted, accidentally inhaling his hair.
          “Don’t ruin it,” she whispered, laughing into his neck.</p><p> Then they forgot everything.
        </p>
     
      </div>

      <div className={styles.contentBoxExcerpt}>
        <strong>SCHISM</strong> thrusts you into a shattered world where mortal will tangles with ancient gods and dying technologies. Esha, forged by grief and fierce purpose, and Lok, a haunted stranger, traverse brutal landscapes and fractured alliances. As forgotten deities stir and cosmic destinies unravel, their struggle becomes a crucible for survival, identity, and transcendence. This is more than survival—it’s a reckoning with humanity’s place beneath indifferent stars.
      </div>

      <div className={styles.boxBottomRight}>
        <img
          src="https://res.cloudinary.com/robinkhickson/image/upload/v1747426313/tolstachaolais_bgkoz0.jpg"
          alt="Schism Visual"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
}
