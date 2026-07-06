import { Router } from "express";
import * as productController from "../controllers/productController.js";
import { verificarToken } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", productController.obtenerTodos);
router.get("/:id", productController.obtenerPorId);
router.post("/create", verificarToken, productController.crear);
router.delete("/:id", verificarToken, productController.eliminar);

export default router;
