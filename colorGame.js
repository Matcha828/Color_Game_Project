var numbSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons even listeners.
    setupModeButtons();
    //square event listeners
    setupSquares();
    //默认重置
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function (){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numbSquares = 3: numbSquares = 6;
            //按钮中的重置
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.innerHTML = "Correct!";
                resetButton.innerHTML = "PLAY AGAIN?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.innerHTML = "Try Again!";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.innerHTML = "New Colors";
    messageDisplay.innerHTML = "";

    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(numbers) {
    var arr = [];

    for(var i = 0; i < numbers; i++){
        arr.push(randomColors());
    }

    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// easyButton.addEventListener("click", function () {
//     numbSquares = 3;
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     colors = generateRandomColors(numbSquares);
//     pickedColor = pickColor();
//     colorDisplay.innerHTML = pickedColor;
//
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });
//
// hardButton.addEventListener("click", function () {
//     numbSquares = 6;
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     colors = generateRandomColors(numbSquares);
//     pickedColor = pickColor();
//     colorDisplay.innerHTML = pickedColor;
//
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });