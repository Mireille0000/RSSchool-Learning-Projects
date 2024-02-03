console.log("Let's get started")

// create grid

document.body.onload = addElements;

function addElements() {
  const title = document.createElement("h1");
  title.innerHTML = "Nonograms";

  const attempts = document.createElement("div");
  attempts.className = "attempts";

  let lives = "&#x2665 &#x2665 &#x2665";
  attempts.innerHTML = lives;

  const grid = document.createElement("div");
  grid.className = "grid";
  const cell = document.createElement("div");
  const hints = document.createElement("div");
  hints.className = "hint";

  
  const horizontalHints = document.createElement("div");
  const horizontalHintsItems = document.createElement("div");
  horizontalHintsItems.className = "hint-horizontal";
  horizontalHints.className = "hint-horisontal-box";

  const verticalHints = document.createElement("div");
  const verticalHintsItems = document.createElement("div");
  verticalHints.className = "hint-vertical-box";

  document.body.prepend(title, attempts, horizontalHints, grid);

  for (let i = 0; i < 30; i++) {
    grid.appendChild(cell.cloneNode(true));
  }

  const gridItems = Array.from(document.querySelectorAll(".grid div"));
  console.log(gridItems.length);

  gridItems.map((item) => {
    if (gridItems.indexOf(item) % 6 !== 0) {
      item.className = "cell";
    }
  })

  // vertical hints
  gridItems.map((item, index) => {
    if (gridItems.indexOf(item) % 6 === 0) {
      item.className = "hint-vertical";
      item.innerHTML = 0;
      console.log(index);
    }
  })

  const verticalHintsArr = Array.from(document.querySelectorAll(".hint-vertical"));
  verticalHintsArr[0].innerHTML = 5;
  verticalHintsArr[1].innerHTML = 5;
  verticalHintsArr[2].innerHTML = 3;
  verticalHintsArr[3].innerHTML = 1;
  verticalHintsArr[4].innerHTML = 5;
  console.log(verticalHintsArr);

  const cellsArr = Array.from(document.querySelectorAll(".cell"));

  cellsArr.map(cell => {
    cell.addEventListener("click", () => {
      cell.classList.toggle("correct");
    })
  });

  // horizontal hints
  for (let i = 0; i < 5; i++) {
    horizontalHints.prepend(horizontalHintsItems.cloneNode(true));
  }

  const horizontalHintsArr = Array.from(document.querySelectorAll(".hint-horizontal"));
  horizontalHintsArr[0].innerHTML = `${2}<br>${1}`;
  horizontalHintsArr[1].innerHTML = `${3}<br>${1}`;
  horizontalHintsArr[2].innerHTML = `${5}`;
  horizontalHintsArr[3].innerHTML = `${3}<br>${1}`;
  horizontalHintsArr[4].innerHTML = `${2}<br>${1}`;

  // ??
  const gameFieldTree = Array(19).fill("correct");
  console.log(gameFieldTree);

  // modal window

  const windowBackground = document.createElement("div");
  windowBackground.className = "modal-background";

  const window = document.createElement("div");
  window.className = "window";

  const smallGrid = document.createElement("div");
  smallGrid.className = "window-nonogram";
  const smallGridItem = document.createElement("div");

  for (let i = 0; i < 25; i++) {
    smallGrid.appendChild(smallGridItem.cloneNode(true));
  }


  const windowText = document.createElement("p");
  windowText.className = "window-text";
  windowText.innerHTML = "Great! You have solved the nonogram!"

  const windowButton = document.createElement("button");
  windowButton.className = "window-buttton";
  windowButton.innerHTML = "Play again";
  
  document.body.append(windowBackground);
  document.body.append(window);
  window.append(smallGrid, windowText, windowButton);

  // tree nonogram
  // for tree 0 - 9, 12, 16 - 18, 20 - 25
  const nonogramItems = Array.from(document.querySelectorAll(".window-nonogram div"));

  nonogramItems.map((item) => {
    if (nonogramItems.indexOf(item) <= 9 || (nonogramItems.indexOf(item) > 10 
    && nonogramItems.indexOf(item) < 14)) {
      item.style = "background-color: #04893e"
    }

    if (nonogramItems.indexOf(item) === 17) {
      item.style = "background-color: #713d09"
    }

    if (nonogramItems.indexOf(item) >= 20) {
      item.style = "background-color: #034e23"
    }
  })
  console.log(nonogramItems);
}

// todo
// modal:
// -modal background
// -button "play again"
// win
// - show modal window "Great!.." if the solution is found