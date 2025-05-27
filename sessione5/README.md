# Sessione 5 – Docker + Bot Telegram (Worker su Render)

## Obiettivi della sessione
- Imparare i concetti base di Docker e containerizzazione
- Creare un Dockerfile per un'applicazione Node.js
- Sviluppare un bot Telegram funzionante
- Deployare il bot come worker su Render
- Utilizzare variabili d'ambiente per gestire token e configurazioni

## Materiali inclusi
- `docker-guide.md`: Guida ai concetti base di Docker e comandi essenziali
- `telegram-bot/`: Template per il bot Telegram con Node.js
- `render-worker-guide.md`: Guida al deploy di un worker su Render
- `env-guide.md`: Guida all'uso delle variabili d'ambiente

## Prerequisiti
- Aver completato le Sessioni 1-4
- Account GitHub, DockerHub e Render
- Account Telegram per testare il bot

## Durata
4 ore di attività pratica al computer

## Note per gli studenti
In questa sessione finale metterai insieme tutte le competenze acquisite per creare un bot Telegram containerizzato e deployarlo come servizio worker su Render. Questo progetto rappresenta un'applicazione reale che combina sviluppo web, containerizzazione e deployment cloud.

## Esercizio: Bot Telegram Containerizzato con Docker e Deploy su Render

### Passo 1: Creare un Bot Telegram con BotFather
1. Apri Telegram e cerca "@BotFather"
2. Avvia una chat con BotFather e invia il comando `/newbot`
3. Segui le istruzioni per assegnare un nome e uno username al tuo bot
4. Al termine, BotFather ti fornirà un token API. **Conservalo con cura, è riservato!**
5. Puoi personalizzare ulteriormente il tuo bot con i comandi:
   - `/setdescription` - Imposta la descrizione del bot
   - `/setuserpic` - Imposta l'immagine del profilo del bot
   - `/setcommands` - Definisci i comandi disponibili

### Passo 2: Preparare il Progetto in GitHub
1. Crea un nuovo repository su GitHub (es. `telegram-bot`)
2. Clona il repository sul tuo computer o utilizza GitHub Codespaces:
   ```bash
   git clone https://github.com/tuousername/telegram-bot.git
   cd telegram-bot
   ```
   oppure crea un nuovo Codespace dal repository

### Passo 3: Configurare il Progetto Node.js
1. Inizializza un nuovo progetto Node.js:
   ```bash
   npm init -y
   ```
2. Installa le dipendenze necessarie:
   ```bash
   npm install node-telegram-bot-api dotenv
   ```
3. Crea un file `.gitignore` per escludere file sensibili:
   ```bash
   echo "node_modules\n.env\n.DS_Store" > .gitignore
   ```
4. Crea un file `.env` per le variabili d'ambiente:
   ```bash
   echo "BOT_TOKEN=il_tuo_token_telegram" > .env
   ```
   Sostituisci `il_tuo_token_telegram` con il token ottenuto da BotFather
5. Crea un file `.env.example` come riferimento (senza valori reali):
   ```bash
   echo "BOT_TOKEN=your_telegram_bot_token" > .env.example
   ```

### Passo 4: Sviluppare il Bot Telegram
1. Crea un file `index.js` con il codice base del bot:
   ```javascript
   require('dotenv').config();
   const TelegramBot = require('node-telegram-bot-api');

   // Ottieni il token dalle variabili d'ambiente
   const token = process.env.BOT_TOKEN;
   if (!token) {
     console.error('BOT_TOKEN non trovato nelle variabili d\'ambiente');
     process.exit(1);
   }

   // Crea una nuova istanza del bot
   const bot = new TelegramBot(token, { polling: true });

   // Gestisci il comando /start
   bot.onText(/\/start/, (msg) => {
     const chatId = msg.chat.id;
     bot.sendMessage(chatId, 'Ciao! Sono il tuo bot Telegram. Usa /help per vedere i comandi disponibili.');
   });

   // Gestisci il comando /help
   bot.onText(/\/help/, (msg) => {
     const chatId = msg.chat.id;
     bot.sendMessage(chatId, `
   Comandi disponibili:
   /start - Avvia il bot
   /help - Mostra questo messaggio di aiuto
   /info - Informazioni sul bot
   `);
   });

   // Gestisci il comando /info
   bot.onText(/\/info/, (msg) => {
     const chatId = msg.chat.id;
     bot.sendMessage(chatId, `
   Bot creato durante il corso di Containerizzazione e Deployment.
   Versione: 1.0.0
   Ambiente: ${process.env.NODE_ENV || 'development'}
   `);
   });

   // Gestisci messaggi non riconosciuti
   bot.on('message', (msg) => {
     const chatId = msg.chat.id;
     
     // Ignora i comandi che abbiamo già gestito
     if (msg.text && (msg.text.startsWith('/start') || 
                      msg.text.startsWith('/help') || 
                      msg.text.startsWith('/info'))) {
       return;
     }
     
     bot.sendMessage(chatId, 'Non ho capito. Usa /help per vedere i comandi disponibili.');
   });

   console.log('Bot avviato con successo!');
   ```

2. Aggiorna il file `package.json` per includere gli script di avvio:
   ```json
   {
     "scripts": {
       "start": "node index.js",
       "dev": "nodemon index.js"
     }
   }
   ```

### Passo 5: Testare il Bot Localmente
1. Avvia il bot in locale:
   ```bash
   npm start
   ```
2. Apri Telegram e cerca il tuo bot usando lo username che hai impostato
3. Invia i comandi `/start`, `/help` e `/info` per verificare che funzionino
4. Prova a inviare messaggi casuali per testare la gestione dei messaggi non riconosciuti
5. Premi Ctrl+C nel terminale per arrestare il bot quando hai finito di testarlo

### Passo 6: Creare il Dockerfile
1. Crea un file `Dockerfile` nella root del progetto:
   ```dockerfile
   FROM node:18-alpine

   WORKDIR /app

   COPY package*.json ./

   RUN npm install --production

   COPY . .

   CMD ["npm", "start"]
   ```

2. Crea un file `.dockerignore` per escludere file non necessari:
   ```bash
   echo "node_modules\n.env\n.git\n.gitignore\n.DS_Store" > .dockerignore
   ```

### Passo 7: Costruire e Testare l'Immagine Docker
1. Costruisci l'immagine Docker:
   ```bash
   docker build -t telegram-bot .
   ```
2. Esegui il container localmente per testarlo:
   ```bash
   docker run --env-file .env -it telegram-bot
   ```
3. Verifica che il bot funzioni correttamente su Telegram
4. Premi Ctrl+C per arrestare il container quando hai finito di testarlo

### Passo 8: Pubblicare su GitHub e DockerHub
1. Commit e push dei file su GitHub (assicurati che `.env` sia nel `.gitignore`):
   ```bash
   git add .
   git commit -m "Creato bot Telegram con Dockerfile"
   git push
   ```
2. Accedi a DockerHub:
   ```bash
   docker login
   ```
3. Tagga l'immagine con il tuo username DockerHub:
   ```bash
   docker tag telegram-bot tuousername/telegram-bot:latest
   ```
4. Pubblica l'immagine su DockerHub:
   ```bash
   docker push tuousername/telegram-bot:latest
   ```

### Passo 9: Deployare su Render come Worker
1. Accedi al tuo account Render
2. Dalla dashboard, clicca su "New" e seleziona "Web Service"
3. Nella sezione "Deploy from image repository", seleziona "Docker Hub"
4. Inserisci il nome dell'immagine Docker: `tuousername/telegram-bot:latest`
5. Configura il servizio:
   - **Nome**: Assegna un nome al tuo servizio (es. `telegram-bot`)
   - **Tipo di piano**: Seleziona "Free"
   - **Regione**: Scegli la regione più vicina a te
6. Nella sezione "Environment Variables", aggiungi la variabile:
   - **Chiave**: `BOT_TOKEN`
   - **Valore**: Il token del tuo bot Telegram
7. Clicca su "Create Web Service"

### Passo 10: Monitorare e Gestire il Bot su Render
1. Attendi che il deployment sia completato (status: "Live")
2. Verifica che il bot sia attivo su Telegram
3. Nella dashboard di Render, puoi:
   - Visualizzare i log del servizio
   - Monitorare l'utilizzo delle risorse
   - Riavviare il servizio se necessario
   - Aggiornare le variabili d'ambiente

### Passo 11: Configurare l'Aggiornamento Automatico (opzionale)
1. In Render, vai alla pagina del tuo servizio e clicca sulla scheda "Settings"
2. Nella sezione "Build & Deploy", puoi configurare:
   - **Auto-Deploy**: Attiva per aggiornare automaticamente quando l'immagine Docker cambia
   - **Branch**: Specifica il branch da cui deployare
3. Per un'integrazione più avanzata, puoi configurare un webhook DockerHub per avviare automaticamente un nuovo deployment quando l'immagine viene aggiornata

### Passo 12: Estendere il Bot (opzionale)
1. Aggiungi nuove funzionalità al tuo bot, come:
   - Integrazione con API esterne
   - Comandi personalizzati
   - Gestione di immagini o file
   - Implementazione di un database per memorizzare dati utente
2. Aggiorna il codice, ricostruisci l'immagine Docker e pubblica le modifiche
3. Render aggiornerà automaticamente il servizio con la nuova versione
