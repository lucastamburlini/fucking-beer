import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import styles from "./styles.module.scss";

export const BASE_URL = "http://localhost:8000";

const Api = () => {
  const [search, setSearch] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
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
        setError("Ocurrió un error al solicitar información");
      }
    };
    fetchData();
  }, []);

  /*  useEffect(() => {
    if (query.length > 0) {
      axios
        .get(`http://localhost:8000/data/`)
        .then((res) => {
          setSearch(true);
          let dataFiltered = res.data.filter((data) =>
            data.name.toLowerCase().includes(query.toLowerCase())
          );
          console.log(res.data);
          setData(dataFiltered);
        })
        .catch((err) => console.error(err));
    }
    axios
      .get(`http://localhost:8000/data/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [search]); */

  return (
    <>
      <div id="products" >
        <div className={styles.container}>
          <div className={styles.containerTittle}>
            <h2>Nuestros productos</h2>
          </div>
          <div className={styles.containerFilter}>
            <input
              type="text"
              placeholder="Busca tu producto rápido..."
              className={styles.search}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={styles.containerProducts}>
            {data
              .filter((data) =>
                data.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((product, i) => (
                <div key={i} className={styles.products}>
                  <img src={product.img} alt={product.name} />
                  <div>
                    <div className={styles.productsName}>
                      <p>{product.name}</p>
                    </div>
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
    </>
  );
};

export default Api;
