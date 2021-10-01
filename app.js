// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = document.querySelector(".hihihi");

function handleMouseEnter() {
  superEventHandler.innerText = "Mouse is here!";
  superEventHandler.color = "#1abc9c";
}

function handleMouseLeaves() {
  superEventHandler.innerText = "Mouse is gone!";
  superEventHandler.color = "#3498db";
}

function handlewindowResize() {
  superEventHandler.innerText = "You just resized!";
  superEventHandler.color = "#9b59b6";
}

function handleMouseAuxclick() {
  superEventHandler.innerText = "That was a right click!";
  superEventHandler.color = "#1abc9c";
}

superEventHandler.addEventListener("mouseenter", handleMouseEnter);
superEventHandler.addEventListener("mouseleave", handleMouseLeaves);
window.addEventListener("resize", windowResize);
superEventHandler.addEventListener("auxclick", handleMouseAuxclick);

console.dir(h2);
