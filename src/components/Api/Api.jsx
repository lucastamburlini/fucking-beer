import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import styles from "./styles.module.scss";

export const BASE_URL = "http://localhost:8000";

const Api = () => {
  const [refetch, setRefetch] = useState("false");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${BASE_URL}/data/`,
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
        setError("Ocurrió un error al solicitar información");
      }
    };
    fetchData();
  }, [refetch]);

  return (
    <>
      <div id="products">
        <div className={styles.containerProducts}>
          {data.map((product, i) => (
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
    </>
  );
};

export default Api;
