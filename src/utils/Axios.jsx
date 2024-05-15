import axios from "axios";

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        accept: "application/json",
        Authorization:
          "Bearer f9f34d6d58734be5a687f23df0fbdb68",
      },
})

export default instance;