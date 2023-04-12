import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "https://api.thomso.in/apiV1/assignment",
});

export default API;