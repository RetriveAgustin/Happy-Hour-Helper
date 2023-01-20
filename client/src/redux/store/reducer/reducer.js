import { GET_CATEGORIES, GET_BRANDS, GET_OFFERS, GET_SUB_CATEGORIES, GET_ALL_PRODUCTS} from "./actions";

const initialState = {
    categories: [],
    subCategories: [],
    brands: [],
    products: [],
    offers: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
        return {...state, categories: action.payload}
    case GET_BRANDS: 
        return {...state, brands: action.payload}
    case GET_OFFERS:
        return {...state, offers: action.payload}
    case GET_SUB_CATEGORIES:
        return {...state, subCategories: action.payload}
    case GET_ALL_PRODUCTS:
        return {...state, products: action.payload}
    default:
        return {
            ...state,
        };
  }
};

export default rootReducer;