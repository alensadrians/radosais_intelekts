const wordList = [
    'inovācija',
    'iedvesma',
    'kreativitāte',
    'elastīgums',
    'oriģinalitāte',
    'eksperimentēšana',
    'intuīcija',
    'vizualizācija',
    'spontanitāte',
    'iztēle',
    'transformācija',
    'metafora'
];

const wordDefinitions = {
    'inovācija': 'Jaunumu radīšana vai ieviešana, kuras pamatā ir oriģinālas idejas, radošas pieejas un netradicionāli risinājumi.',
    'iedvesma': 'Emocionāls un intelektuāls stāvoklis, kas izraisa jaunu ideju un koncepciju veidošanos, bieži kā atbildi uz ārējiem stimuliem vai iekšēju refleksiju.',
    'kreativitāte': 'Spēja radīt kaut ko jaunu un vērtīgu, piemēram, idejas, mākslas darbus, tehnoloģijas vai stratēģijas. Tā ietver neparastu domāšanas veidu un elastību pieejā problēmu risināšanai.',
    'elastīgums': 'Spēja ātri un efektīvi pielāgoties jaunām situācijām vai informācijai, izstrādājot jaunas pieejas vai risinājumus problēmām.',
    'oriģinalitāte': 'Spēja radīt idejas, kas ir unikālas un atšķirīgas no jau esošajām. Tas ir viens no galvenajiem radošuma aspektiem.',
    'eksperimentēšana': 'Atvērtība izmēģināt jaunas idejas un pieejas, dažkārt izmantojot nezināmus vai riskantus ceļus, lai radītu jaunus risinājumus.',
    'intuīcija': 'Ātra un automātiska izpratne vai lēmumu pieņemšana, kas balstās uz iekšējām sajūtām un zemapziņas procesiem, bieži vien bez apzinātas loģiskas analīzes. Tā var būt īpaši svarīga radošuma procesā.',
    'vizualizācija': 'Spēja garīgi veidot attēlus vai konceptus, kas palīdz iztēloties jaunas idejas, scenārijus vai iespējas, īpaši, ja tās vēl nav realizētas.',
    'spontanitāte': 'Spēja ātri un bez iepriekšējas sagatavošanās radīt vai reaģēt uz jauniem stimuliem, kas var būt kritiski radošuma procesā.',
    'iztēle': 'Spēja garīgi veidot un pārdomāt jaunas situācijas, attēlus vai idejas, kas var būt pamatā jauniem radošiem risinājumiem vai mākslas darbiem.',
    'transformācija': 'Process, kurā esošās idejas, produkti vai risinājumi tiek pārveidoti par kaut ko jaunu, izmantojot radošu pieeju.',
    'metafora': 'Simboliska vai tēlaina izteiksme, kas izmanto līdzību starp dažādiem jēdzieniem vai objektiem, lai radītu dziļāku izpratni vai iedvesmotu jaunas idejas.'
};


let targetWord = wordList[Math.floor(Math.random() * wordList.length)];
let guessesMade = 0;
const maxGuesses = 6;
let currentGuess = '';
let currentRowIndex = 0;
let wordGridRows = [];
const keyboardLetters = {}; // To store references to keyboard key elements
let wordLength = targetWord.length; // Dynamically capture the word length

// Event listener to start the game
document.getElementById('start-game').addEventListener('click', function () {
    document.getElementById('pre-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    resetGame();
    createGrid();
    createKeyboard();
});

// Create the word grid
function createGrid() {
    const wordGrid = document.getElementById('word-grid');
    wordGrid.innerHTML = '';
    wordGridRows = [];

    wordGrid.style.gridTemplateColumns = `repeat(${wordLength}, 60px)`; // Dynamic columns based on word length

    for (let i = 0; i < maxGuesses; i++) {
        const row = [];
        for (let j = 0; j < wordLength; j++) {
            const box = document.createElement('div');
            box.classList.add('letter-box');
            wordGrid.appendChild(box);
            row.push(box);
        }
        wordGridRows.push(row);
    }
}

// Create the keyboard
function createKeyboard() {
    const keyboardContainer = document.getElementById('keyboard');
    keyboardContainer.innerHTML = '';

    const keyboardLayout = 'qwertyuiopasdfghjklzxcvbnmāčēģīķļņšūž'.split(''); // Latvian alphabet included
    keyboardLayout.forEach((letter) => {
        const key = document.createElement('div');
        key.classList.add('key');
        key.textContent = letter.toUpperCase();
        keyboardContainer.appendChild(key);
        keyboardLetters[letter] = key;

        // Add event listener for on-screen keyboard keys
        key.addEventListener('click', () => handleKeyPress(letter));
    });
}

// Handle key presses
document.addEventListener('keydown', keydownListener);

function keydownListener(event) {
    if (document.getElementById('game-container').style.display === 'none') return;

    if (event.key === 'Enter') {
        handleEnter();
    } else if (event.key === 'Backspace') {
        if (currentGuess.length > 0) {
            currentGuess = currentGuess.slice(0, -1);
            updateRow();
        }
    } else if (/^[a-zA-Zāčēģīķļņšūž]$/.test(event.key.toLowerCase())) { // Update regex to accept Latvian letters
        handleKeyPress(event.key.toLowerCase());
    }
}

// Handle key press from both physical and on-screen keyboards
function handleKeyPress(key) {
    if (currentGuess.length < wordLength) { // Limit guess to the dynamic word length
        currentGuess += key;
        updateRow();
    }
}

// Enter button click event
document.getElementById('enter-button').addEventListener('click', handleEnter);

function handleEnter() {
    if (currentGuess.length === wordLength) { // Ensure guess matches word length
        checkGuess(currentGuess);
    }
}

function updateRow() {
    const currentRow = wordGridRows[currentRowIndex];
    for (let i = 0; i < wordLength; i++) {
        currentRow[i].textContent = currentGuess[i] ? currentGuess[i].toUpperCase() : '';
    }
}

// Check the guess and update the keyboard colors
function checkGuess(guess) {
    const currentRow = wordGridRows[currentRowIndex];
    const correctWord = targetWord.split('');
    const guessedWord = guess.split('');
    let delay = 0;

    const letterStatus = Array(wordLength).fill('absent');

    // First pass to mark correct letters
    for (let i = 0; i < wordLength; i++) {
        if (guessedWord[i] === correctWord[i]) {
            letterStatus[i] = 'correct';
            correctWord[i] = null;
        }
    }

    // Second pass to mark present letters
    for (let i = 0; i < wordLength; i++) {
        if (letterStatus[i] === 'correct') continue;
        if (correctWord.includes(guessedWord[i])) {
            letterStatus[i] = 'present';
            correctWord[correctWord.indexOf(guessedWord[i])] = null;
        }
    }

    guessedWord.forEach((letter, i) => {
        setTimeout(() => {
            const box = currentRow[i];
            box.classList.add('reveal', letterStatus[i]);
            box.textContent = letter.toUpperCase();

            updateKeyboardKeyColor(letter, letterStatus[i]); // Update keyboard colors here

        }, delay);
        delay += 500;
    });

    setTimeout(() => {
        if (guess === targetWord) {
            showDefinition(true); // Pass true to indicate the word was guessed
            setTimeout(showRestartButton, 4000); // Show restart button after 4 seconds
            smoothScrollToDefinition();
        } else if (guessesMade >= maxGuesses - 1) {
            showDefinition(false); // Pass false to indicate the word wasn't guessed
            setTimeout(showRestartButton, 4000); // Show restart button after 4 seconds
            smoothScrollToDefinition();
        } else {
            guessesMade++;
            currentGuess = '';
            currentRowIndex++;
        }
    }, delay);

    document.removeEventListener('keydown', keydownListener);
    document.getElementById('enter-button').disabled = true;

    setTimeout(() => {
        document.addEventListener('keydown', keydownListener);
        document.getElementById('enter-button').disabled = false;
    }, delay);
}

// Function to update keyboard key colors
function updateKeyboardKeyColor(letter, status) {
    const keyElement = keyboardLetters[letter.toLowerCase()];
    
    if (keyElement) {
        if (status === 'correct') {
            keyElement.classList.remove('present', 'absent');
            keyElement.classList.add('correct');
        } else if (status === 'present' && !keyElement.classList.contains('correct')) {
            keyElement.classList.remove('absent');
            keyElement.classList.add('present');
        } else if (!keyElement.classList.contains('correct') && !keyElement.classList.contains('present')) {
            keyElement.classList.add('absent');
        }
    }
}

function showDefinition(isGuessed) {
    const definition = wordDefinitions[targetWord];
    const triesTitle = document.getElementById('tries-title');
    const messages = [
        "WOW JŪS NEESAT CILVĒKS!", // 1 try
        "Tas bija ļoti iespaidīgi!", // 2 tries
        "Malacis! Ar trim mēģinājumiem!", // 3 tries
        "Četri ir lielisks rezultāts!", // 4 tries
        "Varbūt prasīja piecus mēģinājumus, bet galā uzminējāt!", // 5 tries
        "Bijāt uz plāna ledus, bet uzminējāt!" // 6 tries
    ];
    

    if (isGuessed) {
        triesTitle.textContent = messages[guessesMade];
    } else {
        triesTitle.textContent = "Jūs netrāpat 100% no iespējām ko nemēģināt. Veiksmi nākamreiz!";
    }
    triesTitle.style.display = 'block'; // Force the title to be visible
    console.log(triesTitle.textContent); // Log to check if it's getting updated
    
    if (definition) {
        const formattedWord = targetWord.charAt(0).toUpperCase() + targetWord.slice(1).toLowerCase();
        document.getElementById('game-over-title').style.display = 'block';
        document.getElementById('definition').innerText = `${formattedWord}: ${definition}`;
        document.getElementById('definition-screen').style.display = 'flex';
    }
}

function smoothScrollToDefinition() {
    const definitionScreen = document.getElementById('definition-screen');
    window.scrollTo({
        top: definitionScreen.offsetTop,
        behavior: 'smooth'
    });
}

function showRestartButton() {
    const restartButton = document.getElementById('restart-game');
    restartButton.style.display = 'block';
    setTimeout(() => {
        restartButton.style.opacity = '1';
    }, 10);

    restartButton.addEventListener('click', resetGame);
}

function resetGame() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    setTimeout(() => {
        guessesMade = 0;
        currentGuess = '';
        currentRowIndex = 0;
        wordGridRows = [];
        targetWord = wordList[Math.floor(Math.random() * wordList.length)];
        wordLength = targetWord.length; // Recalculate word length on reset
        document.getElementById('message').innerText = '';
        document.getElementById('definition').innerText = '';
        document.getElementById('definition-screen').style.display = 'none';
        document.getElementById('restart-game').style.opacity = '0';
        document.getElementById('restart-game').style.display = 'none';

        // Reset keyboard colors
        for (let key in keyboardLetters) {
            keyboardLetters[key].classList.remove('correct', 'present', 'absent');
        }

        createGrid();
        createKeyboard();
    }, 500);
}
