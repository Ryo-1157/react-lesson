import React from "react";
import styles from "../styles/Home.module.css";

export const CustomDesc = (props) => {
  const { title } = props;
  return (
    <div>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{title}.js</code>
      </p>
    </div>
  );
};
