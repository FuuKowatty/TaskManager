import axios from "axios";

const isProduction = process.env.NODE_ENV !== "development";

export const apiClient = axios.create({
  baseURL: isProduction
    ? "https://task-manager-gamma-seven.vercel.app/"
    : "http://localhost:3000/api/",
});
