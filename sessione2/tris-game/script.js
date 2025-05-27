// Script per il gioco del Tris
// Questo script implementa la logica completa del gioco del Tris

// Attendiamo che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Elementi del DOM che useremo
    const board = document.getElementById('board');
    const statusDisplay = document.getElementById('status');
    const resetButton = document.getElementById('reset-button');
    const scoreX = document.getElementById('score-x');
    const scoreO = document.getElementById('score-o');
    
    // Variabili di gioco
    let gameActive = true;
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', '']; // 9 celle vuote
    let scores = { X: 0, O: 0 };
    
    // Combinazioni vincenti (indici delle celle)
    const winningConditions = [
        [0, 1, 2], // Prima riga
        [3, 4, 5], // Seconda riga
        [6, 7, 8], // Terza riga
        [0, 3, 6], // Prima colonna
        [1, 4, 7], // Seconda colonna
        [2, 5, 8], // Terza colonna
        [0, 4, 8], // Diagonale da in alto a sinistra
        [2, 4, 6]  // Diagonale da in alto a destra
    ];
    
    // Messaggi di stato
    const winMessage = () => `Giocatore ${currentPlayer} ha vinto!`;
    const drawMessage = () => `Pareggio!`;
    const currentPlayerTurn = () => `Turno di ${currentPlayer}`;
    
    // Inizializza il tabellone
    function initializeGame() {
        // Crea le 9 celle del tabellone
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', cellClicked);
            board.appendChild(cell);
        }
        
        // Imposta lo stato iniziale
        statusDisplay.textContent = currentPlayerTurn();
        resetButton.addEventListener('click', resetGame);
    }
    
    // Gestisce il click su una cella
    function cellClicked(event) {
        // Ottieni l'indice della cella cliccata
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.dataset.index);
        
        // Controlla se la cella è già occupata o se il gioco è finito
        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }
        
        // Aggiorna lo stato del gioco
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }
    
    // Aggiorna lo stato della cella giocata
    function handleCellPlayed(clickedCell, clickedCellIndex) {
        // Aggiorna lo stato interno del gioco
        gameState[clickedCellIndex] = currentPlayer;
        
        // Aggiorna l'aspetto visivo della cella
        clickedCell.textContent = currentPlayer;
        clickedCell.classList.add(currentPlayer.toLowerCase());
    }
    
    // Verifica se c'è un vincitore o un pareggio
    function handleResultValidation() {
        let roundWon = false;
        let winningCombination = [];
        
        // Controlla tutte le combinazioni vincenti
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            
            // Verifica se le tre celle hanno lo stesso simbolo (non vuoto)
            if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
                continue;
            }
            if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
                roundWon = true;
                winningCombination = [a, b, c];
                break;
            }
        }
        
        // Se c'è un vincitore
        if (roundWon) {
            statusDisplay.textContent = winMessage();
            gameActive = false;
            
            // Evidenzia le celle vincenti
            winningCombination.forEach(index => {
                const cells = document.querySelectorAll('.cell');
                cells[index].classList.add('winner');
            });
            
            // Aggiorna il punteggio
            scores[currentPlayer]++;
            updateScore();
            return;
        }
        
        // Controlla se è un pareggio (tutte le celle piene)
        let roundDraw = !gameState.includes('');
        if (roundDraw) {
            statusDisplay.textContent = drawMessage();
            gameActive = false;
            return;
        }
        
        // Se il gioco continua, cambia giocatore
        changePlayer();
    }
    
    // Cambia il giocatore corrente
    function changePlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = currentPlayerTurn();
    }
    
    // Aggiorna il punteggio visualizzato
    function updateScore() {
        scoreX.textContent = scores.X;
        scoreO.textContent = scores.O;
    }
    
    // Resetta il gioco per una nuova partita
    function resetGame() {
        gameActive = true;
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        statusDisplay.textContent = currentPlayerTurn();
        
        // Resetta l'aspetto visivo delle celle
        document.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winner');
        });
    }
    
    // Inizializza il gioco
    initializeGame();
});
