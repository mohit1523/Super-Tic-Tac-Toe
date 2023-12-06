let innerBoxes = document.querySelectorAll(".inner-box");
let outerBoxes = document.querySelectorAll(".outer-box");
const cursor = document.querySelector("#cursor");
let chance = "X";
let xp = 0;
let op = 0;

let player1 = prompt("Enter Player 1 name");
let player2 = prompt("Enter Player 2 name");
if (player1.trim().length == 0) {
  player1 = "Player 1";
}
if (player2.trim().length == 0) {
  player2 = "Player 2";
}
document.getElementById(
  "player-1"
).innerHTML = `${player1} (<i class="fa-brands fa-x-twitter"></i>)`;
document.getElementById(
  "player-2"
).innerHTML = `${player2} (<i class="fa-brands fa-opera"></i>)`;
let currentPlayer = player1;
let val = 1;

let x = '<i class="fa-brands fa-x-twitter"></i>';
let o = '<i class="fa-brands fa-opera"></i>';

innerBoxes.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    elem.style.pointerEvents = "none";

    if (chance === "X") {
      elem.innerHTML = `<span>${x}</span>`;
      updateArray(e.target.id.substring(0, 4), e.target.id.charAt(4));
      currentPlayer = player2;
      chance = "O";
      cursor.innerHTML = o;
      val = 2;
    } else {
      elem.innerHTML = `<span>${o}</span>`;
      updateArray(e.target.id.substring(0, 4), e.target.id.charAt(4));
      currentPlayer = player1;
      cursor.innerHTML = x;
      chance = "X";
      val = 1;
    }

    document.querySelector(`#${e.target.id} span`).style.animation =
      "letterAnimation .2s ease-in-out forwards";

    let outerBoxToColor = e.target.id.substring(0, 3) + e.target.id.charAt(4);
    colorOuterBox(outerBoxToColor);
  });
});

let colorOuterBox = (id) => {
  outerBoxes.forEach((elem) => {
    if (elem.id === id) {
      elem.style.pointerEvents = "all";
      elem.style.background = "none";
    } else {
      elem.style.pointerEvents = "none";
      elem.style.background = "rgba(0, 0, 0, 0.3)";
    }
  });
};

// CODE FOR WINNER CHECK

let box1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box4 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box5 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box6 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box7 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box8 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let box9 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let updateArray = (boxid, innbox) => {
  switch (boxid) {
    case "box1":
      box1[innbox - 1] = val;
      winnerCheck(box1);
      break;
    case "box2":
      box2[innbox - 1] = val;
      winnerCheck(box2);
      break;
    case "box3":
      box3[innbox - 1] = val;
      winnerCheck(box3);
      break;
    case "box4":
      box4[innbox - 1] = val;
      winnerCheck(box4);
      break;
    case "box5":
      box5[innbox - 1] = val;
      winnerCheck(box5);
      break;
    case "box6":
      box6[innbox - 1] = val;
      winnerCheck(box6);
      break;
    case "box7":
      box7[innbox - 1] = val;
      winnerCheck(box7);
      break;
    case "box8":
      box8[innbox - 1] = val;
      winnerCheck(box8);
      break;
    case "box9":
      box9[innbox - 1] = val;
      winnerCheck(box9);
      break;
  }
};

let winnerCheck = (obx) => {
  let flag = false;
  if (obx[0] == val && obx[1] == val && obx[2] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  } else if (obx[3] == val && obx[4] == val && obx[5] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  } else if (obx[6] == val && obx[7] == val && obx[8] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  } else if (obx[0] == val && obx[3] == val && obx[6] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  } else if (obx[1] == val && obx[4] == val && obx[7] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  } else if (obx[2] == val && obx[5] == val && obx[8] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  } else if (obx[0] == val && obx[4] == val && obx[8] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  } else if (obx[2] == val && obx[4] == val && obx[6] == val) {
    alert(`${currentPlayer} (${chance}) is Winner`);
    flag = true;
  }

  if (flag) {
    clearBoard();
  }
};

let clearBoard = () => {
  box1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box4 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box5 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box6 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box7 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box8 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  box9 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  innerBoxes.forEach((element) => {
    element.style.pointerEvents = "all";
    element.innerText = "";
  });

  outerBoxes.forEach((elem) => {
    elem.style.background = "rgba(0, 0, 0, 0.3)";
    elem.style.pointerEvents = "all";
    elem.addEventListener("mouseover", () => {
      elem.style.background = "none";
    });
    elem.addEventListener("mouseleave", () => {
      elem.style.background = "rgba(0, 0, 0, 0.3)";
    });
  });

  if (chance === "X") {
    xp++;
    document.getElementById("x-point").innerHTML = xp;
  } else {
    op++;
    document.getElementById("o-point").innerHTML = op;
  }
};

// CODE FOR CUSTOM CURSOR

const cursorControl = (event) => {
  cursor.style.left = `${event.pageX}px`;
  cursor.style.top = `${event.pageY - 20}px`;
};

document.addEventListener("mousemove", cursorControl, false);
