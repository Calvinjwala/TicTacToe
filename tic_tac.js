// JavaScript document

var i = 0;
var counter = 0;
// var blank = 0;
var z = 0;
var changeSymbol = "X";

var zero = document.querySelector("div.zero.selector");
var one = document.querySelector("div.one.selector");
var two = document.querySelector("div.two.selector");

var winningArrays = function() {
    if ($("div.zero.selector").hasID("p1Class")) {
      console.log("hello");
    }
  };


// var three = document.querySelector("div.three.selector.p1Class");
// var four = document.querySelector("div.four.selector.p1Class");
// var five = document.querySelector("div.five.selector.p1Class");
// var six = document.querySelector("div.six.selector.p1Class");
// var seven = document.querySelector("div.seven.selector.p1Class");
// var eight = document.querySelector("div.eight.selector.p1Class");

// var time = function (){
//   for (var x = time.length - 1; x >= 0; x--) {
//     console.log("x is " + x);
//     if ((div.zero.selector.contains("p1Class"))&&(div.one.selector.contains("p1Class"))&&(div.two.selector.contains("p1Class"))) {
//     console.log("hello, ma'am");
//     }
//   }
// };
// time();
// var p1Winner = function () {
//   if (zero && one & two) {
//     console.log("hola!");
//     };
// }

// declaring variables of each div container
// var zero = document.querySelector("div.zero.selector.p1Class");
// var one = document.querySelector("div.one.selector.p1Class");
// var two = document.querySelector("div.two.selector.p1Class");
// var three = document.querySelector("div.three.selector.p1Class");
// var four = document.querySelector("div.four.selector.p1Class");
// var five = document.querySelector("div.five.selector.p1Class");
// var six = document.querySelector("sdiv.six.selector.p1Class");
// var seven = document.querySelector("div.seven.selector.p1Class");
// var eight = document.querySelector("div.eight.selector.p1Class");

// var 0 = 

// var zero = document.querySelectorAll("div.zero.selector")
// var numSquares = [zero, one, two, 3, 4, 5, 6, 7, 8]
// var winningArrays = [[zero, one, two],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]]

// console.log(zero)

// SELECTS DIV OF COLUMNS
// searches the document for a newly declared variable "square", and 
// sees if it is within a div. 

var styleDivElements = function(){
  var square = document.querySelectorAll("div.selector");
  for (var i = square.length - 1; i >= 0; i--) {
    console.log("this is", i);
    square[i].addEventListener("click", selectItem);
  }
};

// THIS ADDS THE CLASS of p1 or p2 TO THE DIVS
var selectItem = function( event ){
  // console.log(this);
  // if ((this.classList.contains("p1Class")) || (this.classList.contains("p2Class"))) {
  //   console.log("stop"); } 
  if (this.innerText=== "") {
    this.innerText=changeSymbol;
    if (changeSymbol === "X") {
    changeSymbol = "O";
    // this.classList.add("p1Class");
    this.style.backgroundColor = "#46a770";
    } else {
      changeSymbol = "X";
      // this.classList.add("p2Class");
      this.style.backgroundColor = "#2D2145";
    }
  }
};
//   else {
//     if (counter % 2 === 0) {
//     this.classList.add("p1Class");

//     counter++;
//     }
//     else {
//     this.classList.add("p2Class");
//     //below can be removed if fucks with whole thing
//     // this.innerHTML = "o"; 
//     counter++;
//     } 
//   }
// // };
// console.log(counter);

// var turn = function addEventListener() {
//   var tangoDiv = document.getElementsByClassName("h4.tango"); 
//   if (counter % 2 === 0) {
//     h4.tango.innerHTML.add('Player 2');
//   } else {
//     add('Player 1');
//   }
//   document.querySelector("#reset").addEventListener("click",resetButtonHandler);

// function myFunction(name) {
//     var element = document.getElementByClassName("tango");
//     for (var z = element.length - 1; z >= 0; z--)
//     if (z%2===0) {
//       element.innerHTML = 'Player 2';
//     }
//     else {
//       element.innerHTML = 'Player 1';
//       }
//     }



// THIS RESETS THE DIVS TO THEIR ORIGINAL STATE
var resetButtonHandler = function() {
  var square = document.querySelectorAll("div.selector");
  for (var i = square.length - 1; i >= 0; i--) {
    square[i].innerText = "";
    square[i].style.background = "transparent";
  // document.getElementsByClassName.contains("p1Class", "p2Class");
    // square[i].classList.remove("p1Class", "p2Class");
  }
};

  // POSSIBLE VARIABLE FOR REMOVING THE X'S AND O'S
  // var blank = document.querySelectorAll("div.selector");
  // for (var z = blank.length + 1; z >= 0; z++) {
  //   blank[z].innertext = "";
  //   blank[z].innertext.empty();
  // }
// };
//above ^^ will need to be able to handle a reset of the words of victory as well.

// TO DETERMINE IF P1 OR P2 HAS WON

// var callNumber = function () {
//   if (zero.hasClass("p1Class") && one.hasClass("p1Class") && two.hasClass("p1Class")) {
//     console.log("success!");
//   };
// };

// $("function() {
//   if (("div.zero.selector").hasClass("p1Class") && ("div.one.selector").hasClass("p1Class") && ("div.two.selector").hasClass("p1Class")) {
//   alert("Player One has won!");
//   }
// };

// var zero = document.querySelector("div.zero.selector");
// var one = document.querySelector("div.one.selector");
// var two = document.querySelector("div.two.selector");

// var winningArrays = function() {
//     if ($("div.zero.selector").hasID("p1Class")) {
//       console.log("hello");
//     }
//   };


// THIS INITILIZES THE WHOLE THING
var initialize = function(){
  styleDivElements();
  // p1Winner();
  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload=initialize;















