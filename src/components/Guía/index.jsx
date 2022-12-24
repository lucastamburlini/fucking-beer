import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./styles.module.scss";
import ItemCart from "../ItemCart";
import { Badge } from "@mui/material";

const CartGuia = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);
  const { cartItems, clearCart } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <div
        onClick={() => setCartOpen(!cartOpen)}
        className={styles.buttonCartContainer}
      >
        <div className={styles.buttonCart}>
          {!cartOpen ? (
            <Badge badgeContent={productsLength} color="warning">
              <ShoppingCartIcon />
            </Badge>
          ) : (
            <ClearIcon fontSize="medium" />
          )}
        </div>

        {/* {!cartOpen ? (
            <ShoppingCartIcon fontSize="medium" />
          ) : (
            <ClearIcon fontSize="medium" />
          )}
        </div>
        {!cartOpen && (
          <div className={styles.productsNumber}>{productsLength}</div>
        )} */}
      </div>
      {cartItems && cartOpen && (
        <div className={styles.cart}>
          <h2>Tu carrito</h2>
          {cartItems.length === 0 ? (
            <p className={styles.cartEmpty}>Tu carrito está vacío</p>
          ) : (
            <div className={styles.productsContainer}>
              {cartItems.map((item, i) => (
                <ItemCart key={i} item={item} />
              ))}
            </div>
          )}

          <h2 className={styles.total}>Total: ${total},00</h2>
          <button onClick={clearCart}>limpiar</button>
        </div>
      )}
    </div>
  );
};

export default CartGuia;
