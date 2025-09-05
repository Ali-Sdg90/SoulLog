// This is the Electron preload script.
// You can expose APIs to the renderer process here.

window.addEventListener('DOMContentLoaded', () => {
  // Example: Replace text in an element with id 'message'
  const message = document.getElementById('message');
  if (message) {
	message.innerText = 'Hello from preload.js!';
  }
});
