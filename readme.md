# Corso Laboratoriale: Sviluppo Web, Containerizzazione e Deployment  
**Durata:** 6 incontri da 4 ore  
**Destinatari:** Studenti di seconda superiore (istituto tecnico informatico)  

---

## Struttura del Corso

### **Sessione 1: Strumenti e Fondamenti di HTML**  
**Obiettivi:**  
- Configurare GitHub Codespaces e usare il terminale bash.  
- Creare una pagina HTML base.  

**Contenuti:**  
1. **Strumenti di sviluppo (1 ora):**  
   - Accesso a GitHub Codespaces.  
   - Terminale bash: comandi base (`ls`, `cd`, `mkdir`, `touch`).  
   - Estensione Live Server per l'anteprima in tempo reale.  
2. **HTML base (2.5 ore):**  
   - Struttura di un documento HTML (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).  
   - Tag principali: `<h1>`, `<p>`, `<ul>`, `<img>`, `<a>`.  
   - **Esercizio:** Pagina "Chi sono" con testo, immagini e link.  
3. **GitHub Basics (0.5 ore):**  
   - Commit e push del progetto tramite terminale.

---

### **Sessione 2: CSS e Design Responsivo**  
**Obiettivi:**  
- Stilizzare pagine HTML con CSS.  
- Rendere il layout adattabile a dispositivi mobili.  

**Contenuti:**  
1. **CSS Base (1 ora):**  
   - Selettori, proprietà (`color`, `margin`, `padding`), collegamento a HTML.  
2. **Esercitazione (2 ore):**  
   - Stilizzare la pagina "Chi sono" con Flexbox/Grid.  
   - Media query per dispositivi mobili.  
3. **Progetto: Portfolio (1 ora):**  
   - Creare un mini-portfolio con HTML + CSS.

---

### **Sessione 3: JavaScript Base e Gioco del Tris**  
**Obiettivi:**  
- Introdurre JavaScript per l'interattività.  
- Sviluppare un gioco funzionante.  

**Contenuti:**  
1. **JavaScript Essentials (1.5 ore):**  
   - Variabili, funzioni, `addEventListener`.  
   - Manipolazione DOM (`getElementById`, `innerHTML`).  
2. **Esercizio: Tris (2 ore):**  
   - Logica del gioco e controllo della vittoria.  
3. **Debug (0.5 ore):**  
   - Uso di `console.log()` e Chrome DevTools.

---

### **Sessione 4: Memory Game e GitHub Pages**  
**Obiettivi:**  
- Creare un Memory Game con JavaScript.  
- Pubblicare il progetto su GitHub Pages.  

**Contenuti:**  
1. **Memory Game (2.5 ore):**  
   - Gestione array per le carte, timer e tentativi.  
2. **GitHub Pages (1 ora):**  
   - Configurazione del repository per il hosting pubblico.  
3. **Limitazioni di Codespaces (0.5 ore):**  
   - Spiegazione ambienti temporanei vs. produzione.

---

### **Sessione 5: Deployment Professionale con Render**  
**Obiettivi:**  
- Distribuire un sito statico su Render.  
- Confrontare soluzioni di hosting.  

**Contenuti:**  
1. **Deploy su Render (2 ore):**  
   - Collegamento repository GitHub e configurazione servizio statico.  
2. **Render vs GitHub Pages (1 ora):**  
   - Vantaggi: domini personalizzati, scalabilità.  
3. **Demo Progetti (1 ora):**  
   - Presentazione dei portfolio e giochi deployati.

---

### **Sessione 6: Containerizzazione e Bot Telegram**  
**Obiettivi:**  
- Containerizzare applicazioni con Docker.  
- Distribuire un bot Telegram come worker su Render.  

**Contenuti:**  
1. **Docker Base (2 ore):**  
   - Creare un Dockerfile per un sito statico:  
     ```dockerfile
     FROM nginx:alpine  
     COPY ./site /usr/share/nginx/html  
     ```  
   - Comandi: `docker build`, `docker run`, `docker push`.  
2. **Bot Telegram (1.5 ore):**  
   - Script Node.js con `node-telegram-bot-api`:  
     ```javascript
     const bot = new TelegramBot(process.env.TOKEN, {polling: true});
     bot.onText(/\/start/, (msg) => { /* ... */ });
     ```  
   - Dockerfile per il bot:  
     ```dockerfile
     FROM node:18
     WORKDIR /app
     COPY package*.json ./
     RUN npm install
     COPY . .
     CMD ["node", "bot.js"]
     ```  
3. **Deploy Avanzato (0.5 ore):**  
   - Configurare un "Worker" su Render collegato a Docker Hub.

---

## Progetto Finale  
**Bot Telegram Containerizzato**  
1. **Requisiti:**  
   - Rispondere a 2 comandi (es. `/start`, `/info`).  
   - Deploy su Docker Hub e Render come worker.  
2. **Passaggi Chiave:**  
   - Usare variabili d’ambiente per il token (`.env` + `.gitignore`).  
   - Automatizzare il rebuild su Render tramite webhook di Docker Hub.

---

## Materiale e Risorse  
- **Template:**  
  - [Repository GitHub con codice base](https://github.com/example-template)  
  - File `.dockerignore` e `Dockerfile` preconfigurati  
- **Cheat Sheet:**  
  - Comandi Docker e bash  
  - Sintassi rapida HTML/CSS/JS  

---

## Valutazione  
1. **Criteri:**  
   - Compleamento di tutti i progetti (Tris, Memory, Portfolio, Bot).  
   - Deployment funzionante su GitHub Pages e Render.  
   - Spiegazione del workflow containerizzazione-deploy.  
2. **Extra Points:**  
   - Personalizzazione creativa dei progetti (es. temi grafici).  

---

## Note Importanti  
- **Sicurezza:** Mai commitare token o dati sensibili (usare `.env` + `.gitignore`).  
- **Limitazioni Render:**  
  - Worker gratuiti si spengono dopo 15 minuti di inattività.  
  - Traffico massimo: 750 ore/mese sul piano free.  

---

**Docente:** [Nome Docente]  
**Contatti:** [email@istituto.it](mailto:email@istituto.it) | [Repository Ufficiale](https://github.com/example-course)  
