var i = 0
var counter = 0


// SELECTS DIV OF COLUMNS
var styleDivElements = function(){
  var square = document.querySelectorAll("div.selector");
  for (var i = square.length - 1; i >= 0; i--) {
    console.log("this is", i);
    square[i].addEventListener("click", selectItem);
  }; 
}

// THIS ADDS THE CLASS TO THE DIVS
var selectItem = function( event ){
  console.log(this);
  // if (abc || def) {
  //   console.log("stop")}
  // }
  // else if {
  if ((this.classList.contains("p1Class")) || (this.classList.contains("p2Class"))) {
    console.log("stop"); } 
  else {
    if (counter % 2 === 0) {
    this.classList.add("p2Class")
    // this.innerHTML = "X";
    counter++;
    }
    else {
    this.classList.add("p1Class")
    // this.innerHTML = "O"; 
    counter++;
    } 

  }
}

// THIS RESETS THE DIVS TO THEIR ORIGINAL STATE
var resetButtonHandler = function() {

  var square = document.querySelectorAll(".selector");
  for (var i = square.length - 1; i >= 0; i--) {
    square[i].classList = "";
  // document.getElementsByClassName.contains("p1Class", "p2Class");
    square[i].classList.remove("p1Class", "p2Class");}
  
}

// THIS INITILIZES THE WHOLE THING
var initialize = function(){
  styleDivElements();
  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload=initialize;

// document.querySelector("#reset").onclick = function() { alert("Click!"); }

// function counter(){
//   count++;
// }
// var count = 0;

// counter();
// counter();
// counter();
