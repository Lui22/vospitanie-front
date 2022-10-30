import axios from "axios";

export default axios.create({
  baseURL: "https://api.ttradio.tech/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("bearer")}`,
  },
});
