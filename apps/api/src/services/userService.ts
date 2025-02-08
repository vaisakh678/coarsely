import { SignInSchemaType, signUpSchema, SignUpSchemaType } from "@repo/schemas";
import { createUser, getUserByEmailWithSensitiveInfo, isUserExists } from "../repository/user.repo";
import AppError from "../utils/AppError";
import { sha256 } from "../utils/sha256";
import { sign } from "jsonwebtoken";

export const signUp = async (user: SignUpSchemaType): Promise<any> => {
	if (await isUserExists(user.email)) {
		throw new AppError("User already exists", 409);
	}

	const hashedPw = sha256(user.password);
	user.password = hashedPw;
	const data = await createUser(user);
	return data?.[0];
};

export const login = async (
	data: SignInSchemaType
): Promise<{
	accessToken: string;
	refreshToken: string;
}> => {
	const hashedPw = sha256(data.password);
	const user = await getUserByEmailWithSensitiveInfo(data.email);
	if (!user) {
		throw new AppError("User not found", 404);
	}
	if (!user.password || user.password !== hashedPw) {
		throw new AppError("Invalid password", 401);
	}

	const accessToken = sign({ email: user.email }, "TODO", { expiresIn: "24h" });
	const refreshToken = sign({ email: user.email }, "TODO", { expiresIn: "30d" });

	return { accessToken, refreshToken };
};
