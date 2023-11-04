import MessageManager from "./dao/MessageManager.js";

export class Sockets {
  constructor(io) {
    // configuracion de socket proveniente de server.js
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      console.log("Cliente conectado");

      const getAllMessage = await MessageManager.get();

      socket.emit("get-all-message", getAllMessage);

      // Funcionalidades para los mensajes
      socket.on("send-message", async (data) => {
        await MessageManager.send(data);

        socket.emit("all-messages", getAllMessage);
      });
    });
  }
}
