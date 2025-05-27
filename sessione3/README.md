# Sessione 3 – Memory Game + GitHub Pages

## Obiettivi della sessione
- Realizzare un'applicazione più complessa con JavaScript
- Imparare a gestire array, timer e condizioni di vittoria

## Materiali inclusi
- `memory-game/`: Boilerplate per il Memory Game
- `github-pages-guide.md`: Guida al deploy su GitHub Pages

## Prerequisiti
- Aver completato le Sessioni 1 e 2
- Conoscenza base di HTML, CSS e JavaScript

## Durata
4 ore di attività pratica al computer

## Note per gli studenti
In questa sessione costruiremo un gioco Memory più complesso del Tris, che richiede la gestione di array, timer e condizioni di vittoria. Utilizzeremo GitHub Codespaces come ambiente di sviluppo e pubblicheremo il gioco online tramite GitHub Pages.

## Esercizio: Memory Game con GitHub Codespaces e GitHub Pages

### Passo 1: Configurare GitHub Codespaces
1. Accedi al tuo account GitHub
2. Vai su https://github.com/new per creare un nuovo repository
3. Assegna un nome al repository (es. `memory-game`)
4. Seleziona l'opzione "Public" e clicca su "Create repository"
5. Nel tuo nuovo repository, clicca sul pulsante "Code" (verde)
6. Seleziona la scheda "Codespaces" e clicca su "Create codespace on main"
7. Attendi che l'ambiente di sviluppo si carichi completamente

### Passo 2: Copiare i file del Memory Game
1. Una volta caricato Codespaces, avrai accesso a Visual Studio Code nel browser
2. Nel terminale integrato (premi Ctrl+` o vai su Terminal > New Terminal), crea la struttura del progetto:
   ```bash
   touch index.html style.css script.js
   ```
3. Copia il contenuto dei file template nella cartella `memory-game` nei file appena creati:
   - Per `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="it">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Memory Game</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <div class="container">
           <h1>Memory Game</h1>
           <div class="stats">
               <div class="moves">0 Mosse</div>
               <div class="timer">Tempo: 0s</div>
           </div>
           <div class="game-container">
               <div class="game" id="game-board"></div>
           </div>
           <button class="restart-btn" id="restart">Ricomincia</button>
       </div>
       <script src="script.js"></script>
   </body>
   </html>
   ```
   
   - Per `style.css`:
   ```css
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }
   
   body {
       font-family: 'Arial', sans-serif;
       background-color: #f5f5f5;
       display: flex;
       justify-content: center;
       align-items: center;
       min-height: 100vh;
       padding: 20px;
   }
   
   .container {
       background-color: white;
       border-radius: 10px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       padding: 20px;
       max-width: 600px;
       width: 100%;
   }
   
   h1 {
       text-align: center;
       color: #333;
       margin-bottom: 20px;
   }
   
   .stats {
       display: flex;
       justify-content: space-between;
       margin-bottom: 20px;
       font-weight: bold;
       color: #555;
   }
   
   .game-container {
       display: flex;
       justify-content: center;
       margin-bottom: 20px;
   }
   
   .game {
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       grid-gap: 10px;
       max-width: 400px;
       width: 100%;
   }
   
   .card {
       height: 80px;
       background-color: #2196F3;
       border-radius: 5px;
       cursor: pointer;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 0;
       transition: transform 0.6s, background-color 0.6s;
       transform-style: preserve-3d;
   }
   
   .card.flipped {
       transform: rotateY(180deg);
       background-color: white;
       font-size: 2rem;
       font-weight: bold;
   }
   
   .card.matched {
       background-color: #4CAF50;
       cursor: default;
   }
   
   .restart-btn {
       display: block;
       margin: 0 auto;
       padding: 10px 20px;
       background-color: #4CAF50;
       color: white;
       border: none;
       border-radius: 5px;
       cursor: pointer;
       font-size: 1rem;
       transition: background-color 0.3s;
   }
   
   .restart-btn:hover {
       background-color: #45a049;
   }
   
   @media (max-width: 480px) {
       .game {
           grid-template-columns: repeat(3, 1fr);
       }
       
       .card {
           height: 70px;
       }
   }
   ```
   
   - Per `script.js`:
   ```javascript
   document.addEventListener('DOMContentLoaded', () => {
       const gameBoard = document.getElementById('game-board');
       const movesElement = document.querySelector('.moves');
       const timerElement = document.querySelector('.timer');
       const restartButton = document.getElementById('restart');
       
       let cards = [];
       let hasFlippedCard = false;
       let lockBoard = false;
       let firstCard, secondCard;
       let moves = 0;
       let matchedPairs = 0;
       let timerInterval;
       let seconds = 0;
       
       // Emoji da utilizzare come simboli delle carte
       const symbols = ['🍎', '🍌', '🍒', '🍓', '🍋', '🥝', '🍉', '🥭'];
       
       // Inizializza il gioco
       function initGame() {
           // Resetta le variabili
           cards = [];
           hasFlippedCard = false;
           lockBoard = false;
           firstCard = null;
           secondCard = null;
           moves = 0;
           matchedPairs = 0;
           seconds = 0;
           
           // Aggiorna l'interfaccia
           movesElement.textContent = '0 Mosse';
           timerElement.textContent = 'Tempo: 0s';
           
           // Ferma il timer se è in esecuzione
           clearInterval(timerInterval);
           
           // Crea le carte
           createCards();
           
           // Avvia il timer
           startTimer();
       }
       
       // Crea le carte
       function createCards() {
           // Svuota il game board
           gameBoard.innerHTML = '';
           
           // Crea un array con coppie di simboli
           const cardSymbols = [...symbols, ...symbols];
           
           // Mescola l'array
           shuffleArray(cardSymbols);
           
           // Crea le carte e le aggiunge al game board
           cardSymbols.forEach((symbol, index) => {
               const card = document.createElement('div');
               card.classList.add('card');
               card.dataset.symbol = symbol;
               card.dataset.index = index;
               card.addEventListener('click', flipCard);
               
               gameBoard.appendChild(card);
               cards.push(card);
           });
       }
       
       // Mescola un array (algoritmo Fisher-Yates)
       function shuffleArray(array) {
           for (let i = array.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               [array[i], array[j]] = [array[j], array[i]];
           }
           return array;
       }
       
       // Gestisce il click su una carta
       function flipCard() {
           if (lockBoard) return;
           if (this === firstCard) return;
           
           this.classList.add('flipped');
           this.textContent = this.dataset.symbol;
           
           if (!hasFlippedCard) {
               // Prima carta girata
               hasFlippedCard = true;
               firstCard = this;
               return;
           }
           
           // Seconda carta girata
           secondCard = this;
           
           // Incrementa il contatore delle mosse
           moves++;
           movesElement.textContent = moves === 1 ? '1 Mossa' : `${moves} Mosse`;
           
           // Controlla se le carte corrispondono
           checkForMatch();
       }
       
       // Controlla se le due carte girate corrispondono
       function checkForMatch() {
           const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
           
           if (isMatch) {
               disableCards();
               matchedPairs++;
               
               // Controlla se tutte le coppie sono state trovate
               if (matchedPairs === symbols.length) {
                   setTimeout(() => {
                       clearInterval(timerInterval);
                       alert(`Hai vinto! Hai completato il gioco in ${moves} mosse e ${seconds} secondi.`);
                   }, 500);
               }
           } else {
               unflipCards();
           }
       }
       
       // Disabilita le carte corrispondenti
       function disableCards() {
           firstCard.removeEventListener('click', flipCard);
           secondCard.removeEventListener('click', flipCard);
           
           firstCard.classList.add('matched');
           secondCard.classList.add('matched');
           
           resetBoard();
       }
       
       // Rigira le carte non corrispondenti
       function unflipCards() {
           lockBoard = true;
           
           setTimeout(() => {
               firstCard.classList.remove('flipped');
               secondCard.classList.remove('flipped');
               firstCard.textContent = '';
               secondCard.textContent = '';
               
               resetBoard();
           }, 1000);
       }
       
       // Resetta le variabili del board
       function resetBoard() {
           [hasFlippedCard, lockBoard] = [false, false];
           [firstCard, secondCard] = [null, null];
       }
       
       // Avvia il timer
       function startTimer() {
           timerInterval = setInterval(() => {
               seconds++;
               timerElement.textContent = `Tempo: ${seconds}s`;
           }, 1000);
       }
       
       // Gestisce il click sul pulsante di restart
       restartButton.addEventListener('click', initGame);
       
       // Inizializza il gioco al caricamento
       initGame();
   });
   ```

### Passo 3: Testare il gioco localmente con Live Server
1. Installa l'estensione Live Server in VS Code (se non l'hai già fatto nelle sessioni precedenti)
2. Clicca con il tasto destro sul file `index.html` nel file explorer
3. Seleziona "Open with Live Server" dal menu contestuale
4. Verifica che il gioco funzioni correttamente:
   - Prova a girare le carte e trovare le coppie
   - Controlla che il contatore delle mosse e il timer funzionino
   - Verifica che il gioco riconosca quando hai vinto
   - Prova il pulsante "Ricomincia"

### Passo 4: Personalizzare il gioco (opzionale)
1. Puoi personalizzare il gioco modificando:
   - I simboli delle carte (cambia l'array `symbols` in `script.js`)
   - Lo stile delle carte (modifica `style.css`)
   - Aggiungere funzionalità come un sistema di punteggio o livelli di difficoltà

### Passo 5: Pubblicare su GitHub
1. Nel terminale integrato, esegui i seguenti comandi per salvare le modifiche:
   ```bash
   git add .
   git commit -m "Creato Memory Game"
   git push
   ```
2. Attendi che il push sia completato
3. Vai al tuo repository su GitHub per verificare che i file siano stati caricati correttamente

### Passo 6: Pubblicare su GitHub Pages
1. Nel tuo repository su GitHub, vai alla scheda "Settings"
2. Nella barra laterale sinistra, clicca su "Pages"
3. Nella sezione "Source", seleziona "Deploy from a branch"
4. Nel menu a tendina "Branch", seleziona "main" e "/root", poi clicca su "Save"
5. Attendi qualche minuto che GitHub Pages pubblichi il tuo sito
6. Torna alla pagina "Pages" e troverai un link al tuo sito pubblicato (solitamente nella forma `https://tuousername.github.io/memory-game/`)
7. Clicca sul link per verificare che il gioco sia accessibile online

### Passo 7: Condividere il tuo gioco
1. Ora puoi condividere l'URL del tuo gioco con chiunque
2. Il gioco sarà accessibile anche quando il tuo Codespace è spento o il computer è spento
3. Ogni volta che farai push di nuove modifiche al repository, GitHub Pages aggiornerà automaticamente il sito pubblicato
