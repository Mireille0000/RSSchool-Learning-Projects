console.log("Let's get started")

// create grid
document.body.onload = addElement;

function addElement() {
  const title = document.createElement("h1");
  title.innerHTML = "Nonograms";
  const grid = document.createElement("div");
  grid.className = "grid";
  const cell = document.createElement("div");
  cell.className = "cell";
  const hints = document.createElement("div");
  hints.className = "hint";
  document.body.prepend(title, grid);

  for (let i = 0; i < 6; ++i) {
    grid.appendChild(hints.cloneNode(true));
    hints.innerHTML  = 0;
  }

  for (let i = 0; i < 30; i++) {
    grid.appendChild(cell.cloneNode(true));
  }

  const test = Array.from(document.querySelectorAll(".cell"));
  console.log(test[0]);
  console.log(test[6]);
  console.log(test[12]);
  console.log(test[18]);
  console.log(test[24]);
  test.map((item) => {
    if (test.indexOf(item) % 6 ===0 ) {
      item.className = "hint-vertical";
      item.innerHTML = 0;
    }
  })
}

const grid = document.querySelector(".grid");
console.log(grid)