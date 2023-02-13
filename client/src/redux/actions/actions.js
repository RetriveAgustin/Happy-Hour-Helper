import axios from "axios";

// ------ Usuarios ----------------
export const GET_USERS = "GET_USERS";
export const GET_ALL_ADDRESSES = "GET_ALL_ADDRESSES";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const GET_LOGGED_USER = "GET_LOGGED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// ------ Productos ---------------
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const GET_PRODUCTS_BY_SUBCATEGORY = "GET_PRODUCTS_BY_SUBCATEGORY";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"

// ------ Carrito -----------------
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// ------ Categorias --------------
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUB_CATEGORIES = "GET_SUB_CATEGORIES";
export const GET_BRANDS = "GET_BRANDS";
export const GET_FILTER_BY_BRAND = "GET_FILTER_BY_BRAND";
export const REMOVE_FROM_SUBCAT = "REMOVE_FROM_SUBCAT";
export const FILTER_BY_SUBCAT = "FILTER_BY_SUBCAT";
export const FILTER_PRICE = "FILTER_PRICE";
export const GET_OFFERS = "GET_OFFERS";

// ------- adress --------------------
export const GET_ADDRESSES = "GET_ADDRESSES";
export const CREATE_ADDRESS = "CREATE_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";

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

export const removeFromCart = (payload) => {
  return function (dispatch) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: payload,
    });
  };
};


export const getLoggedUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/getUserById?id=${id}`)
      .then((data) => {
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
        `${process.env.REACT_APP_API_URL}/users/loginUser`,
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
        `${process.env.REACT_APP_API_URL}/users/registerUser`,
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

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getAllCategories = () => {
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
    fetch(`${process.env.REACT_APP_API_URL}/products/getProductId/${payload}`)
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

export const deleteProduct = (payload) => {
  return async function (dispatch) {
    await axios
      .delete(
        `${process.env.REACT_APP_API_URL}/products/deleteProduct/${payload}`
      )
      .then((r) => {
        dispatch({ type: DELETE_PRODUCT, payload: r });
      });
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
      `${process.env.REACT_APP_API_URL}/products/postProduct`,
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
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const updateProduct = (payload) => {
  console.log(payload)
  return async () => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/products/putProduct`, {
      id: payload.id,
      properties: {
        name: payload.name,
        capacity: payload.capacity,
        img: payload.img,
        price: payload.price,
        stock: payload.stock
      }
    })
  return res
}
}

//SECCION ADDRESS!!!!!!!!!!!!!!!!!

export const getAddress = () => {
  return async (dispatch) => {
    const res = await axios.get(`https://happy-hour-helper-production.up.railway.app/address/getAddress`);
    const data = res.data;
    return dispatch({
      type: GET_ADDRESSES,
      payload: data,
    });
  };
}

export const filterByPrice = (payload) => {
  return {
    type: FILTER_PRICE,
    payload: payload,
  };
};

export const createAddress = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://happy-hour-helper-production.up.railway.app/address/postAddress`,
      data
    );
    dispatch({ type: "CREATE_ADDRESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};



export const getAllAddresses = (id) => {
  fetch(`${process.env.REACT_APP_API_URL}/address/getAddress`)
    .then((r) => r.json())
    .then((r) => {
      console.log('addresses son', r)
      const data = r.filter((e) => e.user_id === id);
      console.log('addresses filtrados son', data)
      return data;
    })
    .then(data => data)
};



export const updateAddress = (id, properties) => async (dispatch) => {
  try {
    await axios.put(`https://happy-hour-helper-production.up.railway.app/address/putAddress`, 
      { id, properties }
    );
    dispatch({ type: UPDATE_ADDRESS, payload: {id, properties} });
  } catch (error) {
    console.log(error)
  }
}


export const deleteAddress = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://happy-hour-helper-production.up.railway.app/address/deleteAddress`,
      { data: { id } }
    );
    dispatch({
      type: DELETE_ADDRESS,
      payload: id,
    });
  } catch (error) {
    console.log(error)
  }
  }
