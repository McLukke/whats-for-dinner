import { QUERY_RECIPES } from '../actions/home';

const homeReducer = (state = {}, { type, isLoading, error, payload }) => {
  switch (type) {
    case QUERY_RECIPES:
      return {
        ...state,
        isLoading,
        error,
        payload,
        recipes: payload && payload.hits ? payload.hits : []
      };
  
    default:
      return state;
  };
};

export default homeReducer;
