import axios from "axios";

const isProduction = process.env.NODE_ENV !== "development";

export const apiClient = axios.create({
  baseURL: isProduction
    ? "https://taskmanager-ochre.vercel.app/api/"
    : "http://localhost:3000/api/",
});
