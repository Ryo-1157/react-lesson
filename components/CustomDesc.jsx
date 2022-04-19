import React from "react";
import styles from "../styles/Home.module.css";

export function CustomDesc() {
  return (
    <div>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </div>
  );
}
