import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { ProductsData } from "../../data/ProductsData";
import styles from "./styles.module.scss";

const Products = () => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <div id="products">
      <div className={styles.container}>
        <div className={styles.containerTittle}>
          <h1>Nuestros productos</h1>
        </div>
        <div className={styles.containerProducts}>
          {ProductsData.map((product, i) => (
            <div key={i} className={styles.products}>
              <img src={product.img} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <p className={styles.productsPrice}>${product.price},00</p>
                <div>
                  <Button
                    onClick={() => addItemToCart(product)}
                    variant="contained"
                    color="warning"
                  >
                    Agregar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
