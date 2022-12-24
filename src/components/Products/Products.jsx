import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { ProductsData } from "../../Data/ProductsData";
import styles from "./styles.module.scss";

const Products = () => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <>
      <h1>Nuestros productos</h1>
      <div id="products" className={styles.productsContainer}>
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
    </>
  );
};

export default Products;
