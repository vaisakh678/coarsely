import { Token } from "@repo/types";

enum TokenType {
	AccessToken = "accessToken",
	RereshToken = "refreshToken",
}

export const getTokens = () => {
	const accessToken = localStorage.getItem(TokenType.AccessToken);
	const refreshToken = localStorage.getItem(TokenType.RereshToken);
	if (accessToken && refreshToken) {
		return { accessToken, refreshToken };
	}
	return null;
};

export const handleLogout = () => {
	localStorage.removeItem(TokenType.AccessToken);
	localStorage.removeItem(TokenType.RereshToken);
};

export const setToken = (token: Token) => {
	localStorage.setItem(TokenType.AccessToken, token.accessToken);
	localStorage.setItem(TokenType.RereshToken, token.refreshToken);
};
