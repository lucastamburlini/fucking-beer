import React from "react";
import Api from "../components/Api/Api";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import FormContact from "../components/FormContact/FormContact";
import Slider from "../components/Slider/Slider";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.containerHome}>
      <Banner />
      <Slider />
      <Api />
      <FormContact />
      <Footer />
    </div>
  );
};

export default Home;
