import {
  GET_CATEGORIES,
  GET_BRANDS,
  GET_OFFERS,
  GET_SUB_CATEGORIES,
  GET_ALL_PRODUCTS,
  GET_ADDRESSES,
  GET_ADDRESS,
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  GET_PAYMENT,
  GET_PAYMENT_NAME,
  POST_PAYMENT,
  PUT_PAYMENT,
  DELETE_PAYMENT,
  RESTORE_PAYMENT,
} from "./../actions/actions";

const initialState = {
  categories: [],
  subCategories: [],
  brands: [],
  products: [],
  offers: [],
  addresses: [],
  address: {},
  paymentMethods: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case GET_BRANDS:
      return { ...state, brands: action.payload };
    case GET_OFFERS:
      return { ...state, offers: action.payload };
    case GET_SUB_CATEGORIES:
      return { ...state, subCategories: action.payload };
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    case GET_ADDRESSES:
      return { ...state, addresses: action.payload };
    case GET_ADDRESS:
      return { ...state, address: action.payload };
    case CREATE_ADDRESS:
      return { ...state, addresses: [...state.addresses, action.payload] };
    case UPDATE_ADDRESS:
      const updatedAddresses = state.addresses.map((address) => {
        if (address.id === action.payload.id) {
          return action.payload;
        }
        return address;
      });
      return { ...state, addresses: updatedAddresses };
    case DELETE_ADDRESS:
      const filteredAddresses = state.addresses.filter(
        (address) => address.id !== action.payload
      );
      return { ...state, addresses: filteredAddresses };
    case GET_PAYMENT:
      return { ...state, paymentMethods: action.payload };
    case GET_PAYMENT_NAME:
      return { ...state, paymentMethods: action.payload };
    case POST_PAYMENT:
      return {
        ...state,
        paymentMethods: [...state.paymentMethods, action.payload],
      };
      case PUT_PAYMENT:
        return {
          ...state,
          paymentMethods: state.paymentMethods.map((payment) => {
            if (payment.id === action.payload.id) {
              return { ...payment, ...action.payload.properties }
            }
            return payment;
          })
        }
    case DELETE_PAYMENT:
      return {
        ...state,
        paymentMethods: state.paymentMethods.filter(payment => payment.id !== action.payload)
    }
    case RESTORE_PAYMENT:
      return {
        ...state,
        paymentMethods: [...state.paymentMethods, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
