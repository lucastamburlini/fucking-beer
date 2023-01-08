import styles from "./styles.module.scss";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@mui/material";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBanner}>
        <div className={styles.containerText}>
          <img src="./images/calavera.png" alt="fuckingBeer" />
        </div>
        <div>
          <h1>FuckingBeer</h1>
          <p>
            Queremos que conozcas nuestras experiencias y productos que tenemos
            para ofrecerte.
          </p>
          <Button variant="contained" color="warning">
            <Link to="/#contact" smooth>
              Conocé más
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
