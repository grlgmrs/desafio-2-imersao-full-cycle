import axios from "axios";

const http = axios.create({
  baseURL: "http://api-routes-service:3000",
});

export default http;
