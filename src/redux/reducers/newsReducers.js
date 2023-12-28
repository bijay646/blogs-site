import newsConstants from "redux/constants/newsConstants";

export const getNewsReducer = (
  state = { articles: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case newsConstants.GET_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case newsConstants.GET_NEWS_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case newsConstants.GET_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
