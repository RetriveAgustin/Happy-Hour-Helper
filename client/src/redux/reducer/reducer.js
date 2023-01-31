import {
  GET_USERS,
  GET_CATEGORIES,
  GET_BRANDS,
  GET_OFFERS,
  GET_SUB_CATEGORIES,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCT_ID,
  ADD_TO_CART,
  FILTER_PRICE,
  REMOVE_FROM_CART,
  GET_USER_LOGGED,
} from "./../actions/actions";

const initialState = {
  categories: [],
  subCategories: [],
  brands: [],
  products: [],
  prodsCopy: [],
  offers: [],
  productsByCategory: [],
  detail: [],
  cart: [],
  users: [],
  userLoged: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOGGED:
      return { ...state, userLoged: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case GET_BRANDS:
      return { ...state, brands: action.payload };
    case GET_OFFERS:
      return { ...state, offers: action.payload };
    case GET_SUB_CATEGORIES:
      return { ...state, subCategories: action.payload };
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload, prodsCopy: action.payload };
    case GET_PRODUCT_ID:
      return { ...state, detail: action.payload };
    case GET_PRODUCTS_BY_CATEGORY:
      return { ...state, productsByCategory: action.payload };
    case FILTER_PRICE:
      const products = state.prodsCopy;
      return {
        ...state,
        products: products?.filter(
          (prd) =>
            prd.price &&
            prd.price >= action.payload[0] &&
            prd.price <= action.payload[1]
        ),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload[0]],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((e) => e.name !== action.payload)],
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
