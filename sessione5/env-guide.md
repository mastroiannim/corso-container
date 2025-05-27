# Guida all'uso delle variabili d'ambiente

Le variabili d'ambiente sono un modo sicuro per gestire informazioni sensibili come token, chiavi API e altre configurazioni senza includerle direttamente nel codice sorgente. In questa guida imparerai come utilizzarle nel tuo bot Telegram.

## Perché usare le variabili d'ambiente?

1. **Sicurezza**: eviti di esporre dati sensibili nel codice
2. **Flessibilità**: puoi cambiare configurazioni senza modificare il codice
3. **Portabilità**: l'applicazione funziona in ambienti diversi senza modifiche
4. **Best practice**: è una pratica standard nello sviluppo professionale

## Rischi di non usare le variabili d'ambiente

Se includi token o chiavi API direttamente nel codice:
- Potrebbero essere esposti pubblicamente se carichi il codice su GitHub
- Dovrai modificare il codice ogni volta che cambi ambiente (sviluppo, test, produzione)
- Chiunque abbia accesso al codice avrà accesso ai tuoi token

## Come usare le variabili d'ambiente in Node.js

### Metodo 1: Accesso diretto

In Node.js, puoi accedere alle variabili d'ambiente tramite l'oggetto `process.env`:

```javascript
// Accesso a una variabile d'ambiente
const botToken = process.env.TELEGRAM_BOT_TOKEN;

// Uso della variabile
const bot = new TelegramBot(botToken, { polling: true });
```

### Metodo 2: Usando il pacchetto dotenv

Il pacchetto `dotenv` semplifica la gestione delle variabili d'ambiente caricandole da un file `.env`:

1. Installa il pacchetto:
```bash
npm install dotenv
```

2. Crea un file `.env` nella root del progetto:
```
TELEGRAM_BOT_TOKEN=1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ
PORT=3000
```

3. Carica le variabili nel tuo codice:
```javascript
// All'inizio del file principale
require('dotenv').config();

// Ora puoi usare process.env
const botToken = process.env.TELEGRAM_BOT_TOKEN;
```

## Configurare le variabili d'ambiente in diversi ambienti

### Locale (sviluppo)

Durante lo sviluppo locale, usa un file `.env`:

```
TELEGRAM_BOT_TOKEN=il_tuo_token_di_test
DEBUG=true
```

### Docker

Nel Dockerfile, puoi definire valori predefiniti:

```dockerfile
# Definire variabili d'ambiente nel Dockerfile
ENV NODE_ENV=production
ENV PORT=3000
```

Quando esegui il container, puoi sovrascrivere questi valori:

```bash
docker run -e TELEGRAM_BOT_TOKEN=il_tuo_token -e PORT=8080 nome_immagine
```

### Render (produzione)

Su Render, configura le variabili d'ambiente nella dashboard:

1. Vai alla pagina del tuo servizio
2. Clicca su "Environment"
3. Aggiungi le variabili necessarie (chiave e valore)
4. Salva le modifiche e riavvia il servizio

## Proteggere il file .env

È fondamentale non includere il file `.env` nel repository Git:

1. Crea un file `.gitignore` nella root del progetto
2. Aggiungi `.env` al file:
```
# .gitignore
.env
node_modules/
```

3. Crea un file `.env.example` con la struttura ma senza valori reali:
```
# .env.example
TELEGRAM_BOT_TOKEN=your_token_here
PORT=3000
```

4. Includi `.env.example` nel repository come riferimento

## Accedere alle variabili d'ambiente nel bot Telegram

Ecco un esempio di come usare le variabili d'ambiente in un bot Telegram:

```javascript
// Carica le variabili d'ambiente
require('dotenv').config();

// Verifica che il token sia definito
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error('ERRORE: Token del bot Telegram non trovato!');
  console.error('Assicurati di aver configurato la variabile d\'ambiente TELEGRAM_BOT_TOKEN');
  process.exit(1);
}

// Inizializza il bot con il token
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });

// Altre configurazioni opzionali
const debug = process.env.DEBUG === 'true';
const port = process.env.PORT || 3000;

if (debug) {
  console.log('Bot avviato in modalità debug');
}

// Resto del codice del bot...
```

## Esercizio pratico

1. Crea un file `.env` per il tuo bot Telegram
2. Aggiungi il token del bot e altre configurazioni
3. Crea un file `.env.example` come template
4. Aggiungi `.env` al `.gitignore`
5. Modifica il codice del bot per usare le variabili d'ambiente
6. Testa il bot localmente
7. Configura le stesse variabili su Render per il deployment
