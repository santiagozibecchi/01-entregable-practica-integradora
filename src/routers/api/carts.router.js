import { Router } from "express";
import CartManager from "../../dao/CartManager.js";

const router = Router();

router.post("/carts", async (req, res) => {
  try {
    const newCart = await CartManager.create();
    res.status(201).json({ newCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/carts/:cid/product/:pid", async (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;

  try {
    const addOrUpdatedProduct = await CartManager.addProduct(
      cid,
      pid,
      quantity
    );

    res.status(201).json({ addOrUpdatedProduct });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.get("/carts/:cid", async (req, res) => {
  const { cid } = req.params;
  const cart = await CartManager.get(cid);

  res.status(200).json({ cart });
});

export default router;
