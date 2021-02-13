const inputField = document.getElementById("input");
const sendBtn = document.getElementById("send");
const openBtn = document.getElementById("open");
const messageBox = document.getElementById("messages");

let newTab;

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  newTab = window.open("postMessage.html");
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (newTab === undefined) return;
  newTab.postMessage(inputField.value, "*");
});

addEventListener("message", (e) => {
  console.log("Message comes");
  console.log(e);
  messageBox.innerText = `${e.data}
${messageBox.innerText}`;
});
