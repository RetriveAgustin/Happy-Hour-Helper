import {
  GET_CATEGORIES,
  GET_BRANDS,
  GET_OFFERS,
  GET_SUB_CATEGORIES,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCT_ID,
  ADD_TO_CART,
  FILTER_BY_SUBCAT,
} from "./../actions/actions";

const initialState = {
  categories: [],
  subCategories: [],
  brands: [],
  products: [],
  offers: [],
  productsByCategory: [],
  detail: [],
  cart: [],
  filteredProducts: [],
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
    case GET_PRODUCT_ID:
      return { ...state, detail: action.payload};
    case GET_PRODUCTS_BY_CATEGORY:
      return { ...state, productsByCategory: action.payload };
    case ADD_TO_CART: 
      return { 
        ...state, 
        cart: [...state.cart, action.payload[0]]
      }
    case FILTER_BY_SUBCAT:
      const products = state.products;
      const filter = products?.filter(prd => prd.Sub_categories && prd.Sub_categories[0].name == action.payload);
      return {
        ...state,
        filteredProducts: [...state.filteredProducts, ...filter]
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

//(prd => prd.sub_Categories && prd.sub_Categories[0].name == action.payload);