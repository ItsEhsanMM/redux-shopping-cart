import React, { useEffect } from "react";

// Components
import Product from "./shared/Product";

// gif
import spinner from "../assets/gif/spinner.gif";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/products/productAction";

// Style
import styles from "./Store.module.css";

const Store = () => {
   const productData = useSelector((state) => state.productState);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!productData.product.length) dispatch(fetchData());
   }, []);

   return (
      <div className={styles.container}>
         {productData.loading ? (
            <div style={{ width: "100%", textAlign: "center" }}>
               <img src={spinner} alt="loading" />
            </div>
         ) : productData.error ? (
            <h3 style={{ width: "100%", textAlign: "center", fontSize: "4rem", color: "red" }}>{productData.error}</h3>
         ) : (
            productData.product.map((product) => <Product key={product.id} productData={product} />)
         )}
      </div>
   );
};

export default Store;
