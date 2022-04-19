import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { CustomHead } from "../components/CustomHead";
import { CustomDesc } from "../components/CustomDesc";
import { HeadLine } from "../components/HeadLine";

export default function Home() {
  const CurrentPage = "Index";
  return (
    <div className={styles.container}>
      <CustomHead title={CurrentPage} />
      <main className={styles.main}>
        <h1 className={styles.title}>Index Page</h1>

        <CustomDesc title={CurrentPage} />

        <HeadLine />
      </main>

      <Footer />
    </div>
  );
}
