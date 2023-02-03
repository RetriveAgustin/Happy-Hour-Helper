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
export const GET_USERS = "GET_USERS";
export const GET_ALL_ADDRESSES = "GET_ALL_ADDRESSES";
export const GET_LOGGED_USER = "GET_LOGGED_USER";
export const REMOVE_FROM_SUBCAT = "REMOVE_FROM_SUBCAT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const FILTER_BY_SUBCAT = "FILTER_BY_SUBCAT";
export const FILTER_PRICE = "FILTER_PRICE";
export const ADD_TO_CART = "ADD_TO_CART";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export const getUsers = () => {
  return function (dispatch) {
    // fetch(`${process.env.REACT_APP_API_URL}/users/getUser`)
    fetch("https://happy-hour-helper-production.up.railway.app/users/getUser")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_USERS,
          payload: data,
        });
      });
  };
};

export const getLoggedUser = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/users/getUserById?id=${id}`)
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_LOGGED_USER,
          payload: data.data,
        });
      });
  };
};

export const loginUser = (login, payload) => {
  // payload es un obj con mail y password
  return async function (dispatch) {
    try {
      const result = await login(payload.mail, payload.password); // acá se guardan las USER CREDENTIALS si el login es exitoso
      const data = await axios.post(
        "https://happy-hour-helper-production.up.railway.app/users/loginUser",
        { mail: payload.mail, password: payload.password }
      );
      localStorage.setItem("User_ID", result.user.uid); // por ahora sólo guardamos el user_id en localStorage
      dispatch({
        type: LOGIN_USER,
        payload: result.user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerUser = (register, payload) => {
  return async function (dispatch) {
    try {
      const result = await register(payload.email, payload.password);
      const post = await axios.post(
        "https://happy-hour-helper-production.up.railway.app/users/registerUser",
        {
          id: result.user.uid,
          name: payload.name,
          lastname: payload.lastName,
          mail: payload.email,
          password: payload.password,
          created_in_google: false,
          is_admin: false,
        }
      );
      console.log(post);
      dispatch({
        type: REGISTER_USER,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCategories = () => {
  console.log(process.env.REACT_APP_API_URL);
  console.log(`${process.env.REACT_APP_API_URL}/category/getCategory`);
  return function (dispatch) {
    fetch(
      "https://happy-hour-helper-production.up.railway.app/category/getCategory"
    )
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
    fetch(
      "https://happy-hour-helper-production.up.railway.app/sub-category/getSubCategory"
    )
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
    fetch(
      "https://happy-hour-helper-production.up.railway.app/products/getProduct"
    )
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
    // fetch(`${process.env.REACT_APP_API_URL}/products/getProductId/${payload}`)
    fetch(
      `https://happy-hour-helper-production.up.railway.app/products/getProductId/${payload}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCT_ID,
          payload: data,
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
  return {
    type: ADD_TO_CART,
    payload: payload,
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
