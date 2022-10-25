import axios from "axios";

export default axios.create({
  baseURL: "http://vospitanie-back/public/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
