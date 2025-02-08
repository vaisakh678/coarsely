import { Router } from "express";
import * as handler from "../handlers/user.handler";

const router: Router = Router();

router.post("/signup", handler.handleSignup);

export default router;
