import { Router } from "express";

import authRoutes from "./authRoute"
import userRoutes from "./userRoute"
import articleRoutes from "./articleRoute"

const router = Router();

router.use ("/auth", authRoutes)
router.use("/users", userRoutes)
router.use("/articles", articleRoutes)

export default router;