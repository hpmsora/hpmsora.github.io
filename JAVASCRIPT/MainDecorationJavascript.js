var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var canvas = document.getElementById("main_decoration_warp_id");
var context = canvas.getContext("2d");

context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();

context.fillStyle = "#FFCC00";
context.fill();