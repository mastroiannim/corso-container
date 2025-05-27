# 💻 Corso Laboratoriale: Sviluppo Web, Containerizzazione e Deployment
**Durata:** 5 incontri da 4 ore  
**Totale:** 20 ore di attività pratica al computer  
**Repository ufficiale:** [mastroiannim/corso-container](https://github.com/mastroiannim/corso-container)  
> Tutto il corso si svolge in modalità **laboratoriale**. Gli studenti lavorano al computer in modo attivo e continuo.
---
## 📚 Prerequisiti
- Uso base del computer e del terminale
- Navigazione file system (`cd`, `ls`, ecc.)
- Minime basi di programmazione (facoltative ma utili)
---
## 🗂️ Struttura del Corso
### 📘 **Sessione 1 – Fondamenti Web + Ambiente di Sviluppo**
**Obiettivi:**
- Setup ambienti: GitHub, Codespaces, DockerHub, Render
- Creare una pagina HTML base
- Imparare ad usare GitHub Codespaces
- Imparare ad usare l'estensione Live Server per Visual Studio Code
- Pubblicare il proprio repository su GitHub

**Contenuti:**
- Configurazione GitHub Codespaces + estensioni
- HTML base: tag comuni, struttura, pagina "Chi sono"
- Guida all'uso di GitHub Codespaces
- Guida all'uso dell'estensione Live Server
- Pubblicazione repo su GitHub
> 🛠️ **Esercizio:** Pagina personale pubblicata su GitHub
---
### 🎨 **Sessione 2 – CSS + JS Interattivo: Gioco del Tris**
**Obiettivi:**
- Comprendere i limiti degli ambienti temporanei (Codespaces)
- Imparare a Pubblicare il progetto su GitHub Pages

**Contenuti:**
- CSS base + responsive design
- JS: DOM, funzioni, eventi
- Debug con DevTools
- Documentazione sui limiti degli ambienti temporanei
- Guida al deploy su GitHub Pages
> 🛠️ **Esercizio:** Gioco Tris pubblicato su GitHub Pages
---
### 🧠 **Sessione 3 – Memory Game + GitHub Pages**
**Obiettivi:**
- Realizzare un'applicazione più complessa con JavaScript
- Imparare a gestire array, timer e condizioni di vittoria

**Contenuti:**
- Costruzione di un Memory Game
- Gestione array, timer, condizioni di vittoria
- Utilizzo di GitHub Codespaces come ambiente di sviluppo
- Pubblicazione su GitHub Pages
> 🛠️ **Esercizio:** Memory Game sviluppato con GitHub Codespaces e pubblicato su GitHub Pages
---
### 🚀 **Sessione 4 – Deployment Professionale con Render**
**Obiettivi:**
- Imparare a fare il deploy di un sito statico su Render
- Confrontare diverse soluzioni di hosting: Render vs GitHub Pages
- Configurare un dominio personalizzato
- Impostare la build automatica da GitHub

**Contenuti:**
- Configurazione Render (link repo GitHub)
- Gestione dominio, build automatica
- Template per portfolio personale
- Condivisione e presentazione dei portfolio
> 🛠️ **Esercizio:** Portfolio personale online via Render con dominio personalizzato
---
### 📦 **Sessione 5 – Docker + Bot Telegram (Worker su Render)**
**Obiettivi:**
- Imparare i concetti base di Docker e containerizzazione
- Creare un Dockerfile per un'applicazione Node.js
- Sviluppare un bot Telegram funzionante
- Deployare il bot come worker su Render
- Utilizzare variabili d'ambiente per gestire token e configurazioni

**Contenuti:**
- Dockerfile base, build, push su DockerHub
- Bot Telegram con `node-telegram-bot-api`
- Configurazione servizio worker su Render
- Gestione variabili d'ambiente e sicurezza
> 🛠️ **Esercizio:** Bot Telegram containerizzato con Docker e deployato come worker su Render
---
## 🧪 Progetto Finale: Bot Telegram Containerizzato
### ✅ Requisiti
- Comandi minimi: `/start`, `/info`
- Uso variabili d'ambiente (`.env`, `.gitignore`)
- Deploy su DockerHub + Render Worker
### 📌 Passaggi Chiave
1. Creare bot con [@BotFather](https://t.me/botfather)
2. Scrivere codice in Node.js
3. Creare `Dockerfile`
4. Push su DockerHub
5. Deploy su Render come worker
6. Automazione rebuild con Webhook
---
## 📝 Valutazione
| Criterio                              | Punteggio |
|--------------------------------------|-----------|
| ✅ Completamento dei progetti         | 40%       |
| 🚀 Deployment funzionante             | 30%       |
| 🧠 Spiegazione del workflow           | 20%       |
| 🎨 Creatività e personalizzazione     | 10%       |
### 🎖️ Extra Points
- UI personalizzata (temi, animazioni)
- Uso di API esterne
- Funzionalità aggiuntive nei bot
---
## 📦 Materiali Utili
- [Template base GitHub](https://github.com/mastroiannim/corso-container)
- File di esempio: `.env`, `.gitignore`, `Dockerfile`
- Cheat Sheet:
  - Docker: comandi essenziali
  - HTML/CSS/JS: sintassi rapida
  - Bash: navigazione terminale
---
## ⚠️ Note Importanti
- **Sicurezza:** Non pubblicare token (usare `.env` + `.gitignore`)
- **Render Free Tier:**
  - Worker spenti dopo 15 minuti di inattività
  - Max 750h/mese (contatore cumulativo)
- **Suggerimento:** testare in anticipo i rebuild automatici
---
## 👨‍🏫 Docente
[Michele Mastroianni](https://github.com/mastroiannim)  
Contatto disponibile nel repo o via GitHub Issues
---
## 📌 Licenza
Distribuito con licenza MIT.  
Contributi, fork e suggerimenti benvenuti!
---
