import { logos } from "@/constants";
import Image from "next/image";
import React from "react";
import styles from "./logos.module.scss";

const LogoGrid: React.FC = () => {
  return (
    <div className={`${styles["logo"]}`}>
      <div
        className={`${styles["logo-container"]} ${styles["scroll-item-primary"]}`}
      >
        {logos.map((logo, index) => (
          <div key={index} className={styles["logo-item"]}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className={styles["logo-image"]}
            />
          </div>
        ))}
      </div>
      <div
        className={`${styles["logo-container"]} ${styles["scroll-item-secondary"]}`}
      >
        {logos.map((logo, index) => (
          <div key={index} className={styles["logo-item"]}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className={styles["logo-image"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
