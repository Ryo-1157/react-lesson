import styles from "../styles/Home.module.css";
import { CustomDesc } from "./CustomDesc";
import { HeadLine } from "./HeadLine";

export const Main = (props) => {
  const { page } = props;
  return (
    <main className={styles.main}>
      <h1 className={styles.main_midashi}>{page} Page</h1>
      <CustomDesc title={page} />
      <HeadLine>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </HeadLine>
    </main>
  );
};
