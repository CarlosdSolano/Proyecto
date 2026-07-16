function toggleChat() {
  const chat = document.getElementById('chatBox');
  chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const messages = document.getElementById('messages');
  const text = input.value.trim();

  if (!text) return;

  messages.innerHTML += `<p><strong>Tú:</strong> ${text}</p>`;
  messages.innerHTML += `<p><strong>Bot:</strong> Gracias por contactarnos.</p>`;
  input.value = '';
}
