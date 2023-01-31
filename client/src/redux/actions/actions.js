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
export const ADD_TO_CART = 'ADD_TO_CART';
export const FILTER_BY_SUBCAT = 'FILTER_BY_SUBCAT';
export const REMOVE_FROM_SUBCAT = 'REMOVE_FROM_SUBCAT';

export const getAllCategories = () => {
  return function (dispatch) {
    // fetch(`${process.env.REACT_APP_API_URL}/category/getCategory`)
    fetch("https://happy-hour-helper-production.up.railway.app/category/getCategory")
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
    // fetch(`${process.env.REACT_APP_API_URL}/sub-category/getSubCategory`)
    fetch("https://happy-hour-helper-production.up.railway.app/sub-category/getSubCategory")
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
    // fetch(`${process.env.REACT_APP_API_URL}/products/getProduct`)
    fetch("https://happy-hour-helper-production.up.railway.app/products/getProduct")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
    // fetch(`${process.env.REACT_APP_API_URL}/products/getProductId/${payload}`)
    fetch(`https://happy-hour-helper-production.up.railway.app/products/getProductId/${payload}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCT_ID,
          payload: data
        });
      })
      .catch((err) => console.log(err, "es un error"));
  };
};

export const getAllBrands = () => {
  return function (dispatch) {
    // fetch(`${process.env.REACT_APP_API_URL}/brand/getBrand`)
    fetch("https://happy-hour-helper-production.up.railway.app/brand/getBrand")
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
    // fetch(`${process.env.REACT_APP_API_URL}/offer/getOffer`)
    fetch("https://happy-hour-helper-production.up.railway.app/offer/getOffer")
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
      // `${process.env.REACT_APP_API_URL}/category`,
      "https://happy-hour-helper-production.up.railway.app/category",
      payload
    );
    return post;
  };
};

export const createProduct = (payload) => {
  return async function () {
    const post = await axios.post(
      // `${process.env.REACT_APP_API_URL}/products`,
      "https://happy-hour-helper-production.up.railway.app/products",
      payload
    );
    return post;
  };
};

export const createSubCategory = (payload) => {
  return async function () {
    const post = await axios.post(
      // `${process.env.REACT_APP_API_URL}/sub-category`,
      "https://happy-hour-helper-production.up.railway.app/sub-category",
      payload
    );
    return post;
  };
};

export const createOffer = (payload) => {
  return async function () {
    const post = await axios.post(
      // `${process.env.REACT_APP_API_URL}/offer`,
      "https://happy-hour-helper-production.up.railway.app/offer",
      payload
    );
    return post;
  };
};

export const createBrand = (payload) => {
  return async function () {
    const post = await axios.post(
      // `${process.env.REACT_APP_API_URL}/brand`,
      "https://happy-hour-helper-production.up.railway.app/brand",
      payload
    );
    return post;
  };
};

export const addToCart = (payload) => {
  return function (dispatch) {
    // fetch(`${process.env.REACT_APP_API_URL}/products/getProductId/${payload}`)
    fetch(`https://happy-hour-helper-production.up.railway.app/products/getProductId/${payload}`)
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
