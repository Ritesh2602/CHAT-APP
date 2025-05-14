import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api",
  withCredentials: true,
  /*This option indicates that cookies should be sent along with requests. This is important when dealing with sessions or authentication, as it ensures cookies (like session IDs) are included in requests.*/
});
