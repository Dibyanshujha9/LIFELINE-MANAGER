import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import API from "../../../services/API";

// User Login Action
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      // Send login request with role included
      const { data } = await API.post("/auth/login", {
        role,
        email,
        password,
      });

      // Handle success
      if (data.success) {
        localStorage.setItem("token", data.token); // Store token
        toast.success(data.message);
        window.location.replace("/");
      }

      return data;
    } catch (error) {
      // Handle API errors
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// User Register Action 
//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) {
        alert("User Registerd Successfully");
        window.location.replace("/login");
        // toast.success("User Registerd Successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


//current user - get 
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);