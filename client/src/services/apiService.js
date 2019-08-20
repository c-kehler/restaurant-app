import axios from "axios";
const BASE_URL = "http://localhost:8001";

const JWT_TOKEN = localStorage.getItem("token");

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${JWT_TOKEN}`
  }
});

export const login = async data => {
  try {
    const response = await apiClient.post("/auth/login", data);
    console.log(data);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await apiClient.get("/app/profile");
    const { user } = response.data;
    return user;
  } catch (e) {
    throw e;
  }
};

export const signUp = async data => {
  try {
    console.log(data);
    const response = await apiClient.post("/auth/signup", data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);

    console.log(user);
    return user;
  } catch (e) {
    throw e;
  }
};

export const addRestaurant = async data => {
  try {
    console.log(data);
    const response = await apiClient.post("/auth/signup", data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    console.log(user);
    return user;
  } catch (e) {
    throw e;
  }
};

export const removeFavRestaurant = async data => {
  try {
    console.log(data);
    const response = await apiClient.put("/auth/signup", data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    console.log(user);
    return user;
  } catch (e) {
    throw e;
  }
};
