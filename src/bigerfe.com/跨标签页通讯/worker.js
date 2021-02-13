const fileName = "worker.js";

let cache = "The CACHE is EMPTY.";

onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = (e) => {
    if (e.data === "__FETCH") return port.postMessage(cache);
    cache = e.data;
  };
};

console.log(fileName, "is loaded");
