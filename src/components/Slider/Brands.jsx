import React from "react";
import styles from "./styles.module.scss";

const Brands = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default Brands;
