import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import styles from "./styles.module.scss";
import ItemCart from "../ItemCart/ItemCart";
import { Button } from "@mui/material";

const CartBack = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        <div className={styles.cartTittle}>
          <h2>Carrito</h2>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.cartBox}>
          {cartItems.length === 0 ? (
            <div className={styles.cartBox}>Tu carrito está vacío</div>
          ) : (
            <div>
              {cartItems.map((item, i) => (
                <ItemCart key={i} item={item} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="contained" color="warning" onClick={clearCart}>
            limpiar
          </Button>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.total}>
          <h2>Total ${total},00</h2>
        </div>
        <div className={styles.hr}></div>
      </div>
    </div>
  );
};

export default CartBack;
