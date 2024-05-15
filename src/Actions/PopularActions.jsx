import axios from "../utils/Axios";
import { getNews } from "../Reducers/PopularSlice";


export const asyncGetNews = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/everything?q=india&sortBy=popularity`
    );
    const news = data.articles;
    dispatch(getNews(news));
    console.log(news);
    // console.log(`This is the data: ${JSON.stringify(news)}`);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
