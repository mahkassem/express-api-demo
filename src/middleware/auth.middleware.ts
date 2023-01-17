import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const username = req.headers.authorization;

	if (username !== "John") return res.status(401).send("User is unauthorized");

	next();
};
