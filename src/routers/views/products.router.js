import { Router } from "express";
import ProductManager from "../../dao/ProductManager.js";

const router = Router();

router.get("/products", async (req, res) => {
  let students = await ProductManager.get();
  res.render("products", { students: students.map((s) => s.toJSON()) });
});

export default router;
