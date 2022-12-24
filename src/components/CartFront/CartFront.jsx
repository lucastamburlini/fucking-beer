import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const CartFront = () => {
  const { cartItems } = useContext(CartContext);
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  return (
    <Badge badgeContent={productsLength} color="warning">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default CartFront;
