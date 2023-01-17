import { Router } from "express";
import { UsersController } from "../../../controllers/users.controller";
import { authMiddleware } from "../../../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, UsersController.getAll);
router.get("/:id", authMiddleware, UsersController.getOne);
router.post("/", authMiddleware, UsersController.create);

export default router;
