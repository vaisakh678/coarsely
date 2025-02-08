import db from "../db";
import { categoryTable } from "../db/schema";

export const getCategories = async () => {
	return await db.select().from(categoryTable).execute();
};
