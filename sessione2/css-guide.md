# Guida ai fondamenti CSS e responsive design

CSS (Cascading Style Sheets) è il linguaggio che utilizziamo per definire lo stile e l'aspetto delle pagine web. In questa guida imparerai i concetti fondamentali di CSS e come creare layout responsive che si adattano a diversi dispositivi.

## Sintassi CSS di base

La sintassi CSS è composta da:
- **Selettore**: indica a quale elemento HTML applicare lo stile
- **Proprietà**: cosa vuoi modificare (colore, dimensione, ecc.)
- **Valore**: come vuoi modificarlo

```css
selettore {
    proprietà: valore;
    altra-proprietà: altro-valore;
}
```

## Tipi di selettori principali

```css
/* Selettore di elemento - seleziona tutti i tag <p> */
p {
    color: blue;
}

/* Selettore di classe - seleziona elementi con class="nome-classe" */
.nome-classe {
    font-size: 18px;
}

/* Selettore di ID - seleziona l'elemento con id="nome-id" */
#nome-id {
    background-color: yellow;
}

/* Selettore combinato - seleziona i <p> dentro elementi con class="container" */
.container p {
    margin: 10px;
}
```

## Come includere CSS in HTML

Esistono tre modi per includere CSS in una pagina HTML:

### 1. CSS Inline (direttamente nell'elemento)

```html
<p style="color: red; font-size: 16px;">Questo è un paragrafo rosso.</p>
```

### 2. CSS Interno (nel tag `<head>`)

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

### 3. CSS Esterno (file separato)

```html
<head>
    <link rel="stylesheet" href="stile.css">
</head>
```

## Proprietà CSS fondamentali

### Testo e tipografia

```css
p {
    color: #333;              /* Colore del testo */
    font-family: Arial, sans-serif;  /* Tipo di carattere */
    font-size: 16px;          /* Dimensione del testo */
    font-weight: bold;        /* Spessore del testo (bold, normal) */
    text-align: center;       /* Allineamento (left, right, center, justify) */
    line-height: 1.5;         /* Altezza della linea */
    text-decoration: underline; /* Decorazione (underline, line-through, none) */
}
```

### Sfondi e bordi

```css
div {
    background-color: #f0f0f0;  /* Colore di sfondo */
    background-image: url('immagine.jpg');  /* Immagine di sfondo */
    background-size: cover;    /* Dimensione sfondo (cover, contain, %) */
    
    border: 1px solid black;   /* Bordo (spessore tipo colore) */
    border-radius: 5px;        /* Angoli arrotondati */
    
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);  /* Ombra (x y sfocatura colore) */
}
```

### Layout e posizionamento

```css
div {
    width: 300px;             /* Larghezza */
    height: 200px;            /* Altezza */
    max-width: 100%;          /* Larghezza massima */
    
    margin: 10px;             /* Margine esterno */
    padding: 20px;            /* Spaziatura interna */
    
    display: flex;            /* Tipo di visualizzazione (block, inline, flex) */
    position: relative;       /* Posizionamento (static, relative, absolute) */
}
```

## Il modello Box

Ogni elemento HTML è rappresentato come un rettangolo (box) composto da:

```
+-------------------------------------------+
|                 MARGIN                    |
|    +-------------------------------+      |
|    |           BORDER              |      |
|    |    +-------------------+      |      |
|    |    |      PADDING      |      |      |
|    |    |   +-----------+   |      |      |
|    |    |   |  CONTENT  |   |      |      |
|    |    |   +-----------+   |      |      |
|    |    +-------------------+      |      |
|    +-------------------------------+      |
+-------------------------------------------+
```

## Responsive Design

Il responsive design permette alle pagine web di adattarsi a diverse dimensioni di schermo.

### Media Queries

Le media queries permettono di applicare stili diversi in base alle caratteristiche del dispositivo:

```css
/* Stile di base per tutti i dispositivi */
body {
    font-size: 16px;
}

/* Stile per schermi con larghezza massima di 768px (tablet) */
@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}

/* Stile per schermi con larghezza massima di 480px (smartphone) */
@media (max-width: 480px) {
    body {
        font-size: 12px;
    }
}
```

### Viewport Meta Tag

Per garantire che il responsive design funzioni correttamente sui dispositivi mobili, aggiungi sempre questo meta tag nell'`<head>` del tuo HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Layout Flessibile

Usa unità relative invece di pixel fissi:

```css
/* Invece di questo */
div {
    width: 300px;
}

/* Usa questo */
div {
    width: 80%;
    max-width: 300px;
}
```

### Flexbox

Flexbox è un modello di layout moderno che semplifica la creazione di layout responsive:

```css
.container {
    display: flex;
    flex-direction: row;        /* row, column */
    justify-content: center;    /* flex-start, center, flex-end, space-between */
    align-items: center;        /* flex-start, center, flex-end, stretch */
    flex-wrap: wrap;            /* wrap, nowrap */
}

.item {
    flex: 1;                    /* Proporzione di spazio da occupare */
}
```

## Consigli pratici

1. **Usa un reset CSS**: Normalizza gli stili di base tra browser diversi
2. **Mobile-first**: Progetta prima per dispositivi mobili, poi aggiungi stili per schermi più grandi
3. **Organizza il CSS**: Raggruppa gli stili per componenti o funzionalità
4. **Commenta il codice**: Aggiungi commenti per spiegare sezioni complesse
5. **Evita !important**: Usalo solo quando assolutamente necessario
6. **Testa su diversi dispositivi**: Verifica sempre come appare il tuo sito su vari schermi

## Esercizi pratici

1. Crea un bottone con effetto hover (cambia colore quando ci passi sopra)
2. Realizza una card con immagine, titolo e testo
3. Crea un menu di navigazione che diventa un menu hamburger su mobile
4. Implementa una griglia di elementi che si adatta a diverse dimensioni di schermo
