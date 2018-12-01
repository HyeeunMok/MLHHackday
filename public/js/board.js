var x = "X";
var o = "O";

var shape = "X";

function shapeTurn() {
  if (shape == "X") {
    shape = "O";
  } else {
    shape = "X";
  }
  return shape;
}


function myFunction0() {
    document.getElementById("0").innerHTML = shapeTurn();
    document.getElementById("0").disabled = true;
}

function myFunction1() {
    document.getElementById("1").innerHTML = shapeTurn();
    document.getElementById("1").disabled = true;
}

function myFunction2() {
    document.getElementById("2").innerHTML = shapeTurn();
    document.getElementById("2").disabled = true;
}

function myFunction3() {
    document.getElementById("3").innerHTML = shapeTurn();
    document.getElementById("3").disabled = true;
}

function myFunction4() {
    document.getElementById("4").innerHTML = shapeTurn();
    document.getElementById("4").disabled = true;
}

function myFunction5() {
    document.getElementById("5").innerHTML = shapeTurn();
    document.getElementById("5").disabled = true;
}

function myFunction6() {
    document.getElementById("6").innerHTML = shapeTurn();
    document.getElementById("6").disabled = true;
}

function myFunction7() {
    document.getElementById("7").innerHTML = shapeTurn();
    document.getElementById("7").disabled = true;
}

function myFunction8() {
    document.getElementById("8").innerHTML = shapeTurn();
    document.getElementById("8").disabled = true;
}
