import React from "react";
import About from "../components/About/About";
import Api from "../components/Api/Api";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.containerHome}>
      <Banner />
      <Api />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
