import { Router } from "express";

import { handleGetCategories } from "../handlers/category.handler";

const router: Router = Router();

router.get("/", handleGetCategories);

export default router;
