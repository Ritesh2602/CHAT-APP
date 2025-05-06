//State management library for react.The create function is used to create a new store. A store is essentially an object that holds and manages state in your application.
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
export const useAuthStore = create((set, get) => ({
  /*This is the piece of state that will hold the user’s authentication details. Initially, it's set to null, meaning there's no authenticated user by default.*/
  authUser: null,
  /*This is a boolean flag indicating whether the application is checking the authentication status. Initially, it's set to true, meaning the app is still in the process of checking if the user is authenticated.*/
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
      //   get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    console.log("Signup payload:", data); // Debug log
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log("API response:", res.data); // Debug log
      set({ authUser: res.data });
      toast.success("Account created successfully");
      return res.data;
      // get().connectSocket();
    } catch (error) {
      console.error("Full error object:", error); // Debug log

      // Safe error handling:
      const errorMessage =
        error.response?.data?.message || error.message || "Signup failed";
      toast.error(errorMessage);
    } finally {
      set({ isSigningUp: false });
    }
  },
}));
