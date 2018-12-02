// var obj = { "x" : 0, "y" : 2, "shape": "X"};

var obj = {}

socket.on('updateClientCoord', (data) => {
  obj = data
  var x = obj["x"];
  var y = obj["y"];
  coordinateChecker(x, y)
  disableButtons(false)
  /* {
    x: 1,
    y: 1,
    symbol: "x"
  }
  obj.x */


})


shape = "O"
function disableButtons(boolean) {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText.length<1){
      buttons[i].disabled = boolean;
    }
  }
}

function shapeTurn() {
  if (shape == "X") {
    shape = "O";
  } else {
    shape = "X";
  }
  return shape;
}

function coordinateChecker(x, y) {
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
  if (document.getElementById("0").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 0, "y": 0, "i": 0})
    document.getElementById("0").innerHTML = shapeTurn();
    disableButtons(true)
    console.log("Function0 is called")
    document.getElementById("0").disabled = true;
  }
}

function myFunction1() {
  if (document.getElementById("1").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 0, "y": 1, "i": 1 })
    document.getElementById("1").innerHTML = shapeTurn();
    disableButtons(true)
    document.getElementById("1").disabled = true;
  }
}

function myFunction2() {
  if (document.getElementById("2").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 0, "y": 2, "i": 2 })
    disableButtons(true)
    document.getElementById("2").innerHTML = shapeTurn();
    document.getElementById("2").disabled = true;
  }
}

function myFunction3() {
  if (document.getElementById("3").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 1, "y": 0, "i": 3 })
    disableButtons(true)
    document.getElementById("3").innerHTML = shapeTurn();
    document.getElementById("3").disabled = true;
  }
}

function myFunction4() {
  if (document.getElementById("4").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 1, "y": 1, "i": 4 })
    disableButtons(true)
    document.getElementById("4").innerHTML = shapeTurn();
    document.getElementById("4").disabled = true;
  }
}

function myFunction5() {
  if (document.getElementById("5").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 1, "y": 2, "i": 5 })
    disableButtons(true)
    document.getElementById("5").innerHTML = shapeTurn();
    document.getElementById("5").disabled = true;
  }
}

function myFunction6() {
  if (document.getElementById("6").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 2, "y": 0, "i": 6 })
    disableButtons(true)
    document.getElementById("6").innerHTML = shapeTurn();
    document.getElementById("6").disabled = true;
  }
}

function myFunction7() {
  if (document.getElementById("7").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 2, "y": 1, "i": 7 })
    disableButtons(true)
    document.getElementById("7").innerHTML = shapeTurn();
    document.getElementById("7").disabled = true;
  }
}

function myFunction8() {
  if (document.getElementById("8").innerHTML.length == 0) {
    socket.emit('updateCoord', { "x": 2, "y": 2, "i": 8 })
    disableButtons(true)
    document.getElementById("8").innerHTML = shapeTurn();
    document.getElementById("8").disabled = true;
  }
}
