import React from "react";
import Link from "next/link";
import styles from "./styles/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_wrap}>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};
