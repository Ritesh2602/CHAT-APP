import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
  /*This option indicates that cookies should be sent along with requests. This is important when dealing with sessions or authentication, as it ensures cookies (like session IDs) are included in requests.*/
});
