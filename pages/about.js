import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { CustomHead } from "../components/CustomHead";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

export default function Home() {
  const CurrentPage = "About";
  return (
    <div className={styles.container}>
      <Header />
      <CustomHead title={CurrentPage} />
      <Main page="About" />
      <Footer />
    </div>
  );
}
