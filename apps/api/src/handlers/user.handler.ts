import { Request, Response } from "express";
import { createUser } from "../repository/user.repo";

export const signup = async (req: Request, res: Response): Promise<any> => {
	createUser({
		email: "vaisakh678@gmail.com",
		password: "123",
		fullName: "vaisakh b",
		lastLogin: new Date(),
		refreshToken: "123",
	});
	return res.json({ message: "User successfully signed up!" });
};
