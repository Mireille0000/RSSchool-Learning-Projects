console.log("Let's get started");
const body = document.querySelector("body");

// create grid

document.body.onload = addElements;

function addElements() {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  const title = document.createElement("h1");
  title.innerHTML = "Nonograms";

  // const attempts = document.createElement("div");
  // attempts.className = "attempts";

  // let lives = "&#x2665 &#x2665 &#x2665";
  // attempts.innerHTML = lives;

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
  // const verticalHintsItems = document.createElement("div");
  verticalHints.className = "hint-vertical-box";

  document.body.prepend(wrapper);
  wrapper.append(title, horizontalHints, grid);
  // document.body.prepend(title, horizontalHints, grid);

  for (let i = 0; i < 30; i++) {
    grid.appendChild(cell.cloneNode(true));
  }

  const gridItems = Array.from(document.querySelectorAll(".grid div"));
  gridItems.map((item) => {
    if (gridItems.indexOf(item) % 6 !== 0) {
      item.className = "cell";
    }
  })

  const cellsArr = Array.from(document.querySelectorAll(".cell"));
  cellsArr.map(cell => {
    cell.addEventListener("click", () => {
      cell.classList.toggle("clicked");
    })
  });

  // hints

  gridItems.map((item) => {
    if (gridItems.indexOf(item) % 6 === 0) {
      item.className = "hint-vertical";
      item.innerHTML = 0;
    }
  })

  const verticalHintsArr = Array.from(document.querySelectorAll(".hint-vertical"));
  const treeVerticalHints = [5, 5, 3, 1, 5];
  for (let i = 0; i < treeVerticalHints.length; i++) {
    verticalHintsArr[i].innerHTML = treeVerticalHints[i];
  }

  for (let i = 0; i < 10; i++) {
    horizontalHints.prepend(horizontalHintsItems.cloneNode(true));
  }

  const horizontalHintsArr = Array.from(document.querySelectorAll(".hint-horizontal"));
  const treeHorizontalHints = [2, 3, 5, 3, 2, 1, 1, '', 1, 1];
    for (let i = 0; i < treeHorizontalHints.length; i++) {
      horizontalHintsArr[i].innerHTML = treeHorizontalHints[i];
    }

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

  // win game
  let arr = [];
  let correctCells = new Set();
  let incorrectCells = [];

  cellsArr.map(cell => {
    cell.addEventListener("click", () => {
      if (cellsArr.indexOf(cell) <= 9 || (cellsArr.indexOf(cell) > 10 
        && cellsArr.indexOf(cell) < 14) || cellsArr.indexOf(cell) === 17 
        || cellsArr.indexOf(cell) >= 20) {
          cell.classList.add("correct");
          arr.push(cell);
          correctCells = new Set(arr);
          console.log(correctCells.size);
        } else {
          cell.classList.toggle("incorrect");
          if (cell.className === "cell clicked incorrect") incorrectCells.push(cell);
          else incorrectCells.pop(cell);
        }

        if (correctCells.size === 19 && incorrectCells.length === 0) {
          console.log("You win!");
          window.classList.add("active");
          windowBackground.classList.add("active");
          body.style = "overflow: hidden";
          // add logic for the end of the game
        }
      })
    });

     // play again
     windowButton.addEventListener("click", () => {
      cellsArr.map((cell) => {
        cell.classList.remove("clicked");
        cell.classList.remove("correct");
      });
      window.classList.remove("active");
      windowBackground.classList.remove("active");
      body.style = "overflow: auto"
      arr = [];
    });
}

//todo
// make some responsive
// adjust dividers
// read the rules once again
// add some styles (?)