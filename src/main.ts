const canvas = document.querySelector("canvas");
if (canvas === null) {
  throw new Error("Could not find canvas element");
}

canvas.style.width = "640px";
canvas.style.height = "480px";

const context = canvas.getContext("2d");

if (context === null) {
  throw new Error("Could not obtain 2d context");
}

context.imageSmoothingEnabled = false;
