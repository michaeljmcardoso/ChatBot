function openChat() {
    const chatBox = document.getElementById("chatBox");
    if (chatBox) {
        chatBox.style.display = "flex";
    } else {
        console.error("Chat box element not found");
    }
}

function closeChat() {
    const chatBox = document.getElementById("chatBox");
    if (chatBox) {
        chatBox.style.display = "none";
    } else {
        console.error("Chat box element not found");
    }
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message !== "") {
        const chatBody = document.getElementById("chatBody");
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
