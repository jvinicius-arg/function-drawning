let stage = document.querySelector("#stage");

const ctx = stage.getContext("2d");
ctx.moveTo(300,600);
ctx.lineTo(300,0);
ctx.moveTo(0,300);
ctx.lineTo(600,300);
ctx.stroke();
