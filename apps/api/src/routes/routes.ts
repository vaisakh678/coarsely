import { Express, Router } from "express";
import userRoutes from "./user.route";
import { handleGetCategories } from "../handlers/category.handler";

const registerRoutes = (app: Express) => {
	const v1: Router = Router();
	v1.use("/user", userRoutes);
	v1.use("/category", handleGetCategories);

	app.use("/api/v1", v1);
};

export default registerRoutes;
