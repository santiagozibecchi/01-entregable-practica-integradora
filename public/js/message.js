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
        <div>
          <h3>Usuario: ${message.user}</h3>
        </div>
        <div>Mensaje: ${message.message}</div>
      `;

        divMessage.appendChild(messageElement);
      });
    } else {
      console.log("No tiene mensajes");
    }
  });

  socket.on("all-messages", (allMessages) => {
    const divMessage = document.getElementById("messages");
    divMessage.innerText = "";

    allMessages.forEach((message) => {
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `
      <div>
        <h3>Usuario: ${message.user}</h3>
      </div>
      <div>Mensaje: ${message.message}</div>
    `;

      divMessage.appendChild(messageElement);
    });
  });

  const formProduct = document.getElementById("form-message");

  formProduct.addEventListener("submit", (event) => {
    event.preventDefault();

    const newMessage = {
      user: document.getElementById("user").value,
      message: document.getElementById("message").value,
    };

    socket.emit("send-message", newMessage);
  });
})();
