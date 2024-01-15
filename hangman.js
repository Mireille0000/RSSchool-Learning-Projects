// page content

const title = document.createElement("h1");
title.innerHTML = "Hangman Game";
document.body.append(title);


const pageContent = document.createElement("div");
pageContent.className = "page-content"
pageContent.innerHTML = `
<div class="gallows-constraction">
    <img src="./gallows/hangman-0.svg" alt="gallows">
</div>
<div class="interactive-part">
    <div class="word">
        <span>__</span>
        <span>__</span>
        <span>__</span>
        <span>__</span>
        <span>__</span>
    </div>
    <p><b>Hint:</b> Some hint</p>
    <p><b>Incorrect Guesses:</b> 0 / 6</p>

    <div class="screen-keyboard">
        <button class="keyboard-button">a</button>
        <button class="keyboard-button">b</button>
        <button class="keyboard-button">c</button>
        <button class="keyboard-button">d</button>
        <button class="keyboard-button">e</button>
        <button class="keyboard-button">f</button>
        <button class="keyboard-button">g</button>
        <button class="keyboard-button">h</button>
        <button class="keyboard-button">i</button>
        <button class="keyboard-button">j</button>
        <button class="keyboard-button">k</button>
        <button class="keyboard-button">l</button>
        <button class="keyboard-button">m</button>
        <button class="keyboard-button">n</button>
        <button class="keyboard-button">o</button>
        <button class="keyboard-button">p</button>
        <button class="keyboard-button">q</button>
        <button class="keyboard-button">r</button>
        <button class="keyboard-button">s</button>
        <button class="keyboard-button">t</button>
        <button class="keyboard-button">u</button>
        <button class="keyboard-button">v</button>
        <button class="keyboard-button">w</button>
        <button class="keyboard-button">x</button>
        <button class="keyboard-button">y</button>
        <button class="keyboard-button">z</button>
    </div>
</div>
`;
document.body.append(pageContent);

const screenKeyboard = document.querySelector(".screen-keyboard");
const buttonsArray = document.querySelectorAll(".keybord-button");

console.log(buttonsArray.length);







// title
// const title = document.createElement("h1");
// title.innerHTML = "Hangman Game";
// document.body.append(title);

// const gallows = document.createElement("div");
// gallows.className = "gallows";
// gallows.style = "width: 20px; height: 2px; background: red";
// document.body.append(gallows);

// gallows
// const gallowsImage = document.createElement("img");
// gallowsImage.src = "./gallows/hangman-0.svg";
// gallowsImage.alt = "gallows";
// let a = document.querySelector(".gallows");
// document.body.prepend(gallowsImage);

// word

// hint and incorrect guesses

// const hint = document.createElement("div");
// hint.innerHTML = `Hint:`;
// hint.classList = "hint";
// document.body.append(hint);

// const incorrectGuesses = document.createElement("div");
// incorrectGuesses.innerHTML = `Incorrect Guesses:`;
// incorrectGuesses.classList = "incorrect-guesses";
// document.body.append(incorrectGuesses);

// keyboard
// let arr = [];

// function getKeyboard() {
//     let fragment = new DocumentFragment();

//     for (let i = 97; i <= 122; i++) {
//         let button = document.createElement("button");
//         button.append(String.fromCharCode(i));
//         arr.push(button);
//         fragment.append(button);

//     }
//     return fragment;
// }

// document.body.append(getKeyboard());
// arr.forEach(button => {
//     button.className = "button-keyboard";
// })

// impelement some part of the task (page content, some simple requirements, some functionnality)
