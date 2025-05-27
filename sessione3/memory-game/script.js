// Script per il Memory Game
// Questo script implementa la logica completa del gioco Memory

// Attendiamo che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Elementi del DOM che useremo
    const gameBoard = document.getElementById('game-board');
    const timer = document.getElementById('timer');
    const movesCounter = document.getElementById('moves');
    const restartBtn = document.getElementById('restart-btn');
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    const winModal = document.getElementById('win-modal');
    const resultTime = document.getElementById('result-time');
    const resultMoves = document.getElementById('result-moves');
    const playAgainBtn = document.getElementById('play-again-btn');
    const bestTimeEl = document.getElementById('best-time');
    const bestMovesEl = document.getElementById('best-moves');
    
    // Variabili di gioco
    let cards = [];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let moves = 0;
    let matchedPairs = 0;
    let totalPairs = 0;
    let gameTimer;
    let seconds = 0;
    let gridSize = 4; // Default: 4x4
    let gameStarted = false;
    
    // Emoji che useremo come simboli sulle carte
    const emojis = [
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
        '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔',
        '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺',
        '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞'
    ];
    
    // Inizializza il gioco
    function initGame(size) {
        resetGame();
        gridSize = size;
        gameBoard.className = 'game-board grid-' + size;
        totalPairs = (size * size) / 2;
        
        // Crea un array con le coppie di emoji
        const gameEmojis = [];
        for (let i = 0; i < totalPairs; i++) {
            gameEmojis.push(emojis[i]);
            gameEmojis.push(emojis[i]);
        }
        
        // Mescola le emoji
        shuffleArray(gameEmojis);
        
        // Crea le carte
        gameBoard.innerHTML = '';
        for (let i = 0; i < gameEmojis.length; i++) {
            createCard(gameEmojis[i]);
        }
        
        // Aggiorna i contatori
        updateMovesCounter();
        updateTimer();
        
        // Aggiorna le statistiche
        loadStats();
    }
    
    // Crea una singola carta
    function createCard(emoji) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = emoji;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
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
        // Se il tabellone è bloccato o la carta è già girata, non fare nulla
        if (lockBoard || this === firstCard || this.classList.contains('flipped') || this.classList.contains('matched')) {
            return;
        }
        
        // Avvia il timer al primo click
        if (!gameStarted) {
            startTimer();
            gameStarted = true;
        }
        
        // Gira la carta
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        
        // Prima carta girata
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        
        // Seconda carta girata
        secondCard = this;
        hasFlippedCard = false;
        
        // Incrementa il contatore delle mosse
        moves++;
        updateMovesCounter();
        
        // Controlla se le carte corrispondono
        checkForMatch();
    }
    
    // Controlla se le due carte girate corrispondono
    function checkForMatch() {
        // Blocca il tabellone durante il controllo
        lockBoard = true;
        
        // Controlla se le carte hanno lo stesso valore
        if (firstCard.dataset.value === secondCard.dataset.value) {
            // Le carte corrispondono
            disableCards();
            matchedPairs++;
            
            // Controlla se il gioco è finito
            if (matchedPairs === totalPairs) {
                endGame();
            } else {
                // Sblocca il tabellone
                lockBoard = false;
            }
        } else {
            // Le carte non corrispondono, rigirare dopo un breve ritardo
            setTimeout(unflipCards, 1000);
        }
    }
    
    // Disabilita le carte corrispondenti
    function disableCards() {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        // Sblocca il tabellone
        lockBoard = false;
    }
    
    // Rigira le carte non corrispondenti
    function unflipCards() {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        
        // Sblocca il tabellone
        lockBoard = false;
    }
    
    // Avvia il timer
    function startTimer() {
        clearInterval(gameTimer);
        seconds = 0;
        updateTimer();
        gameTimer = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
    }
    
    // Aggiorna il display del timer
    function updateTimer() {
        timer.textContent = `Tempo: ${seconds}s`;
    }
    
    // Aggiorna il contatore delle mosse
    function updateMovesCounter() {
        movesCounter.textContent = `Mosse: ${moves}`;
    }
    
    // Termina il gioco
    function endGame() {
        // Ferma il timer
        clearInterval(gameTimer);
        
        // Mostra il modal di vittoria
        resultTime.textContent = seconds;
        resultMoves.textContent = moves;
        winModal.classList.add('show');
        
        // Salva le statistiche
        saveStats();
    }
    
    // Resetta il gioco
    function resetGame() {
        // Resetta le variabili
        cards = [];
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
        moves = 0;
        matchedPairs = 0;
        seconds = 0;
        gameStarted = false;
        
        // Ferma il timer
        clearInterval(gameTimer);
        
        // Aggiorna i contatori
        updateMovesCounter();
        updateTimer();
    }
    
    // Salva le statistiche
    function saveStats() {
        const difficulty = gridSize + 'x' + gridSize;
        const stats = JSON.parse(localStorage.getItem('memoryStats')) || {};
        
        if (!stats[difficulty]) {
            stats[difficulty] = {
                bestTime: Infinity,
                bestMoves: Infinity
            };
        }
        
        // Aggiorna i record se necessario
        if (seconds < stats[difficulty].bestTime) {
            stats[difficulty].bestTime = seconds;
        }
        
        if (moves < stats[difficulty].bestMoves) {
            stats[difficulty].bestMoves = moves;
        }
        
        localStorage.setItem('memoryStats', JSON.stringify(stats));
        loadStats();
    }
    
    // Carica le statistiche
    function loadStats() {
        const difficulty = gridSize + 'x' + gridSize;
        const stats = JSON.parse(localStorage.getItem('memoryStats')) || {};
        
        if (stats[difficulty]) {
            const bestTime = stats[difficulty].bestTime;
            const bestMoves = stats[difficulty].bestMoves;
            
            bestTimeEl.textContent = bestTime === Infinity ? '-' : bestTime + 's';
            bestMovesEl.textContent = bestMoves === Infinity ? '-' : bestMoves;
        } else {
            bestTimeEl.textContent = '-';
            bestMovesEl.textContent = '-';
        }
    }
    
    // Event Listeners
    
    // Pulsanti di difficoltà
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = parseInt(btn.dataset.grid);
            initGame(size);
        });
    });
    
    // Pulsante di riavvio
    restartBtn.addEventListener('click', () => {
        initGame(gridSize);
    });
    
    // Pulsante "Gioca ancora" nel modal
    playAgainBtn.addEventListener('click', () => {
        winModal.classList.remove('show');
        initGame(gridSize);
    });
    
    // Inizializza il gioco con la difficoltà predefinita
    initGame(gridSize);
});
