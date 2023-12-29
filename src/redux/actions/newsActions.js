import axios from "axios";
import newsConstants from "redux/constants/newsConstants";

export const getNewsArticles = (page) => async (dispatch) => {
  try {
    dispatch({ type: newsConstants.GET_NEWS_REQUEST });

    // Check if articles are already in localStorage
/*     const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      dispatch({
        type: newsConstants.GET_NEWS_SUCCESS,
        payload: JSON.parse(storedArticles),
      });
      return;
    } */

    let { data } = await axios.get(
      `${process.env.REACT_APP_GNEWS_BASE_URL}category=general&lang=en&page=${page}&apikey=${process.env.REACT_APP_GNEWS_API_KEY}`
    );

    data = data.articles;

    dispatch({
      type: newsConstants.GET_NEWS_SUCCESS,
      payload: data,
    });

    localStorage.setItem("articles", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: newsConstants.GET_NEWS_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors[0]
          : error.message,
    });
  }
};
