// question/ answer array

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

console.log(questions[1])

// page content
let errorsCounter = 0;
let lettersArr = [];

const title = document.createElement("h1");
title.innerHTML = `Hangman Game <img src="./gallows/hangman-icon.webp" alt="hangman image">`;
document.body.append(title);

const pageContent = document.createElement("div");
pageContent.className = "page-content"
pageContent.innerHTML = `
<div class="gallows-constraction">
    <img src="./gallows/hangman-0.svg" alt="gallows">
</div>
<div class="interactive-block">
    <div class="word"></div>
    <p class="hint">Hint: <b>Some hint </b></p>
    <p class="incorrect-guesses">Incorrect Guesses:<b> ${errorsCounter} / 6 </b></p>

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

// modal windows

const modalWindowWin = document.createElement("div");
modalWindowWin.className = "modal-window";
modalWindowWin.innerHTML = `
<div class="modal-window-content">
    <img src="./gallows/win-icon.png" alt="you win">
    <p class="game-message">You win!</p>
    <p class="secret-word">Secret word: <b> </b> </p>
    <button class="play-button">Play again</button>
</div>
`;
document.body.prepend(modalWindowWin);

// secret word (show the hint and as many spans as word.length is)

const hintText = document.querySelector(".hint b"),
    secretWord = document.querySelector(".word"),
    incorrectGuesse = document.querySelector(".incorrect-guesses b"),
    hangmanMembers = document.querySelector(".gallows-constraction img"),
    modalWindow = document.querySelector(".modal-window"),

    gameMessage = document.querySelector(".game-message"),
    showSecretWord = document.querySelector(".secret-word"),
    playAgainButton = document.querySelector(".play-button");
    console.log(hangmanMembers.src);
let currentSecretWord;

const showSecrectWordInfo = () => {
    const {word, hint} = questions[Math.floor(Math.random() * questions.length)];
    hintText.innerHTML = hint;
    currentSecretWord = word;
    console.log(word);
    resetGame();
    secretWord.innerHTML = word.split("").map(() => `<span class="char">__</span>`).join(" ");
}

showSecrectWordInfo();

// screen keyboard

const buttonsArray = Array.from(document.querySelectorAll(".keyboard-button"));

const gameOver = (isWin) => {
    modalWindow.querySelector("img").src = `./gallows/${isWin ? 'win-icon' : 'game-over'}.png`
    gameMessage.innerHTML = `${isWin ? 'You win!' : 'Game Over'}`;
    showSecretWord.innerHTML = `Secret word: ${currentSecretWord}`;
    modalWindow.classList.add("active");
}

buttonsArray.forEach((button) => (
    button.addEventListener("click", () => {
        button.classList.add('disabled');
        function enterLetter(button, letter){
            if(currentSecretWord.includes(letter)) {
                currentSecretWord.split("").map((char, index) => {
                    if (char === letter) {
                        secretWord.querySelectorAll("span")[index].innerHTML = char;
                        lettersArr.push(char);
                    }
                })
            } else {
                errorsCounter++;
                // incorrectGuesse.innerHTML = ` ${errorsCounter} / 6`;
                hangmanMembers.src = `./gallows/hangman-${errorsCounter}.svg`;
            }
            incorrectGuesse.innerHTML = ` ${errorsCounter} / 6`;

            if (errorsCounter === 6) {
                // incorrectGuesse.innerHTML = `6 / 6`;
                return gameOver(false);
            }
    
            if (lettersArr.length === currentSecretWord.length) {
                console.log("Win");
                return gameOver(true);
            }
        }
        enterLetter(button, button.innerHTML);
    })
))


// play again button

playAgainButton.addEventListener("click", showSecrectWordInfo);

function resetGame() {
    const buttonsArray = Array.from(document.querySelectorAll(".keyboard-button"));
    lettersArr = [];
    errorsCounter = 0;
    hangmanMembers.src = `./gallows/hangman-${errorsCounter}.svg`;
    buttonsArray.forEach((button) => button.classList.remove('disabled'));
    secretWord.innerHTML = currentSecretWord.split("").map(() => `<span class="char">__</span>`).join(" ");
    incorrectGuesse.innerHTML = ` ${errorsCounter} / 6`;
    modalWindow.classList.remove("active");
}

console.log(lettersArr);
