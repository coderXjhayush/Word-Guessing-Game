let words = {
    easy: [
        { word: "APPLE", hint: "Red fruit" },
        { word: "MANGO", hint: "Fruit king" },
        { word: "PARACETAMOL", hint: "Medicine" },
        { word: "RUSSIA", hint: "Ukraine" },
        { word: "ALBERT", hint: "Einstein" },
        { word: "BOUQUET", hint: "Bunch of flowers" },
        { word: "RAINBOW", hint: "seven colours" },
        { word: "ELEPHANT", hint: "Large animal" },
        { word: "LIBRARY", hint: "Books" },
        { word: "HOSPITAL", hint: "Doctor" },
        { word: "MOUNTAIN", hint: "Everest" },
        { word: "GIRAFFE", hint: "Tallest neck" },
        { word: "DOLPHIN", hint: "Water animal" },
        { word: "UMBRELLA", hint: "Rain" },
        { word: "PENCIL", hint: "Graphite" },
        { word: "COMPUTER", hint: "Laptop" },
        { word: "CALCULATOR", hint: "BODMAS" },
        { word: "JAIPUR", hint: "Pink city" },
        { word: "WATER", hint: "Transparent" }
    ],
    medium: [
        { word: "TITANIC", hint: "Famous ship" },
        { word: "SNEAKERS", hint: "Shoes" },
        { word: "SOLITUDE", hint: "Alone" },
        { word: "MUSTARD", hint: "Daily food oil" },
        { word: "COCACOLA", hint: "Coldrink" },
        { word: "RADIANT", hint: "Bright or shining" },
        { word: "MARSHMALLOW", hint: "Bunch of flowers or Android version" },
        { word: "LIEUTENANT", hint: "Army rank" },
        { word: "FASCINATING", hint: "Extremely interesting" },
        { word: "TONYSTARK", hint: "Robert Downey Jr." },
        { word: "BAAHUBALI", hint: "S.S. Rajamouli" },
        { word: "JHARKHAND", hint: "MS Dhoni" },
        { word: "FORRESTGUMP", hint: "Lal Singh Chaddha" },
        { word: "PROGRAMMING", hint: "C++" },
        { word: "MACHINE", hint: "3 Idiots" },
        { word: "LEARNING", hint: "Teaching" },
        { word: "NETWORK", hint: "Jio" },
        { word: "SECURITY", hint: "Hacker" },
        { word: "PARALLELOGRAM", hint: "Parallel" }
    ],
    hard: [
        { word: "SUNFLOWER", hint: "Flower having Fibonacci sequence" },
        { word: "ECLIPSE", hint: "Astronomical event" },
        { word: "WOODPECKER", hint: "Drill bird" },
        { word: "OSTRICH", hint: "Largest egg" },
        { word: "CHLOROPHYLL", hint: "Green pigment" },
        { word: "CRYPTOCURRENCY", hint: "Blockchain" },
        { word: "PARTITION", hint: "1947" },
        { word: "DENSITY", hint: "Ship floats, needle sinks" },
        { word: "POLYMORPHISM", hint: "OOPS" },
        { word: "INCONVINCIBLE", hint: "Grasped mentally" },
        { word: "INCONGROUS", hint: "Other aspects of something" },
        { word: "UNPRECEDENTED", hint: "Never done or known before" },
        { word: "COUNTERINTELLIGENCE", hint: "CIF, FBI" },
        { word: "INTERDISCIPLINARY", hint: "Fields of study" },
        { word: "UNCONSTITUTIONAL", hint: "Rules set forth in a constitution" },
        { word: "INDUSTRIALIZATION", hint: "Developing industries" },
        { word: "FRAMEWORK", hint: "Plan" },
        { word: "ARCHITECTURE", hint: "New Parliament house" },
        { word: "ENTERPRENEURSHIP", hint: "Business" },
        { word: "KAPILDEV", hint: "1983" }
    ]
};

let selectedWord = "";
let lives = 3;
let score = 0;
let username = "";

function startGame() {
    username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("user-info").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    document.getElementById("player-name").innerText = `Player: ${username}`;
}

function chooseLevel(level) {
    document.getElementById("game-area").classList.remove("hidden");
    startRound(level);
}

function startRound(level) {
    let randomIndex = Math.floor(Math.random() * words[level].length);
    let wordObject = words[level][randomIndex];
    selectedWord = wordObject.word;

    let blankWord = maskWord(selectedWord);
    document.getElementById("word-display").innerText = `Word: ${blankWord}`;
    document.getElementById("hint").innerText = `Hint: ${wordObject.hint}`;
}

function maskWord(word) {
    let blankWord = word.split("").map(letter => Math.random() < 0.5 ? "_" : letter).join("");
    return blankWord;
}

document.getElementById("submit-btn").addEventListener("click", () => {
    let userGuess = document.getElementById("user-input").value.toUpperCase();
    if (userGuess === selectedWord) {
        score += 10;
        document.getElementById("message").innerText = "Correct! 🎉";
        document.getElementById("score").innerText = score;
        startRound("easy");
    } else {
        lives -= 1;
        document.getElementById("message").innerText = `Wrong! ❌ ${lives} lives left`;
        document.getElementById("lives").innerText = lives;
        if (lives === 0) {
            document.getElementById("game-container").classList.add("hidden");
            document.getElementById("end-screen").classList.remove("hidden");

            document.getElementById("end-score").innerText = score;

            if (score >= 10) {
                document.getElementById("final-message").innerText = `Well played, ${username}!`;
            } else {
                document.getElementById("final-message").innerText = `Bad luck, ${username}! Try again next time.`;
            }
        }
    }
});

function restartGame() {
    lives = 3;
    score = 0;
    document.getElementById("lives").innerText = lives;
    document.getElementById("score").innerText = score;
    document.getElementById("user-input").value = "";
    document.getElementById("message").innerText = "";
    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("user-info").classList.remove("hidden");
}
