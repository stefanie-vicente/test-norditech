import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.API_BASE_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
