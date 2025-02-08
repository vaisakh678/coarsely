import { eq } from "drizzle-orm";
import db from "../db";
import { UserTable } from "../db/schema";

type User = {
	fullName: string;
	email: string;
	password: string;
};

export const createUser = async (user: User) => {
	return await db.insert(UserTable).values(user).returning({ id: UserTable.id }).execute();
};

export const isUserExists = async (email: string) => {
	const users = await db.select().from(UserTable).where(eq(UserTable.email, email)).limit(1).execute();
	return users.length > 0;
};

export const getUserByEmailWithSensitiveInfo = async (email: string) => {
	const res = await db.select().from(UserTable).where(eq(UserTable.email, email)).execute();
	return res?.[0];
};
