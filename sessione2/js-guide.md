# Guida ai fondamenti JavaScript: DOM, funzioni ed eventi

JavaScript è il linguaggio di programmazione che rende interattive le pagine web. In questa guida imparerai i concetti fondamentali di JavaScript, come manipolare il DOM (Document Object Model) e gestire gli eventi.

## Introduzione a JavaScript

JavaScript è un linguaggio di programmazione che viene eseguito nel browser dell'utente. Permette di:
- Modificare il contenuto HTML
- Cambiare gli stili CSS
- Rispondere alle azioni dell'utente
- Comunicare con server web
- Creare applicazioni web interattive

## Come includere JavaScript in HTML

Esistono due modi principali per includere JavaScript in una pagina HTML:

### 1. JavaScript interno (nel tag `<script>`)

```html
<script>
    // Il tuo codice JavaScript qui
    console.log("Ciao mondo!");
</script>
```

### 2. JavaScript esterno (file separato)

```html
<script src="script.js"></script>
```

È consigliabile posizionare i tag `<script>` alla fine del body per migliorare le prestazioni di caricamento della pagina:

```html
<body>
    <!-- Contenuto HTML -->
    
    <script src="script.js"></script>
</body>
```

## Sintassi di base

### Variabili e tipi di dati

```javascript
// Dichiarazione di variabili
let nome = "Mario";        // String (testo)
let età = 16;              // Number (numero)
let isStudente = true;     // Boolean (vero/falso)
let hobby = ["calcio", "musica", "videogiochi"];  // Array (lista)
let persona = {            // Object (oggetto)
    nome: "Mario",
    età: 16,
    città: "Roma"
};

// Costanti (valori che non cambiano)
const PI = 3.14159;
```

### Operatori

```javascript
// Operatori aritmetici
let somma = 5 + 3;         // 8
let differenza = 10 - 4;   // 6
let prodotto = 3 * 4;      // 12
let quoziente = 8 / 2;     // 4
let resto = 10 % 3;        // 1 (resto della divisione)

// Operatori di confronto
let maggiore = 5 > 3;      // true
let minore = 5 < 3;        // false
let uguale = 5 === 5;      // true (confronto di valore e tipo)
let diverso = 5 !== "5";   // true (diverso per valore o tipo)

// Operatori logici
let and = true && false;   // false (entrambi devono essere true)
let or = true || false;    // true (almeno uno deve essere true)
let not = !true;           // false (inverte il valore)
```

### Strutture di controllo

```javascript
// Condizionali (if, else if, else)
let età = 16;

if (età >= 18) {
    console.log("Sei maggiorenne");
} else if (età >= 16) {
    console.log("Sei quasi maggiorenne");
} else {
    console.log("Sei minorenne");
}

// Switch
let giorno = "lunedì";

switch (giorno) {
    case "lunedì":
        console.log("Inizio settimana");
        break;
    case "venerdì":
        console.log("Fine settimana lavorativa");
        break;
    default:
        console.log("Giorno normale");
}

// Cicli
// For
for (let i = 0; i < 5; i++) {
    console.log("Iterazione " + i);
}

// While
let contatore = 0;
while (contatore < 5) {
    console.log("Contatore: " + contatore);
    contatore++;
}

// For...of (per array)
let frutta = ["mela", "banana", "arancia"];
for (let frutto of frutta) {
    console.log(frutto);
}

// For...in (per oggetti)
let persona = {nome: "Mario", età: 16};
for (let proprietà in persona) {
    console.log(proprietà + ": " + persona[proprietà]);
}
```

## Funzioni

Le funzioni sono blocchi di codice riutilizzabili.

```javascript
// Dichiarazione di funzione
function saluta(nome) {
    return "Ciao, " + nome + "!";
}

// Chiamata di funzione
let messaggio = saluta("Mario");
console.log(messaggio);  // Output: Ciao, Mario!

// Funzione con valore predefinito
function salutaPersona(nome = "amico") {
    return "Ciao, " + nome + "!";
}

console.log(salutaPersona());  // Output: Ciao, amico!

// Arrow function (funzioni freccia)
const somma = (a, b) => a + b;
console.log(somma(5, 3));  // Output: 8
```

## Il DOM (Document Object Model)

Il DOM è una rappresentazione ad albero di tutti gli elementi in una pagina HTML. JavaScript può manipolare il DOM per modificare dinamicamente la pagina.

### Selezionare elementi

```javascript
// Selezionare un elemento per ID
let titolo = document.getElementById("titolo");

// Selezionare elementi per classe
let paragrafi = document.getElementsByClassName("paragrafo");

// Selezionare elementi per tag
let immagini = document.getElementsByTagName("img");

// Selezionare con query CSS (restituisce il primo elemento)
let primoBottone = document.querySelector(".bottone");

// Selezionare con query CSS (restituisce tutti gli elementi)
let tuttiIBottoni = document.querySelectorAll(".bottone");
```

### Modificare elementi

```javascript
// Cambiare il contenuto di un elemento
document.getElementById("titolo").textContent = "Nuovo titolo";
document.getElementById("paragrafo").innerHTML = "Testo con <strong>HTML</strong>";

// Cambiare gli attributi
document.getElementById("immagine").src = "nuova-immagine.jpg";
document.getElementById("link").href = "https://example.com";

// Cambiare gli stili
let elemento = document.getElementById("box");
elemento.style.backgroundColor = "blue";
elemento.style.color = "white";
elemento.style.padding = "10px";

// Aggiungere/rimuovere classi
elemento.classList.add("evidenziato");
elemento.classList.remove("nascosto");
elemento.classList.toggle("selezionato");  // Aggiunge se non c'è, rimuove se c'è
```

### Creare e aggiungere elementi

```javascript
// Creare un nuovo elemento
let nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = "Questo è un nuovo paragrafo.";

// Aggiungere l'elemento alla pagina
document.body.appendChild(nuovoParagrafo);

// Inserire prima di un altro elemento
let riferimento = document.getElementById("riferimento");
document.body.insertBefore(nuovoParagrafo, riferimento);

// Rimuovere un elemento
let elementoDaRimuovere = document.getElementById("vecchio");
elementoDaRimuovere.parentNode.removeChild(elementoDaRimuovere);
// Oppure in modo più moderno:
elementoDaRimuovere.remove();
```

## Eventi

Gli eventi permettono di eseguire codice in risposta alle azioni dell'utente.

### Aggiungere gestori di eventi

```javascript
// Metodo 1: addEventListener
let bottone = document.getElementById("bottone");
bottone.addEventListener("click", function() {
    alert("Hai cliccato il bottone!");
});

// Metodo 2: proprietà on-event
document.getElementById("campo").onchange = function() {
    console.log("Il valore è cambiato!");
};

// Metodo 3: attributo HTML (meno consigliato)
// <button onclick="alert('Cliccato!')">Clicca qui</button>
```

### Tipi di eventi comuni

```javascript
// Click del mouse
elemento.addEventListener("click", function(event) {
    console.log("Elemento cliccato!");
});

// Doppio click
elemento.addEventListener("dblclick", function(event) {
    console.log("Doppio click!");
});

// Mouse sopra l'elemento
elemento.addEventListener("mouseover", function(event) {
    console.log("Mouse sopra!");
});

// Mouse fuori dall'elemento
elemento.addEventListener("mouseout", function(event) {
    console.log("Mouse fuori!");
});

// Pressione di un tasto
document.addEventListener("keydown", function(event) {
    console.log("Tasto premuto: " + event.key);
});

// Invio di un form
document.getElementById("mioForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impedisce l'invio del form
    console.log("Form inviato!");
});

// Caricamento della pagina
window.addEventListener("load", function() {
    console.log("Pagina caricata completamente!");
});

// DOM pronto (più veloce di load)
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM pronto!");
});
```

### L'oggetto event

Ogni gestore di eventi riceve un oggetto `event` che contiene informazioni sull'evento.

```javascript
document.getElementById("bottone").addEventListener("click", function(event) {
    // Informazioni sull'evento
    console.log("Tipo di evento: " + event.type);
    console.log("Elemento target: " + event.target);
    console.log("Posizione X: " + event.clientX);
    console.log("Posizione Y: " + event.clientY);
    
    // Fermare la propagazione dell'evento
    event.stopPropagation();
    
    // Prevenire il comportamento predefinito
    event.preventDefault();
});
```

## Consigli pratici

1. **Usa la console del browser**: Premi F12 per aprire gli strumenti di sviluppo e usa la console per testare il codice
2. **Commenta il codice**: Aggiungi commenti per spiegare cosa fa il tuo codice
3. **Evita variabili globali**: Limita l'uso di variabili globali per evitare conflitti
4. **Gestisci gli errori**: Usa try/catch per gestire potenziali errori
5. **Separa la logica**: Mantieni separati HTML, CSS e JavaScript
6. **Usa funzioni piccole e specifiche**: Ogni funzione dovrebbe fare una cosa sola
7. **Testa spesso**: Verifica frequentemente che il tuo codice funzioni come previsto

## Esercizi pratici

1. Crea un contatore che aumenta quando clicchi un bottone
2. Implementa un form che valida l'input dell'utente
3. Crea una lista di elementi che possono essere aggiunti o rimossi
4. Implementa un semplice slider di immagini
