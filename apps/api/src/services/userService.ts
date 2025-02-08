import { signUpSchema, SignUpSchemaType } from "@repo/schemas";
import { createUser, isUserExists } from "../repository/user.repo";
import AppError from "../utils/AppError";
import { hash } from "bcrypt";

export const signUp = async (user: SignUpSchemaType): Promise<any> => {
	if (await isUserExists(user.email)) {
		throw new AppError("User already exists", 409);
	}

	const hashedPw = await hash(user.password, 5);
	user.password = hashedPw;
	const data = await createUser(user);
	return data?.[0];
};
