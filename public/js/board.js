// var obj = { "x" : 0, "y" : 2, "shape": "X"};

var obj = {}
var board = [0,0,0,0,0,0,0,0]

function getBoards(){
  
  var buttons = document.getElementsByTagName("button");
  for (let i=0;i<buttons.length;i++){
    element = buttons[i]
    if (element.innerHTML.length>0){
      if (element.innerHTML=='X'){
        if (document.getElementById("p2")=="Anonymous"){
          board[i] = 1
        }else{
          board[i] = 2
        }
      }else{
        if (document.getElementById("p2")=="Anonymous"){
          board[i] = 2
        }else{
          board[i] = 1
        }
      }
    }
  }
  var result = checkWin(board)
  if (result.status=="win"){
    alert(result.winner+" won!")
  }else if (result.status == "tie"){
    alert("It's a tie!")
  }
}

socket.on('updateClientCoord', (data) => {
  obj = data
  var x = obj["x"];
  var y = obj["y"];
  coordinateChecker(x, y)
  disableButtons(false)
  getBoards()
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

function checkWin(board){
  let output = {};
   
  // horizontal matches
  if(board[0] != 0 && board[0] === board[1] && board[1] === board[2]){
    if(board[0] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }else if(board[3] != 0 && board[3] === board[4] && board[4] === board[5]){
    if(board[3] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }else if(board[6] != 0 && board[6] === board[7] && board[7] === board[8]){
    if(board[6] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }
  //vertical matches
  else if(board[0] != 0 && board[0] === board[3] && board[3] === board[6]){
    if(board[0] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }else if(board[1] != 0 && board[1] === board[4] && board[4] === board[7]){
    if(board[1] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }else if(board[2] != 0 && board[2] === board[5] && board[5] === board[8]){
    if(board[2] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }
  //diagonal matches
  else if(board[0] != 0 && board[0] === board[4] && board[4] === board[8]){
    if(board[0] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }else if(board[2] != 0 && board[2] === board[4] && board[4] === board[6]){
    if(board[2] == 2){
      output.winner = "Player 1"
    }else{
      output.winner = "Player 2"
    }
    output.status = "win";
  }

  //tie
  else if(board[0] != 0 && board[1] != 0 && board[2] != 0 && board[3] != 0 && board[4] != 0 && board[5] != 0 && board[6] != 0 && board[7] != 0 && board[8] != 0){
    output.status = "tie"
  }
  return output;
}
