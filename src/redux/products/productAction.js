import axios from "axios";

const fetchProductsRequest = () => {
   return {
      type: "FETCH_PRODUCTS_REQUEST",
   };
};

const fetchProductsSucces = (products) => {
   return {
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: products,
   };
};

const fetchProductsFailure = (error) => {
   return {
      type: "FETCH_PRODUCTS_FAILURE",
      payload: error,
   };
};

export const fetchData = () => {
   return (dispatch) => {
      dispatch(fetchProductsRequest());
      axios
         .get("https://fakestoreapi.com/products")
         .then((response) => dispatch(fetchProductsSucces(response.data)))
         .catch((error) => dispatch(fetchProductsFailure(error.message)));
   };
};
