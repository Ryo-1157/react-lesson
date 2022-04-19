import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { CustomHead } from "../components/CustomHead";
import { Main } from "../components/Main";

export default function Home() {
  const CurrentPage = "About";
  return (
    <div className={styles.container}>
      <CustomHead title={CurrentPage} />
      <Main page="About" />
      <Footer />
    </div>
  );
}
