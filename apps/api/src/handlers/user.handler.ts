import { NextFunction, Request, Response } from "express";
import { signInSchema, signUpSchema } from "@repo/schemas";
import { login, signUp } from "../services/userService";

export const handleSignup = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	try {
		const result = signUpSchema.safeParse(req.body);
		if (!result.success) {
			return res.status(400).json({ error: result.error });
		}
		const user = await signUp(result.data);
		return res.json({ message: "User successfully signed up!", data: user });
	} catch (error) {
		console.error(error);
		return next(error);
	}
};

export const handleSignin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	try {
		const result = signInSchema.safeParse(req.body);
		if (!result.success) {
			return res.status(400).json({ error: result.error });
		}
		const { accessToken, refreshToken } = await login(result.data);
		return res.json({
			message: "User successfully logged in!",
			data: {
				accessToken,
				refreshToken,
			},
		});
	} catch (error) {
		console.error(error);
		return next(error);
	}
};
