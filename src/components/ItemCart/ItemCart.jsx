import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import styles from "./styles.module.scss";

const ItemCart = ({ item }) => {
  const { deleteItemToCart, addItemToCart } = useContext(CartContext);
  return (
    <div className={styles.dataContainer}>
      <div>
        <img src={item.img} alt={item.img} />
      </div>

      <div className={styles.dataName}>
        <div>{item.name} </div>
      </div>

      <div className={styles.dataAmountContainer}>
        <div>
          <button onClick={() => deleteItemToCart(item)}>-</button>
        </div>
        <div>
          <p>{item.amount}</p>
        </div>
        <div>
          <button onClick={() => addItemToCart(item)}>+</button>
        </div>
      </div>

      <div className={styles.dataPrice}>
        <p>Total </p><p>${item.amount * item.price},00</p>
      </div>
    </div>
  );
};

export default ItemCart;
