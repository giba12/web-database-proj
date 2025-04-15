import axios from "axios";

const BASE_URL = import.meta.env.MODE === "production" ? "http://localhost:5000/API" : "/API";

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});