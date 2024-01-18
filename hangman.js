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
const body = document.querySelector("body"); //
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
    screenKeyboard = document.querySelector(".screen-keyboard"), //
    modalWindow = document.querySelector(".modal-window"),

    gameMessage = document.querySelector(".game-message"),
    showSecretWord = document.querySelector(".secret-word"),
    playAgainButton = document.querySelector(".play-button");
let currentSecretWord;
let wrongLettersArr = [];
let secretWordArr;

const showSecrectWordInfo = () => {
    const {word, hint} = questions[Math.floor(Math.random() * questions.length)];
    hintText.innerHTML = hint;
    currentSecretWord = word;
    console.log(word);
    resetGame();
    secretWord.innerHTML = word.split("").map(() => `<span class="char">__</span>`).join(" ");
}

showSecrectWordInfo();

const buttonsArray = Array.from(document.querySelectorAll(".keyboard-button"));

// physical keyboard
document.addEventListener("keydown", (event) => {
    const keyName =  event.key;
    buttonsArray.filter((button) => {
        if ((button.innerHTML === keyName)) {
            button.classList.add("disabled");
        }
    })

    secretWordArr = currentSecretWord.split("").filter((letter, index) => {
        return currentSecretWord.indexOf(letter) === index
    });

    function enterPhysicalKeyboard(){
        if(currentSecretWord.includes(keyName)) {
            currentSecretWord.split("").map((char, index) => {
                if (char === keyName) {
                    secretWord.querySelectorAll("span")[index].innerHTML = char;
                    if (!lettersArr.includes(char)) {
                        lettersArr.push(char);
                    }
                }
            })
        } else {
            if (/[a-zA-Z]/.test(keyName) && keyName.length < 2){
                if(!wrongLettersArr.includes(keyName)) {
                    errorsCounter++;
                    wrongLettersArr.push(keyName);
                    hangmanMembers.src = `./gallows/hangman-${errorsCounter}.svg`;
                }
            }
        }
        incorrectGuesse.innerHTML = ` ${errorsCounter} / 6`;

        if (wrongLettersArr.length === 6) {
            return gameOver(false);
        }
        if (lettersArr.length === secretWordArr.length) {
            return gameOver(true);
        }
    }
    enterPhysicalKeyboard();
})

// screen keyboard
buttonsArray.forEach((button) => (
    button.addEventListener("click", () => {
        button.classList.add("disabled");
        function enterScreenKeyboard(button, letter){
            secretWordArr = currentSecretWord.split("").filter((letter, index) => {
                return currentSecretWord.indexOf(letter) === index});

            if(currentSecretWord.includes(letter)) {
                currentSecretWord.split("").map((char, index) => {
                    if (char === letter) {
                        secretWord.querySelectorAll("span")[index].innerHTML = char;
                        if(!lettersArr.includes(char)) {
                            lettersArr.push(char);
                        }
                        // lettersArr.push(char);
                        console.log(lettersArr);
                    }
                })
            } else {
                if (/[a-zA-Z]/.test(letter) && letter.length < 2){
                    // errorsCounter++;
                    if(!wrongLettersArr.includes(letter)) {
                        errorsCounter++;
                        wrongLettersArr.push(letter);
                        hangmanMembers.src = `./gallows/hangman-${errorsCounter}.svg`;
                    }
                    console.log(wrongLettersArr.length);
                }
            }
            incorrectGuesse.innerHTML = ` ${errorsCounter} / 6`;

            if (wrongLettersArr.length === 6) {
                return gameOver(false);
            }
    
            if (lettersArr.length === secretWordArr.length) {
                return gameOver(true);
            }
        }
        enterScreenKeyboard(button, button.innerHTML);
    })
))

function stopProp(event) {
    event.stopPropagation();
    console.log("please");
}

// game over 
const gameOver = (isWin) => {
    modalWindow.querySelector("img").src = `./gallows/${isWin ? 'win-icon' : 'game-over'}.png`
    gameMessage.innerHTML = `${isWin ? 'You win!' : 'Game Over'}`;
    showSecretWord.innerHTML = `Secret word: ${currentSecretWord}`;
    modalWindow.classList.add("active");
    body.style.overflow = "hidden";

    body.addEventListener("keydown", stopProp);
}

// play again button
playAgainButton.addEventListener("click", showSecrectWordInfo);

function resetGame() {
    const buttonsArray = Array.from(document.querySelectorAll(".keyboard-button"));
    lettersArr = [];
    wrongLettersArr = [];
    errorsCounter = 0;
    secretWordArr;
    hangmanMembers.src = `./gallows/hangman-${errorsCounter}.svg`;
    buttonsArray.forEach((button) => button.classList.remove('disabled'));
    secretWord.innerHTML = currentSecretWord.split("").map(() => `<span class="char">__</span>`).join(" ");
    incorrectGuesse.innerHTML = ` ${errorsCounter} / 6`;
    modalWindow.classList.remove("active");
    body.style.overflow = "auto";
    body.removeEventListener("keydown", stopProp);
}