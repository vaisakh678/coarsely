import { NextFunction, Request, Response } from "express";
import { signUpSchema } from "@repo/schemas";
import { signUp } from "../services/userService";

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
