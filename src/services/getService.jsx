import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/",
});

//creating a get request function
export const getNews = () => {
  return api.get(
    "v2/top-headlines?category=health&apiKey=e0355f2fe7f34c2e9627a46afa8171ad"
  );
};
