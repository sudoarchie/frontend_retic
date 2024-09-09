import axios from "axios";
// import { getCookie } from "cookies-next"
// import { toast } from "react-toastify"

export const baseURL = "http://localhost:3001/api/v1";
// export const baseURL = "https://hackathon-zrgr.onrender.com/api/v1";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization-User-Token": `Bearer ${
      localStorage.getItem("userToken") || ""
    }`,
    "Authorization-Event-Organiser-Token": `Bearer ${
      localStorage.getItem("eventOrganiserToken") || ""
    }`,
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
