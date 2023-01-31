import axios from "axios";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUB_CATEGORIES = "GET_SUB_CATEGORIES";
export const GET_BRANDS = "GET_BRANDS";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const GET_OFFERS = "GET_OFFERS";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const GET_PRODUCTS_BY_SUBCATEGORY = "GET_PRODUCTS_BY_SUBCATEGORY";
export const GET_FILTER_BY_BRAND = "GET_FILTER_BY_BRAND";
export const ADD_TO_CART = "ADD_TO_CART";
export const FILTER_BY_SUBCAT = "FILTER_BY_SUBCAT";
export const REMOVE_FROM_SUBCAT = "REMOVE_FROM_SUBCAT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_ALL_ADDRESSES = "GET_ALL_ADDRESSES";
export const FILTER_PRICE = "FILTER_PRICE";
export const GET_USERS = "GET_USERS";
export const GET_USER_LOGGED = "GET_USER_BY_EMAIL";

console.log(`${process.env.REACT_APP_API_URL}/users/getUser`);

// export const getUserLogged = (payload) => {
//   return function (dispatch){
//     fetch(`${process.env.REACT_APP_API_URL}/users/getUser`)
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch({
//         type: GET_USER_LOGGED,
//         payload: data,
//       })
//     })
//   }
// };

export const getUsers = () => {
  return function (dispatch) {
    fetch(`${process.env.REACT_APP_API_URL}/users/getUser`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_USERS,
          payload: data,
        });
      });
  };
};

export const getAllCategories = () => {
  return function (dispatch) {
    fetch(`${process.env.REACT_APP_API_URL}/users/getUser`)
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
    fetch(`${process.env.REACT_APP_API_URL}/sub-category/getSubCategory`)
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
    fetch(`${process.env.REACT_APP_API_URL}/products/getProduct`)
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
    fetch(`${process.env.REACT_APP_API_URL}/products/getProductId/${payload}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCT_ID,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllBrands = () => {
  return function (dispatch) {
    fetch(`${process.env.REACT_APP_API_URL}/brand/getBrand`)
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
    fetch(`${process.env.REACT_APP_API_URL}/offer/getOffer`)
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
    const post = await axios.post(
      `${process.env.REACT_APP_API_URL}/category`,
      payload
    );
    return post;
  };
};

export const createProduct = (payload) => {
  return async function () {
    const post = await axios.post(
      `${process.env.REACT_APP_API_URL}/products`,
      payload
    );
    return post;
  };
};

export const createSubCategory = (payload) => {
  return async function () {
    const post = await axios.post(
      `${process.env.REACT_APP_API_URL}/sub-category`,
      payload
    );
    return post;
  };
};

export const createOffer = (payload) => {
  return async function () {
    const post = await axios.post(
      `${process.env.REACT_APP_API_URL}/offer`,
      payload
    );
    return post;
  };
};

export const createBrand = (payload) => {
  return async function () {
    const post = await axios.post(
      `${process.env.REACT_APP_API_URL}/brand`,
      payload
    );
    return post;
  };
};

export const addToCart = (payload) => {
  return function (dispatch) {
    fetch(`${process.env.REACT_APP_API_URL}/products/getProductId/${payload}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ADD_TO_CART,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const removeFromCart = (payload) => {
  return function (dispatch) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: payload,
    });
  };
};
export const filterByPrice = (payload) => {
  return {
    type: FILTER_PRICE,
    payload: payload,
  };
};
// export const getAllProductsByCategory = (category) => {
//   return async function (dispatch) {
//     const { data } = await axios(`http://localhost:3001/products/filterByCategory?category=${category}`)
//     dispatch({
//       type: GET_PRODUCTS_BY_CATEGORY,
//       payload: data,
//     });
//   };
// };

export const getAllAddresses = (userCredentials) => {
  fetch(`${process.env.REACT_APP_API_URL}/address/getAddress`)
    .then((r) => r.json())
    .then((r) => {
      const data = r.filter((e) => e.user_id === userCredentials.uid);
      return data;
    });
};

export const getAllPayments = (userCredentials) => {
  fetch(`${process.env.REACT_APP_API_URL}/payment-methods/getPayment`)
    .then((r) => r.json())
    .then((r) => {
      const data = r.filter((e) => e.user_id === userCredentials.uid);
      return data;
    });
};
