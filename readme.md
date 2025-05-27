# Corso Laboratoriale: Sviluppo Web, Containerizzazione e Deployment  
**Durata:** 5 incontri da 4 ore  

---

## Struttura del Corso

### **Sessione 1: Strumenti e fondamenti di HTML**  
**Obiettivi:**  
- Creare account su GitHub
- Creare una pagina HTML base.
- Creare account su Render (opzionale, servirà dopo)
- Creare account su DockerHub (opzionale, servirà dopo)
- Configurare GitHub Codespaces e usare il terminale bash.  
  

**Contenuti:**  
1. **Strumenti di sviluppo (1 ora):** 
   - Accesso a GitHub Codespaces.  
   - Terminale bash: comandi base (`ls`, `cd`, `mkdir`, `touch`).  
   - Estensione Live Server per l'anteprima in tempo reale.
   - Estensione Docker per lavorare su container.
2. **HTML base (2.5 ore):**  
   - Struttura di un documento HTML (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).  
   - Tag principali: `<h1>`, `<p>`, `<ul>`, `<img>`, `<a>`.  
   - **Esercizio:** Pagina "Chi sono" con testo, immagini e link.  
3. **Account per la distribuzione (opzionali, serviranno dopo)**
   - Iscrizione su Render
   - Iscrizione su DockerHub
4. **GitHub Basics (0.5 ore):**  
   - Commit e push del progetto tramite terminale.

---

### **Sessione 2: Javascript, CSS e Design Responsivo**  
**Obiettivi:**

- Stilizzare pagine HTML con CSS.  
- Rendere il layout adattabile a dispositivi mobili.  

**Contenuti:**  

1. **CSS Base (1 ora):**  
   - Selettori, proprietà (`color`, `margin`, `padding`), collegamento a HTML.  
2. **JavaScript Base e Gioco del Tris (2 ore):**  
   - Introdurre JavaScript per l'interattività.  
   - Sviluppare un gioco funzionante.
3. **JavaScript Essentials (1.5 ore):**  
   - Variabili, funzioni, `addEventListener`.  
   - Manipolazione DOM (`getElementById`, `innerHTML`).  
4. **Esercizio: Tris (2 ore):**  
   - Logica del gioco e controllo della vittoria.  
5. **Debug (0.5 ore):**  
   - Uso di `console.log()` e Chrome DevTools.

---

### **Sessione 3: Memory Game e GitHub Pages**  
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

### **Sessione 4: Deployment Professionale con Render**  
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

### **Sessione 5: Containerizzazione e Bot Telegram**  
**Obiettivi:**  
- Containerizzare applicazioni con Docker.  
- Distribuire un bot Telegram come worker su Render.  

**Contenuti:**  
1. **Docker Base (2 ore):**  
   - Creare un Dockerfile per un sito statico.
   - Comandi: `docker build`, `docker run`, `docker push`.  
2. **Bot Telegram (1.5 ore):**  
   - Script Node.js con `node-telegram-bot-api`.
   - Dockerfile per il bot.
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
  - [Repository GitHub con codice base](https://github.com/mastroiannim/corso-container)  
  - File `.dockerignore` e `Dockerfile` preconfigurati  
- **Cheat Sheet:**  
  - Comandi Docker e bash  
  - Sintassi rapida HTML/CSS/JS  

---

## Valutazione  
1. **Criteri:**  
   - Compleamento di tutti i progetti (Tris, Memory, Bot).  
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

**Docente:** [Michele Mastroianni]  

