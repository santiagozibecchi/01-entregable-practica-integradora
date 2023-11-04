import { Router } from "express";
import MessageManager from "../../dao/MessageManager.js";

const router = Router();

router.get("/", async (req, res) => {
  // let messages = await MessageManager.get();
  // Necesito una fn. para obtener todos los messages cuando entro por primera vez
  // podria ser mas eficiente cargar una primera vez los mensajes desde aca y no con un evento de socket como lo estoy haciendo!
  res.render("messages");
});

export default router;
