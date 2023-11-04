import { Router } from "express";
import ProductManager from "../../dao/ProductManager.js";

const router = Router();

router.get("/", async (req, res) => {
  // let students = await ProductManager.get();
  // { students: students.map((s) => s.toJSON()) }
  res.render("products");
});

export default router;
