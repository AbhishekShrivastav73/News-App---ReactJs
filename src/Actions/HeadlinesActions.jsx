import axios from "../utils/Axios";
import { getNews } from "../Reducers/TopHeadline";

export const asyncGetHeadlines = (country,category) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/top-headlines?country=${country}&category=${category}`
    );
    const news = data.articles;
    dispatch(getNews(news));
    console.log(news);
    // console.log(`This is the data: ${JSON.stringify(news)}`);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
