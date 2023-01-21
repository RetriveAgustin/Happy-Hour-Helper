import axios from "axios";
export const GET_CATEGORIES = "GET_CATEGORIES"
export const GET_SUB_CATEGORIES = "GET_SUB_CATEGORIES"
export const GET_BRANDS = "GET_BRANDS"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_OFFERS = "GET_OFFERS"

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
    fetch("http://localhost:3001/product/getProduct")
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

export const getAllBrands = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/brand/getBrand")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_BRANDS ,
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
    const post = await axios.post(
      "http://localhost:3001/category/postCategory",
      payload
    );
    return post;
  };
};

export const createProduct = (payload) => {
  console.log(payload)
  return async function () {
    const post = await axios.post(
      "http://localhost:3001/product/postProduct",
      payload
    );
    return post;
  };
};

export const createSubCategory = (payload) => {
  return async function () {
    const post = await axios.post(
      "http://localhost:3001/sub-category/postProducts",
      payload
    );
    return post;
  };
};

export const createOffer = (payload) => {
  return async function () {
    const post = await axios.post(
      "http://localhost:3001/offer/postOffer",
      payload
    );
    return post;
  };
};

export const createBrand = (payload) => {
  return async function () {
    const post = await axios.post(
      "http://localhost:3001/brand/postBrand",
      payload
    );
    return post;
  };
};