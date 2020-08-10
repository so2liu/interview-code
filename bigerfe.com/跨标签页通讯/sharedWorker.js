const inputField = document.getElementById("input");
const sendBtn = document.getElementById("send");
const fetchBtn = document.getElementById("fetch");
const messageBox = document.getElementById("messages");

const myWorker = window.myWorker || new SharedWorker("worker.js");

function send(value) {
  console.log("Sender:", value);
  myWorker.port.postMessage(value);
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  send(inputField.value);
});

fetchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  send("__FETCH");
});

myWorker.port.onmessage = (e) => {
  console.log("Reciver:", e.data);
  messageBox.innerText = e.data;
};

if (window.myWorker === undefined) window.myWorker = myWorker;
