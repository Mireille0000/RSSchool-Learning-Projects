// Question/ answer obj

const questions = [
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
]

console.log(questions.length);

// page content

const title = document.createElement("h1");
title.innerHTML = `Hangman Game <img src="./gallows/hangman-icon.webp" alt="hangman image">`;
document.body.append(title);


const pageContent = document.createElement("div");
pageContent.className = "page-content"
pageContent.innerHTML = `
<div class="gallows-constraction">
    <img src="./gallows/hangman-0.svg" alt="gallows">
</div>
<div class="interactive-part">
    <div class="word">
        <span class="char">__</span>
        <span class="char">a</span>
        <span class="char">__</span>
        <span class="char">__</span>
        <span class="char">__</span>
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
