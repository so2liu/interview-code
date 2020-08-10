const bc = new BroadcastChannel("testChannel");

const inputField = document.getElementById("input");
const sendBtn = document.getElementById("send");
const messageBox = document.getElementById("messages");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const msg = inputField.value;
  console.log(msg);
  bc.postMessage(msg);
});

bc.onmessage = (e) => {
  console.log("Message comes");
  console.log(e);
  messageBox.innerText = `${e.data}
${messageBox.innerText}`;
};
