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
  // cell.className = "cell";
  const hints = document.createElement("div");
  hints.className = "hint";

  
  const horizontalHints = document.createElement("div");
  const horizontalHintsItems = document.createElement("div");
  horizontalHintsItems.className = "hint-horizontal";
  horizontalHints.className = "hint-horisontal-box";

  const verticalHints = document.createElement("div");
  const verticalHintsItems = document.createElement("div");
  // verticalHintsItems.className = "hint-vertical";
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

  // for tree 0 - 9, 12, 16 - 18, 20 - 25
  // const a = cellsArr.map((cell) => { 
  //   if (cellsArr.indexOf(cell) < 10 || cellsArr.indexOf(cell) === 12
  //   || (cellsArr.indexOf(cell) > 15 && cellsArr.indexOf(cell) < 19) || cellsArr.indexOf(cell) > 19) {
  //     return cell;
  //   }
  //   return;
  // })

  // let b = a.filter(item => item !== undefined)

  // b.map(cell => {
  //   cell.addEventListener("click", () => {
  //       cell.classList.toggle("correct");
  //     });
  // })

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

  const gameFieldTree = Array(19).fill("correct");
  console.log(gameFieldTree);
}

// todo
// show hints that are necessary to make an image (how they shoud be made??)
// add class to clicked cells
// - if a cell is correct it becomes black
// - if a cell is incorrect, a crosse appears in the cell