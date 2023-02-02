import axios from "axios";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUB_CATEGORIES = "GET_SUB_CATEGORIES";
export const GET_BRANDS = "GET_BRANDS";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
//Seccion Address
export const GET_ADDRESSES = "GET_ADDRESSES";
export const GET_ADDRESS = "GET_ADDRESS";
export const CREATE_ADDRESS = "CREATE_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";

//Seccion Payment
export const GET_PAYMENT = "GET_PAYMENT";
export const POST_PAYMENT = "POST_PAYMENT";
export const PUT_PAYMENT = "PUT_PAYMENT";
export const DELETE_PAYMENT = "DELETE_PAYMENT";
export const RESTORE_PAYMENT = "RESTORE_PAYMENT";

export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const GET_OFFERS = "GET_OFFERS";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const GET_PRODUCTS_BY_SUBCATEGORY = "GET_PRODUCTS_BY_SUBCATEGORY";
export const GET_FILTER_BY_BRAND = "GET_FILTER_BY_BRAND";
export const ADD_TO_CART = "ADD_TO_CART";

export const getAllCategories = () => {
  console.log(process.env.REACT_APP_API_URL);
console.log(`${process.env.REACT_APP_API_URL}/category/getCategory`);
  return function (dispatch) {
    fetch(`${process.env.REACT_APP_API_URL}/category/getCategory`)
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
    fetch(`${process.env.REACT_APP_API_URL}/getProductId/${payload}`)
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
    fetch(`${process.env.REACT_APP_API_URL}/getOffer`)
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

//SECCION ADDRESS!!!!!!!!!!!!!!!!!

export const getAddress = () => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/address/getAddress`);
    const data = res.data;
    return dispatch({
      type: GET_ADDRESSES,
      payload: data,
    });
  };
};



export const createAddress = (data) => async (dispatch) => {
 try {
  const response = await axios.post(`http://localhost:3001/address/postAddress`, data);
  dispatch({type: CREATE_ADDRESS, payload: response.data})
 } catch (error) {
  console.log(error)
 }
};

// export const postPayment = (data) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:3001/payment-methods/postPayment",
//       data
//     );
//     dispatch({ type: "POST_PAYMENT", payload: response.data });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateAddress = (id) => {
  return async (dispatch) => {
    const res = await axios.put(
      `http://localhost:3001/address/putAddress`, {data: {id}}
    );
    return dispatch({ type: UPDATE_ADDRESS, payload: res.data });
  };
};

export const deleteAddress = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(
      `http://localhost:3001/address/deleteAddress`, {data: {id}}
    );
    return dispatch({
      type: DELETE_ADDRESS,
      payload: res.data,
    });
  };
};

//SECCION PAYMENT!!!!!!!!!!!!!!!!

export const getPaymentMethods = () => (dispatch) => {
  axios
    .get("http://localhost:3001/payment-methods/getPayment")
    .then((response) => {
      dispatch({ type: "GET_PAYMENT", payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};



export const postPayment = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/payment-methods/postPayment",
      data
    );
    dispatch({ type: "POST_PAYMENT", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const putPayment = (id, properties) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3001/payment-methods/putPayment`, { data: {id, properties} });
    dispatch({ type: 'PUT_PAYMENT', payload: response.data});
  } catch (error) {
    console.log(error);
  }
}



export const deletePayment = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/payment-methods/deletePayment`, {data: {id}});
    dispatch({ type: 'DELETE_PAYMENT', payload: id });
  } catch (error) {
    console.log(error)
  }
};

export const restorePayment = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/payment-methods/restorePayment`, {data: {id}}
    );
    dispatch({ type: "RESTORE_PAYMENT", payload: response.data });
  } catch (error) {
    console.log(error);
  }
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
