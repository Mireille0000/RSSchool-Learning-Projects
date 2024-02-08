console.log("Let's get started");
const body = document.querySelector("body");

// create grid

document.body.onload = addElements;

function addElements() {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  const title = document.createElement("h1");
  title.innerHTML = `Nonograms <img alt="🌳" src="data:image/png;base64,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">`;

  const gridWrapper = document.createElement("div");
  gridWrapper.className = "grid-wrapper";

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
  verticalHints.className = "hint-vertical-box";

  const menu = document.createElement("div");
  menu.className = "buttons";
  const settings = document.createElement("div");
  settings.className = "settings";
  const settingsItems = document.createElement("div");
  settingsItems.className = "settings-item"
  const changeTheme = document.createElement("button");
  changeTheme.className = "theme";

  const resetButton = document.createElement("button");
  resetButton.className = "button-reset";
  resetButton.innerHTML = "Reset the game";

  document.body.prepend(wrapper);
  wrapper.append(title, gridWrapper, menu);
  gridWrapper.prepend(horizontalHints, grid);

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

  // reset button

  menu.prepend(settings, resetButton);
  for (let i = 0; i < 2; i++) {
    settings.prepend(settingsItems.cloneNode(true));
  }
  const settingsList = document.querySelectorAll(".settings-item");
  console.log(settingsList);
  settingsList[0].innerText = "Choose theme";

  for (let i = 0; i < 2; i++) {
    settingsList[0].prepend(changeTheme.cloneNode(true));
  }

  const themes = Array.from(document.querySelectorAll(".theme"));
  themes[0].innerHTML = "Light";
  themes[1].innerHTML = "Dark";

  themes.map((theme, index) => {
    console.log(index);
    theme.addEventListener("click", () => {
      if (index === 1) {
        body.classList.add("dark");
        horizontalHintsArr.map((hint) => {
          hint.style = "border: 1px solid rgba(126, 155, 153, 0.333)";
        })
        verticalHintsArr.map((hint) => {
          hint.style = "border-bottom: 1px solid rgba(126, 155, 153, 0.333); border-left: 1px solid rgba(126, 155, 153, 0.333)";
        })
        cellsArr.map((cell) => {
          cell.style = "border: 1px solid rgba(35, 35, 2, 0.333);"
        })
      } else {
        body.classList.remove("dark");
        horizontalHintsArr.map((hint) => {
          hint.style = "border: 1px solid rgba(51, 68, 67, 0.333);";
        })

        cellsArr.map((cell) => {
          cell.style = "border: 1px solid rgba(115, 116, 83, 0.333)"
        })
      }
    })
  })
  console.log(themes);
;
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
  windowText.innerHTML = `TREE <br/> Great! You have solved the nonogram!`

  const windowButton = document.createElement("button");
  windowButton.className = "window-buttton";
  windowButton.innerHTML = "Play again";
  
  wrapper.append(window);
  wrapper.append(windowBackground)
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
  const audioModalWindow = new Audio();
  audioModalWindow.src = "./winsquare.mp3";
  // console.log(audioModalWindow.ended);

  cellsArr.map(cell => {
    cell.addEventListener("click", () => {
      if (cellsArr.indexOf(cell) <= 9 || (cellsArr.indexOf(cell) > 10 
        && cellsArr.indexOf(cell) < 14) || cellsArr.indexOf(cell) === 17 
        || cellsArr.indexOf(cell) >= 20) {
          cell.classList.toggle("correct");
          if (cell.className === "cell clicked correct") {
            arr.push(cell);
          }
          else {
            arr.pop(cell);
          }

          // correctCells = new Set(arr);
          console.log(arr.length);
          console.log(correctCells);
        } else {
          cell.classList.toggle("incorrect");
          if (cell.className === "cell clicked incorrect") incorrectCells.push(cell);
          else incorrectCells.pop(cell);
          console.log(incorrectCells)
        }

        // correctCells.size === 19
        if (arr.length === 19 && incorrectCells.length === 0) {
          console.log("You win!");
          window.classList.add("active");
          windowBackground.classList.add("active");
          body.style = "overflow: hidden";
          audioModalWindow.play();
        }
      })
    });

    // reset the game

    resetButton.addEventListener("click", () => {
      cellsArr.map((cell) => {
        cell.classList.remove("clicked");
        cell.classList.remove("correct");
        cell.classList.remove("incorrect");
        // console.log(correctCells);
        // console.log(incorrectCells);
        arr = [];
        incorrectCells = [];
      });
    })

     // play again button
     windowButton.addEventListener("click", () => {
      cellsArr.map((cell) => {
        cell.classList.remove("clicked");
        cell.classList.remove("correct");
      });
      audioModalWindow.load()
      window.classList.remove("active");
      windowBackground.classList.remove("active");
      body.style = "overflow: auto"
      arr = [];
    });
}

console.log(`Score: 80/250, basic requirements are accomplished`)