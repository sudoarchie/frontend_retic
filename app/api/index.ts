import axios from "axios";
// import { getCookie } from "cookies-next"
// import { toast } from "react-toastify"

// export const baseURL = "http://localhost:3000/api/";
export const baseURL = "https://hackathon-zrgr.onrender.com/api/v1";

const api = axios.create({
  baseURL,
  headers: {
    // token: token ? token : getCookie("token"),
    "Content-Type": "application/json",
  },
});

export const Imageapi = axios.create({
  baseURL,
  headers: {
    // token: token ? token : getCookie("token"),
    "Content-Type": "multipart/formdata",
  },
});

export default api;
