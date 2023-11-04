import { Router } from "express";
import MessageManager from "../../dao/MessageManager.js";

const router = Router();

router.get("/", async (req, res) => {
  let messages = await MessageManager.get();
  // messages
  res.render("messages");
});

export default router;
