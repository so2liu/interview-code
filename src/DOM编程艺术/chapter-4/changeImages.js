"use strict";
function setImage(imagePath, placeholder) {
  placeholder.setAttribute("src", imagePath);
}

function eventProxy(parentNode, eventName, selector, callback) {
  parentNode.addEventListener(eventName, (e) => {
    const selected = parentNode.querySelectorAll(selector);
    const target = e.target || e.srcElement;
    if (Array.from(selected).some((el) => el.contains(target))) callback(e);
  });
}

const displayer = document.getElementById("display");
const displayImage = displayer.querySelector("img");
const displayTitle = displayer.querySelector("center");

const parent = document.getElementsByTagName("ul")[0];
eventProxy(parent, "click", "a", (event) => {
  event.preventDefault();

  if (displayImage) displayImage.setAttribute("src", event.target.href);

  if (displayTitle) displayTitle.childNodes[0].nodeValue = event.target.title;
});
