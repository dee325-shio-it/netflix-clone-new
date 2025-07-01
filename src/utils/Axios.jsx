// axios.jsx
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // TMDB base URL
});

export default instance;
