import { useEffect, useRef, useState } from "react";
import { authStore } from "../store/authStore";
import { Link } from "react-router-dom";
import { Flame, User, LogOut, Menu } from "lucide-react";

export const Header = () => {
	const { authUser, logout } = authStore();
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

};