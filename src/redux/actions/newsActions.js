import axios from "axios";
import newsConstants from "redux/constants/newsConstants";

export const getNewsArticles = () => async (dispatch, getState) => {
  try {
    dispatch({ type: newsConstants.GET_NEWS_REQUEST });

    // Check if articles are already in localStorage
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      dispatch({
        type: newsConstants.GET_NEWS_SUCCESS,
        payload: JSON.parse(storedArticles),
      });
      return;
    }

    let { data } = await axios.get(
      "https://gnews.io/api/v4/top-headlines?category=general&lang=en&page=3&apikey=a86876043fa324440c81ef5b2c797798"
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
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
