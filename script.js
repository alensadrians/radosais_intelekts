const wordList = [
    'inovācija',
    'iedvesma',
    'iztēle',
    'patents',
    'ideja',
    'dizains',
    'dati',
    'aizsargāt',
    'orģināls',
    'neatklāt',
    'palīdzība',
    'dizainparaugs',
    'izpēte',
    'autortiesības',
    'pirātisms',
    'plaģiātisms',
    'risinājums',
    'tiesības',
    'jauns',
    'īstenot',
    'vēsture',
    'ražot',
    'īpašums',
    'produkts',
    'publisks',
    'lietot',
    'netirgo',
    'iesniegt',
    'līgums',
    'sarežģīti',
    'valde',
    'iesniegums',
    'detalizēts',
    'apraksts',
    'pieteikums',
    'rezultāts',
    'krāsa',
    'forma',
    'investors',
    'reģistrēt',
    'gudrs',
    'tirgus',
    'darbs',
    'c',
    'r',
    'autors',
    'datubāze',
    'audiovizuāls',
    'prioritāte',
    'novitāte',
    'dizainers',
    'skaņa',
    'blakustiesības'

    
];

const wordDefinitions = {
    'inovācija': 'jaunumu radīšana vai ieviešana, kuras pamatā ir oriģinālas idejas, radošas pieejas un netradicionāli risinājumi',
    'iedvesma': 'iekšējās aktivitātes un jūtu intensitātes palielināšanās, garīgo un fizisko spēku sasprindzinājums, kas pēkšņi paaugstina radošā darba produktivitāti',
    'iztēle': 'spēja garīgi veidot un pārdomāt jaunas situācijas, attēlus vai idejas, kas var būt pamatā jauniem radošiem risinājumiem vai mākslas darbiem',
    'patents': 'intelektuālā īpašuma veids, kas aizsargā izgudrojumus. Izgudrojums var būt ierīce, paņēmiens, viela vai bioloģisks materiāls',
    'ideja': 'intelektuālais īpašums bieži vien sākas ar ideju ģenerēšanu, jo tieši idejas veido pamatu inovācijām - tehnoloģijām, mākslinieciskām izpausmēm vai biznesa risinājumiem',
    'dizains': 'attiecas uz vizuālo vai funkcionālo objektu veidošanu, kas ietver gan estētiku, gan funkcionalitāti - radīt jaunas formas, praktiskus risinājumus',
    'dati': 'ļauj Cilvēkiem saprast tirgus tendences, lietotāju vajadzības vai tehnoloģiskos progresus, to izmantošana palīdz attīstīt jaunas idejas vai uzlabot esošos dizainus un produktus',
    'aizsargāt': 'bez patenta, preču zīmes, autortiesību un dizainparaugu īpašnieka atļaujas aizsargāto lietu nedrīkst īstenot, lietot, izplatīt un pārdot noteiktu laiku noteiktā teritorijā',
    'orģināls': 'pirmreizējs, autora paša radīts, nav iepriekš publiskots vai lietots',
    'neatklāt': 'neatklāj izgudrojumu nekāda veida publikācijās un prezentācijās pirms patenta pieteikuma iesniegšanas Patentu valdē',
    'palīdzība': 'patenta pieteikuma sastādīšana var būt sarežģīta, tādēļ izgudrotāji meklē padomu pie kvalificētiem patentu profesionāļiem – patentpilnvarniekiem',
    'dizainparaugs': 'izstrādājuma ārējais izskats - forma, apveids, krāsa, virsmas īpatnības (iepakojumi, grafiskus simboli, zīmējumi, telpu noformējumi, šrifti, atsevišķas izstrādājuma detaļas)',
    'izpēte': 'pirms preču zīmes reģistrācijas jāparliecinas vai tā atšķiras no citām preču zīmēm',
    'autortiesības': 'autortiesības aizsargā autora radošās darbības rezultātā radītus darbus (grāmatas, mūziku, filmas, lugas, gleznas, skulptūras, fotogrāfijas, būves)',
    'pirātisms': 'neatļauta intelektuālā īpašuma izplatīšana, zādzība, pavairošana, kopēšana, glabāšana, pārdošana vai cita veida izmantošana (aizsargāts ar Autortiesību likumu)',
    'plaģiātisms': 'apzināta vai neapzināta sveša darba vai idejas pilnīga vai daļēja piesavināšanās, uzdodot to par savu un nenorādot patieso autoru',
    'risinājums': 'ideja vai tehnoloģija, kas atrisina konkrētu problēmu un var tikt aizsargāta ar patentiem',
    'tiesības': 'likumā noteiktas pilnvaras vai privilēģijas attiecībā uz intelektuālā īpašuma izmantošanu',
    'jauns': 'oriģināla ideja vai izgudrojums, kas vēl nav zināms sabiedrībai, un var tikt aizsargāts ar intelektuālo īpašumu',
    'īstenot': 'praktiski izmantot vai ieviest jaunu izgudrojumu, tehnoloģiju vai ideju',
    'vēsture': 'intelektuālā īpašuma attīstība un piemērošanās mūsdienu pasaulei ir nākusi iespaidīgu ceļu',
    'ražot': 'radīt fizisku vai digitālu produktu, kas var tikt aizsargāts ar intelektuālo īpašumu',
    'īpašums': 'nemateriālas vai materiālas vērtības, kas pieder indivīdam vai uzņēmumam un ir aizsargātas ar likumu (kaut kas, kas kādam pieder)',
    'produkts': 'kaut kas radīts vai izstrādāts, ko var komercializēt un aizsargāt ar intelektuālo īpašumu',
    'publisks': 'ideja, izgudrojums vai darbs, kas pieejams sabiedrībai',
    'lietot': 'piešķirtās tiesības vai licenzes izmantošana, lai pasargātu savus darbus',
    'netirgo': 'produktu vai izgudrojumu, kas nav pieejams pārdošanai vai komerciālai izmantošanai. Sākumā to vajag aizsargāt!',
    'iesniegt': 'pieteikuma nodošana atbildīgajām iestādēm (Patentu valde, Eiropas Patentu iestāde, utt.) intelektuālā īpašuma aizsardzībai',
    'līgums': 'juridisks dokuments, kas nosaka noteikumus starp pusēm par autortiesību nodošanu vai licencēšanu',
    'sarežģīti': 'patenta pieteikuma sastādīšana, tādēļ meklē padomu pie kvalificētiem patentu profesionāļiem – patentpilnvarniekiem',
    'valde': 'iestāde vai organizācija, kas uzrauga intelektuālā īpašuma tiesību piemērošanu (piem. Latvijā - Patentu valde)',
    'iesniegums': 'oficiāls pieteikums intelektuālā īpašuma aizsardzībai, piemēram, patentu vai preču zīmei',
    'detalizēts': 'precīzs apraksts par izgudrojumu vai darbu, lai nodrošinātu tā aizsardzību pēc iespējas labāk',
    'apraksts': 'dokuments, kas izskaidro intelektuālā īpašuma būtību, piemēram, izgudrojuma specifikācija',
    'pieteikums': 'iesniegums intelektuālā īpašuma reģistrācijai',
    'rezultāts': 'tavs darbs tiek aizsargāts no kopēšanas, jo tu izvēlējies to iesniegts patentu valdē',
    'krāsa': 'krāsu var aizsargāt kā daļu no preču zīmes, ja tā ir unikāla un saistīta ar zīmolu',
    'forma': 'produkts, kura dizainu un izskatu var aizsargāt ar patentu',
    'investors': 'persona vai uzņēmums, kas sniedz finansiālu atbalstu izgudrojuma attīstīšanai',
    'reģistrēt': 'oficiāla pieteikuma iesniegšana, lai aizsargātu intelektuālo īpašumu',
    'gudri': 'aizsargāt savas preču zīmes, lai neviens neizdomātu tās izmantot',
    'tirgus': 'kopums, ar kura palīdzību pārdevēji un pircēji, brīvprātīgi vienojas par preču vai pakalpojumu apmaiņu. Tirgus izpēte var palīdzēt ar orģinālas inovācijas radīšanu.',
    'darbs': 'autora radošās darbības rezultāts literatūras, zinātnes vai mākslas jomā neatkarīgi no tā izpausmes veida, formas un vērtības',
    'c': 'starptautiski pieņemts autortiesību norādes simbols - C burts, kas atrodas aplī ( šo gan jau bija viegli uzminēt :D ) ',
    'r': 'reģistrētas preču zīmes simbols - R burts, kas atrodas aplī ( šo gan jau bija viegli uzminēt :D )',
    'autors': 'fiziskā persona, kuras radošās darbības rezultātā radīts konkrētais darbs',
    'datubāze': 'neatkarīgu darbu, datu vai citu materiālu krājums, kas sakārtots sistemātiski vai metodiski un individuāli pieejams elektroniskā vai citādā veidā',
    'audiovizuāls': 'kinematogrāfisks darbs vai kustīgi attēli ar skaņu pavadījumu vai bez tā',
    'prioritāte': 'prioritātes datums, kuru piešķir patenta pieteikumam saskaņā ar Parīzes konvenciju',
    'novitāte': 'tas, kas tikko vai nesen ir izgudrots, radīts, atklāts',
    'dizainers': 'dizainparauga autors, fiziskā persona, kuras radošā darba rezultātā izveidots dizainparaugs',
    'skaņa': 'viens no preču zīmes veidiem',
    'Blakustiesības': 'izpildītāju, fonogrammu producentu, filmu producentu un raidorganizāciju tiesības'

    
};


let targetWord = wordList[Math.floor(Math.random() * wordList.length)];
let guessesMade = 0;
const maxGuesses = 6;
let currentGuess = '';
let currentRowIndex = 0;
let wordGridRows = [];
const keyboardLetters = {}; 
let wordLength = targetWord.length; // saprast vārda garumu

// uzsakt speli
document.getElementById('start-game').addEventListener('click', function () {
    document.getElementById('pre-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    resetGame();
    createGrid();
    createKeyboard();
});

// izv. word grid
function createGrid() {
    const wordGrid = document.getElementById('word-grid');
    wordGrid.innerHTML = '';
    wordGridRows = [];

    wordGrid.style.gridTemplateColumns = `repeat(${wordLength}, 60px)`; // keyboard key krasu mainas

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

// Create keyboard
function createKeyboard() {
    const keyboardContainer = document.getElementById('keyboard');
    keyboardContainer.innerHTML = '';

    const keyboardLayout = 'qwertyuiopasdfghjklzxcvbnmāčēģīķļņšūž'.split(''); // latviesu alf.
    keyboardLayout.forEach((letter) => {
        const key = document.createElement('div');
        key.classList.add('key');
        key.textContent = letter.toUpperCase();
        keyboardContainer.appendChild(key);
        keyboardLetters[letter] = key;

        // saprast kadu pogu spiest
        key.addEventListener('click', () => handleKeyPress(letter));
    });

    // pogas backspace function
    document.getElementById('backspace-button').addEventListener('click', handleBackspace);
}

// keyboard presses
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
    } else if (/^[a-zA-Zāčēģīķļņšūž]$/.test(event.key.toLowerCase())) { // akceptet latviesu burtus
        handleKeyPress(event.key.toLowerCase());
    }
}

// pelite + real keyboard presses
function handleKeyPress(key) {
    if (currentGuess.length < wordLength) { // limitet varda garumu (dinamiski)
        currentGuess += key;
        updateRow();
    }
}

// Enter button
document.getElementById('enter-button').addEventListener('click', handleEnter);

function handleEnter() {
    if (currentGuess.length === wordLength) { // parbaudit vai minejums sakrit ar varda garumu
        checkGuess(currentGuess);
    }
}

function updateRow() {
    const currentRow = wordGridRows[currentRowIndex];
    for (let i = 0; i < wordLength; i++) {
        currentRow[i].textContent = currentGuess[i] ? currentGuess[i].toUpperCase() : '';
    }
}

// parbaudit atb. un updatot keyboard krasas
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

            updateKeyboardKeyColor(letter, letterStatus[i]); // updatot keyboard krasas

        }, delay);
        delay += 500;
    });

    setTimeout(() => {
        if (guess === targetWord) {
            showDefinition(true); // Pass true to indicate the word was guessed
            setTimeout(showRestartButton, 4000); // restart poga pec 4s
            smoothScrollToDefinition();
        } else if (guessesMade >= maxGuesses - 1) {
            showDefinition(false); // false -> ja vard netika uzminēts
            setTimeout(showRestartButton, 4000); // velviena restar poga pec 4s
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


// funkicja lai updatotu keyboard krasas
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
        "Tas bija ĻOTI iespaidīgi!", // 2 tries
        "Malacis! Ar trim mēģinājumiem!", // 3 tries
        "Četri ir labs rezultāts!", // 4 tries
        "Varbūt prasīja piecus mēģinājumus, bet galā uzminējāt!", // 5 tries
        "Bijāt uz plāna ledus, bet uzminējāt!" // 6 tries
    ];

    if (isGuessed) {
        triesTitle.textContent = messages[guessesMade];
    } else {
        triesTitle.textContent = "Jūs netrāpat 100% no iespējām ko nemēģināt. Veiksmi nākamreiz!";
    }
    triesTitle.style.display = 'block'; // title to be visible

    if (definition) {
        const formattedWord = targetWord.charAt(0).toUpperCase() + targetWord.slice(1).toLowerCase();
        document.getElementById('game-over-title').style.display = 'block';
        document.getElementById('definition').innerHTML = `<span class="rainbow-word">${formattedWord}</span>: ${definition}`;
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
        wordLength = targetWord.length; // recalclate word on reset
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
// Backspace button handling
function handleBackspace() {
    if (currentGuess.length > 0) {
        currentGuess = currentGuess.slice(0, -1);
        updateRow();
    }
}
