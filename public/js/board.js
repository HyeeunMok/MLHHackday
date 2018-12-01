var obj = { "x" : 0, "y" : 2, "shape": "X"};

var x = obj["x"];
var y = obj["y"];
/* {
  x: 1,
  y: 1,
  symbol: "x"
}
obj.x */

var shape = obj["shape"];

function shapeTurn() {
  if (shape == "X") {
    shape = "O";
  } else {
    shape = "X";
  }
  return shape;
}

function cordinateChecker() {
  if (x == 0 && y == 0) {
    myFunction0();
  }
  else if (x == 0 && y == 1) {
    myFunction1();
  }
  else if (x == 0 && y == 2) {
    myFunction2();
  }
  else if (x == 1 && y == 0) {
    myFunction3();
  }
  else if (x == 1 && y == 1) {
    myFunction4();
  }
  else if (x == 1 && y == 2) {
    myFunction5();
  }
  else if (x == 2 && y == 0) {
    myFunction6();
  }
  else if (x == 2 && y == 1) {
    myFunction7();
  }
  else if (x == 2 && y == 2) {
    myFunction8();
  }
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
