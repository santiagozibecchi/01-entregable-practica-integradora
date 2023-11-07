(function () {
  // Conexión con el socket server
  const socket = io("http://localhost:8080");

  console.log("SOCKET MESSAGE CONECTED");

  socket.on("get-all-message", (allMessages) => {
    if (allMessages.length > 0) {
      const divMessage = document.getElementById("messages");
      divMessage.innerText = "";

      allMessages.forEach((message) => {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `
        <div style="background-color: rgba(16, 13, 74, 0.59);padding: 10px;border-radius: 15px;display:flex;justify-content: space-between;">
          <div>
            <div>
              <h3>Usuario: ${message.user}</h3>
            </div>
            <span>Mensaje: ${message.message}</span>
          </div>
          <div style="align-self:center;border: solid 2px brown;padding:10px;border-radius:10px" id="${message._id}" onClick>Eliminar</div>
        </div>
        <hr/>
      `;

        divMessage.appendChild(messageElement);

        const button = document.getElementById(message._id);
        button.addEventListener("click", (event) => {
          const messageId = event.target.id;
          socket.emit("delete-message", messageId);
        });
      });
    } else {
      console.log("No tiene mensajes");
    }
  });

  const formProduct = document.getElementById("form-message");

  formProduct.addEventListener("submit", (event) => {
    event.preventDefault();

    const newMessage = {
      user: document.getElementById("user").value,
      message: document.getElementById("message").value,
    };
    console.log("mensaje enviado");
    socket.emit("send-message", newMessage);
  });
})();
