import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
	if (err instanceof AppError) {
		res.status(err.statusCode).json({
			error: err.message,
		});
		return;
	}

	res.status(500).json({
		Error: "Internal Server Error",
	});
	return;
};
export default errorHandler;
