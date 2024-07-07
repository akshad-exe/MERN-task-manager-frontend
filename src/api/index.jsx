import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-backend-lilac.vercel.app/api",
});
export default api;
