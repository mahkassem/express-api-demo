import { Request, Response, Router } from "express";
import userRoutes from "./api/v1/users.routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

router.use("/api/v1/users", userRoutes);

export default router;
