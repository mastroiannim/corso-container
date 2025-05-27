// Telegram Bot Template
// Questo è un template di base per un bot Telegram con Node.js

// Carica le variabili d'ambiente
require('dotenv').config();

// Importa la libreria node-telegram-bot-api
const TelegramBot = require('node-telegram-bot-api');

// Verifica che il token sia definito
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error('ERRORE: Token del bot Telegram non trovato!');
  console.error('Assicurati di aver configurato la variabile d\'ambiente TELEGRAM_BOT_TOKEN');
  process.exit(1);
}

// Crea una nuova istanza del bot
const bot = new TelegramBot(token, { polling: true });

// Gestisce il comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userName = msg.from.first_name;
  
  bot.sendMessage(
    chatId,
    `Ciao ${userName}! 👋\n\nSono il tuo bot Telegram di esempio. Sono stato creato durante il corso di containerizzazione.\n\nUsa /help per vedere i comandi disponibili.`
  );
});

// Gestisce il comando /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(
    chatId,
    `Ecco i comandi disponibili:\n
/start - Avvia il bot
/help - Mostra questo messaggio di aiuto
/info - Informazioni sul bot
/echo [messaggio] - Ripete il messaggio
/random - Genera un numero casuale
/time - Mostra l'ora attuale`
  );
});

// Gestisce il comando /info
bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(
    chatId,
    `🤖 *Informazioni sul Bot* 🤖\n
*Nome:* Bot di Esempio
*Versione:* 1.0.0
*Creato da:* [Il tuo nome]
*Tecnologie:* Node.js, Docker, Render
*Corso:* Sviluppo Web, Containerizzazione e Deployment
*Repository:* [Link al tuo repository GitHub]`,
    { parse_mode: 'Markdown' }
  );
});

// Gestisce il comando /echo
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // Il testo catturato dal gruppo di regex
  
  bot.sendMessage(chatId, resp);
});

// Gestisce il comando /random
bot.onText(/\/random/, (msg) => {
  const chatId = msg.chat.id;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  
  bot.sendMessage(chatId, `🎲 Numero casuale: ${randomNumber}`);
});

// Gestisce il comando /time
bot.onText(/\/time/, (msg) => {
  const chatId = msg.chat.id;
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString();
  
  bot.sendMessage(chatId, `📅 Data: ${dateString}\n⏰ Ora: ${timeString}`);
});

// Gestisce i messaggi non riconosciuti
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // Ignora i comandi
  if (msg.text && msg.text.startsWith('/')) {
    return;
  }
  
  // Risponde ai messaggi di testo
  if (msg.text) {
    bot.sendMessage(
      chatId,
      `Hai scritto: "${msg.text}"\n\nNon sono ancora in grado di rispondere a messaggi personalizzati. Usa /help per vedere i comandi disponibili.`
    );
  }
});

// Gestisce gli errori
bot.on('polling_error', (error) => {
  console.error('Errore di polling:', error);
});

// Messaggio di avvio
console.log('Bot Telegram avviato!');
console.log('Premi Ctrl+C per terminare.');

// Gestisce la chiusura graceful
process.on('SIGINT', () => {
  console.log('Bot in chiusura...');
  bot.stopPolling();
  process.exit(0);
});

// Gestisce gli errori non catturati
process.on('uncaughtException', (error) => {
  console.error('Errore non catturato:', error);
  bot.stopPolling();
  process.exit(1);
});
