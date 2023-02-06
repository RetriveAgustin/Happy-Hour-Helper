import {
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
  GET_ADDRESSES,
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
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
  addresses: [],
  paymentMethods: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
/*     case  DELETE_PRODUCT:
      return {...state, products.filter(ac)} */
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
    case GET_ADDRESSES:
      return { ...state, addresses: action.payload };
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
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((e) => e.name !== action.payload)],
      };
    case CREATE_ADDRESS:
      return { ...state, addresses: [...state.addresses, action.payload] };
    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((address) => {
          if (address.id === action.payload.id) {
            return { ...address, ...action.payload };
          }
          return address;
        }),
      };

    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
