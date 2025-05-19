//Made by Gina Bain
import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import { disconnectSocket, initializeSocket } from "../socket/socket.client";

export const AuthStore = create((set) => ({
	authUser: null,
	checkingAuth: true,
	loading: false,

	login: async (loginData) => {
		try {
			set({ loading: true });
			const res = await axiosInstance.post("/auth/login", loginData);
			set({ authUser: res.data.user });
			initializeSocket(res.data.user._id);
		} catch (error) {
            console.log("can not log in");
		} finally {
			set({ loading: false });
		}
	},
	logout: async () => {
		try {
			const res = await axiosInstance.post("/auth/logout");
			disconnectSocket();
			if (res.status === 200) set({ authUser: null });
		} catch (error) {
			console.log("can not log out");
		}
	},
	checkAuth: async () => {
		try {
			const res = await axiosInstance.get("/auth/me");
			initializeSocket(res.data.user._id);
			set({ authUser: res.data.user });
		} catch (error) {
			set({ authUser: null });
			console.log(error);
		} finally {
			set({ checkingAuth: false });
		}
	},

	setAuthUser: (user) => set({ authUser: user }),
}));
