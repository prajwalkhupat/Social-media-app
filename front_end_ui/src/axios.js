import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:8800/back_end_api/",
  withCredentials: true,
});
