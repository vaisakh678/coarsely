import db from "../db";
import { UserTable } from "../db/schema";

type User = {
	fullName: string;
	email: string;
	password: string;
	refreshToken: string;
	lastLogin: Date;
};

export const createUser = async (user: User) => {
	return await db.insert(UserTable).values(user).execute();
};
