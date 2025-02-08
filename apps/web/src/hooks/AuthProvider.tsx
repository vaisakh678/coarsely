import React, { createContext, useState } from "react";
import { getTokens, handleLogout, setToken } from "../utils/token";
import { Token } from "@repo/types";

interface AuthContextProps {
	isLoggedIn: boolean;
	setToken: (token: Token) => void;
	handleLogout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => !!getTokens());

	const value = {
		isLoggedIn,
		setToken: (token: Token) => {
			setToken(token);
			setIsLoggedIn(true);
		},
		handleLogout: () => {
			handleLogout();
			setIsLoggedIn(false);
		},
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
