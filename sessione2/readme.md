# Sessione 2 – CSS + JS Interattivo: Gioco del Tris

## Obiettivi della sessione
- Comprendere i limiti degli ambienti temporanei (Codespaces)
- Imparare a Pubblicare il progetto su GitHub Pages

## Materiali inclusi
- `css-guide.md`: Guida ai fondamenti CSS e responsive design
- `js-guide.md`: Guida ai fondamenti JavaScript (DOM, funzioni, eventi)
- `debug-guide.md`: Guida all'uso dei DevTools per il debug
- `tris-game/`: Template e boilerplate per il gioco del Tris
- Documentazione sui limiti degli ambienti temporanei
- Guida al deploy su GitHub Pages

## Prerequisiti
- Aver completato la Sessione 1
- Conoscenza base di HTML

## Durata
4 ore di attività pratica al computer

## Note per gli studenti
In questa sessione ci concentreremo sulla pubblicazione del gioco del Tris su GitHub Pages e comprenderemo i limiti degli ambienti temporanei come Codespaces. Seguiremo un approccio passo passo per rendere il nostro progetto accessibile online.

## Esercizio: Pubblicare il Tris Game su GitHub Pages

### Passo 1: Preparare il progetto in GitHub Codespaces
1. Accedi al tuo account GitHub
2. Vai su https://github.com/new per creare un nuovo repository
3. Assegna un nome al repository (es. `tris-game`)
4. Seleziona l'opzione "Public" e clicca su "Create repository"
5. Nel tuo nuovo repository, clicca sul pulsante "Code" (verde)
6. Seleziona la scheda "Codespaces" e clicca su "Create codespace on main"
7. Attendi che l'ambiente di sviluppo si carichi completamente

### Passo 2: Copiare i file del Tris Game
1. Una volta caricato Codespaces, avrai accesso a Visual Studio Code nel browser
2. Nel terminale integrato (premi Ctrl+` o vai su Terminal > New Terminal), crea la struttura del progetto:
   ```bash
   touch index.html style.css script.js
   ```
3. Copia il contenuto dei file template nella cartella `tris-game` nei file appena creati:
   - Per `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="it">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Gioco del Tris</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <div class="container">
           <h1>Gioco del Tris</h1>
           <div class="status" id="status">Turno di X</div>
           <div class="board" id="board">
               <div class="cell" data-cell-index="0"></div>
               <div class="cell" data-cell-index="1"></div>
               <div class="cell" data-cell-index="2"></div>
               <div class="cell" data-cell-index="3"></div>
               <div class="cell" data-cell-index="4"></div>
               <div class="cell" data-cell-index="5"></div>
               <div class="cell" data-cell-index="6"></div>
               <div class="cell" data-cell-index="7"></div>
               <div class="cell" data-cell-index="8"></div>
           </div>
           <button class="restart-btn" id="restartBtn">Ricomincia</button>
       </div>
       <script src="script.js"></script>
   </body>
   </html>
   ```
   
   - Per `style.css`:
   ```css
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
   }
   
   body {
       font-family: 'Arial', sans-serif;
       display: flex;
       justify-content: center;
       align-items: center;
       min-height: 100vh;
       background-color: #f5f5f5;
   }
   
   .container {
       text-align: center;
       max-width: 500px;
       padding: 20px;
       background-color: white;
       border-radius: 10px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }
   
   h1 {
       color: #333;
       margin-bottom: 20px;
   }
   
   .status {
       margin-bottom: 20px;
       font-size: 1.2rem;
       font-weight: bold;
       color: #555;
   }
   
   .board {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       grid-gap: 10px;
       margin-bottom: 20px;
   }
   
   .cell {
       width: 100px;
       height: 100px;
       background-color: #eee;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 3rem;
       font-weight: bold;
       cursor: pointer;
       border-radius: 5px;
       transition: background-color 0.3s;
   }
   
   .cell:hover {
       background-color: #ddd;
   }
   
   .restart-btn {
       padding: 10px 20px;
       font-size: 1rem;
       background-color: #4CAF50;
       color: white;
       border: none;
       border-radius: 5px;
       cursor: pointer;
       transition: background-color 0.3s;
   }
   
   .restart-btn:hover {
       background-color: #45a049;
   }
   
   .x {
       color: #E91E63;
   }
   
   .o {
       color: #2196F3;
   }
   ```
   
   - Per `script.js`:
   ```javascript
   document.addEventListener('DOMContentLoaded', () => {
       const statusDisplay = document.getElementById('status');
       const boardElement = document.getElementById('board');
       const restartButton = document.getElementById('restartBtn');
       const cells = document.querySelectorAll('.cell');
       
       let gameActive = true;
       let currentPlayer = 'X';
       let gameState = ['', '', '', '', '', '', '', '', ''];
       
       const winningConditions = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [2, 4, 6]
       ];
       
       const messages = {
           playerTurn: () => `Turno di ${currentPlayer}`,
           gameWin: () => `Giocatore ${currentPlayer} ha vinto!`,
           gameDraw: () => `Pareggio!`,
       };
       
       function handleCellClick(clickedCellEvent) {
           const clickedCell = clickedCellEvent.target;
           const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
           
           if (gameState[clickedCellIndex] !== '' || !gameActive) {
               return;
           }
           
           handleCellPlayed(clickedCell, clickedCellIndex);
           handleResultValidation();
       }
       
       function handleCellPlayed(clickedCell, clickedCellIndex) {
           gameState[clickedCellIndex] = currentPlayer;
           clickedCell.textContent = currentPlayer;
           clickedCell.classList.add(currentPlayer.toLowerCase());
       }
       
       function handleResultValidation() {
           let roundWon = false;
           for (let i = 0; i < winningConditions.length; i++) {
               const [a, b, c] = winningConditions[i];
               const condition = gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
               if (condition) {
                   roundWon = true;
                   break;
               }
           }
           
           if (roundWon) {
               statusDisplay.textContent = messages.gameWin();
               gameActive = false;
               return;
           }
           
           const roundDraw = !gameState.includes('');
           if (roundDraw) {
               statusDisplay.textContent = messages.gameDraw();
               gameActive = false;
               return;
           }
           
           handlePlayerChange();
       }
       
       function handlePlayerChange() {
           currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
           statusDisplay.textContent = messages.playerTurn();
       }
       
       function handleRestartGame() {
           gameActive = true;
           currentPlayer = 'X';
           gameState = ['', '', '', '', '', '', '', '', ''];
           statusDisplay.textContent = messages.playerTurn();
           
           cells.forEach(cell => {
               cell.textContent = '';
               cell.classList.remove('x', 'o');
           });
       }
       
       cells.forEach(cell => cell.addEventListener('click', handleCellClick));
       restartButton.addEventListener('click', handleRestartGame);
       
       statusDisplay.textContent = messages.playerTurn();
   });
   ```

### Passo 3: Testare il gioco localmente con Live Server
1. Installa l'estensione Live Server in VS Code (se non l'hai già fatto nella Sessione 1)
2. Clicca con il tasto destro sul file `index.html` nel file explorer
3. Seleziona "Open with Live Server" dal menu contestuale
4. Verifica che il gioco funzioni correttamente:
   - Prova a fare clic sulle celle per posizionare X e O
   - Verifica che il gioco riconosca le vittorie
   - Prova il pulsante "Ricomincia"

### Passo 4: Comprendere i limiti degli ambienti temporanei (Codespaces)
1. I Codespaces sono ambienti di sviluppo temporanei con alcune limitazioni:
   - Inattività: dopo 30 minuti di inattività, il Codespace va in sospensione
   - Durata: i Codespaces gratuiti hanno un limite mensile di ore di utilizzo
   - Persistenza: i file sono salvati solo quando fai commit e push su GitHub
   - Risorse: limiti di CPU, memoria e storage
2. Per questo motivo, è importante:
   - Fare commit e push frequenti del tuo lavoro
   - Chiudere i Codespaces quando non li usi
   - Utilizzare GitHub Pages per rendere il tuo progetto accessibile anche quando il Codespace è spento

### Passo 5: Pubblicare su GitHub
1. Nel terminale integrato, esegui i seguenti comandi per salvare le modifiche:
   ```bash
   git add .
   git commit -m "Aggiunto gioco del Tris"
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
6. Torna alla pagina "Pages" e troverai un link al tuo sito pubblicato (solitamente nella forma `https://tuousername.github.io/tris-game/`)
7. Clicca sul link per verificare che il gioco sia accessibile online

### Passo 7: Condividere il tuo gioco
1. Ora puoi condividere l'URL del tuo gioco con chiunque
2. Il gioco sarà accessibile anche quando il tuo Codespace è spento o il computer è spento
3. Ogni volta che farai push di nuove modifiche al repository, GitHub Pages aggiornerà automaticamente il sito pubblicato
