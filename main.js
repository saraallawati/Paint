//Paint

//Setup canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


//Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 10;
let penColor = "black";

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
    //update variables

    //Draw a circle if mouseIsPressed
    if (mouseIsPressed) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }

    requestAnimationFrame(loop);
}

//document event stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(event) {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

function mousemoveHandler(event) {
    // Save previous mouse x and mouse y
    pmouseX = mouseX;
    pmouseY = mouseY;

    //update mouse x and y
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
    console.log(event.code);
    if (event.code == "ArrowUp") {
        size++;
    } else if (event.code == "ArrowDown") {
        size--;
    } else if (event.code == "Digit5") {
        ctx.lineCap = "round";
}
}

//Color events
document.getElementById("red").addEventListener("click", setRed);
document.getElementById("green").addEventListener("click", setGreen);
document.getElementById("blue").addEventListener("click", setBlue);
document.getElementById("yellow").addEventListener("click", setYellow);
document.getElementById("black").addEventListener("click", setBlack);
document.getElementById("beige").addEventListener("click", setBeige);
document.getElementById("brown").addEventListener("click", setBrown);
document.getElementById("colorPicker").addEventListener("change", changeColor);
document.getElementById("eraser").addEventListener("click", setWhite);
document.getElementById("fill").addEventListener("click", setFill);

function setRed() {
    penColor = "red";
}
function setGreen() {
    penColor = "green";
}

function setBlue() {
    penColor = "blue";
}

function setYellow() {
    penColor = "yellow";
}

function setBlack() {
    penColor = "black";
}

function setBeige() {
    penColor = "rgb(255, 213, 179)";
}

function setBrown() {
    penColor = "rgb(58, 31, 0)";
}

function setWhite() {
    penColor = "white";
}

function changeColor() {
    penColor = document.getElementById("colorPicker").value;
}

function setFill() {
    ctx.fillStyle = penColor;
    ctx.fillRect(0, 0, cnv.width, cnv.height);
}


