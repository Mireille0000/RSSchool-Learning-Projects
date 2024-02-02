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
  cell.className = "cell";
  const hints = document.createElement("div");
  hints.className = "hint";

  
  const horizontalHints = document.createElement("div");
  const horizontalHintsItems = document.createElement("div");
  horizontalHintsItems.className = "hint-horizontal";
  horizontalHints.className = "hint-horisontal-box";

  const verticalHints = document.createElement("div");
  const verticalHintsItems = document.createElement("div");
  verticalHintsItems.className = "hint-vertical";
  verticalHints.className = "hint-vertical-box";

  document.body.prepend(title, attempts, horizontalHints, grid);

  for (let i = 0; i < 30; i++) {
    grid.appendChild(cell.cloneNode(true));
  }
  // grid.after(verticalHints);

  // for (let i = 0; i < 5; i++) {
  //   verticalHints.prepend(verticalHintsItems.cloneNode(true));
  // }

   // change
  const test = Array.from(document.querySelectorAll(".cell"));

  test.forEach((cell) => {
    cell.style = "cursor: pointer";
    cell.addEventListener("click", () => {
      cell.style = "background-color: #000; pointer-events: none";
    });
  })

  // horizontal hints
  for (let i = 0; i < 5; i++) {
    horizontalHints.prepend(horizontalHintsItems.cloneNode(true));
  }


  // vertical hints
  test.map((item) => {
    if (test.indexOf(item) % 6 === 0) {
      item.className = "hint-vertical";
      console.log(test.indexOf(item));
    }
  })
}

// todo
// show hints that are necessary to make an image (how they shoud be made??)
// add class to clicked cells
// - if a cell is correct it becomes black
// - if a cell is incorrect, a crosse appears in the cell