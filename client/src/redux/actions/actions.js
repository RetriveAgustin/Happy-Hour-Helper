import axios from "axios";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUB_CATEGORIES = "GET_SUB_CATEGORIES";
export const GET_BRANDS = "GET_BRANDS";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID"
export const GET_OFFERS = "GET_OFFERS";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const GET_PRODUCTS_BY_SUBCATEGORY = "GET_PRODUCTS_BY_SUBCATEGORY";
export const GET_FILTER_BY_BRAND = "GET_FILTER_BY_BRAND";
export const ADD_TO_CART = 'ADD_TO_CART';

export const getAllCategories = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/category/getCategory")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllSubCategories = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/sub-category/getSubCategory")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_SUB_CATEGORIES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllProducts = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/products/getProduct")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getProductId = (payload) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/products/getProductId/${payload}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCT_ID,
          payload: data
        });
      })
      .catch((err) => console.log(err));  
  };
};

export const getAllBrands = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/brand/getBrand")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_BRANDS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllOffers = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/offer/getOffer")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_OFFERS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createCategory = (payload) => {
  return async function () {
    const post = await axios.post("http://localhost:3001/category", payload);
    return post;
  };
};

export const createProduct = (payload) => {
  return async function () {
    const post = await axios.post("http://localhost:3001/products", payload);
    return post;
  };
};

export const createSubCategory = (payload) => {
  return async function () {
    const post = await axios.post(
      "http://localhost:3001/sub-category",
      payload
    );
    return post;
  };
};

export const createOffer = (payload) => {
  return async function () {
    const post = await axios.post("http://localhost:3001/offer", payload);
    return post;
  };
};

export const createBrand = (payload) => {
  return async function () {
    const post = await axios.post("http://localhost:3001/brand", payload);
    return post;
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload
  }
}

// export const getAllProductsByCategory = (category) => {
//   return async function (dispatch) {
//     const { data } = await axios(`http://localhost:3001/products/filterByCategory?category=${category}`)
//     dispatch({
//       type: GET_PRODUCTS_BY_CATEGORY,
//       payload: data,
//     });
//   };
// };

// export const getProductsBySubCategory = () => {
//   return async function (dispatch) {
//     const { data } = await axios (`http://localhost:3001/products/filterByBrand`)
//     dispatch({
//       type: GET_PRODUCTS_BY_SUBCATEGORY,
//       payload : data,
//     })
//   };
// };

// export const getFilterByBrand = () => {
//   return async function(dispatch) {
//     const { data } = await axios (`http://localhost:3001/products/filterByBrand`)
//     dispatch({
//       type: GET_FILTER_BY_BRAND,
//       payload: data
//     })
//   }
// };
