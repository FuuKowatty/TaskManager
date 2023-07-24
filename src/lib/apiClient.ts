import axios from "axios";

const isProduction = process.env.NODE_ENV !== "development";

export const apiClient = axios.create({
  baseURL: isProduction
    ? "taskmanager-bapmj788y-fuukowatty.vercel.app/api/"
    : "http://localhost:3000/api/",
});
