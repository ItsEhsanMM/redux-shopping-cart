const initialState = {
   loading: false,
   product: [],
   error: "",
};

const productReducer = (state = initialState, action) => {
   switch (action.type) {
      case "FETCH_PRODUCTS_REQUEST":
         return {
            ...state,
            loading: true,
         };
      case "FETCH_PRODUCTS_SUCCESS":
         return {
            loading: false,
            product: action.payload,
         };
      case "FETCH_PRODUCTS_FAILURE":
         return {
            loading: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default productReducer;