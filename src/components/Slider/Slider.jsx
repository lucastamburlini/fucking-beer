import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.scss";
import React from "react";
import { responsive } from "./brandsList";
import Brands from "./Brands";

const Slider = () => {
  const images = [
    { img: "./images/slider/amstelLogo.png", name: "Amstel" },
    { img: "./images/slider/brahamaLogo.png", name: "Brahama" },
    { img: "./images/slider/budweiserLogo.png", name: "Budweiser" },
    { img: "./images/slider/heinekenLogo.png", name: "Heineken" },
    { img: "./images/slider/paragoniaLogo.png", name: "Patagonia" },
    { img: "./images/slider/quilmesLogo.png", name: "Quilmes" },
    { img: "./images/slider/stellaArtoisLogo.png", name: "Stella Artois" },
  ];

  const product = images.map((item) => (
    <Brands img={item.img} name={item.name} />
  ));

  return (
    <div className={styles.container}>
      <h2>Descubrí las marcas que nos acompañan</h2>
      <div className={styles.carouselContainer}>
        <Carousel responsive={responsive}>{product}</Carousel>
      </div>
    </div>
  );
};

export default Slider;
