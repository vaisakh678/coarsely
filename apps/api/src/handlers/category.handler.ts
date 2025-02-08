import { Request, Response } from "express";

import { fetchCategory } from "../services/categoryService";

export const handleGetCategories = async (req: Request, res: Response) => {
	try {
		const categories = await fetchCategory();
		res.status(200).json({
			message: "Categories fetched successfully",
			data: categories,
		});
	} catch (error) {
		res.status(500);
	}
};
