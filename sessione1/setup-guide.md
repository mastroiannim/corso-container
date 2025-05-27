# Guida alla configurazione degli ambienti di sviluppo

In questa guida imparerai a configurare tutti gli strumenti necessari per il corso. Seguendo questi passaggi, sarai pronto a sviluppare, containerizzare e pubblicare le tue applicazioni web.

## 1. Creazione account GitHub

GitHub è una piattaforma che permette di ospitare e gestire codice sorgente. Sarà il nostro punto di partenza.

1. Vai su [github.com](https://github.com)
2. Clicca su "Sign up" in alto a destra
3. Segui le istruzioni per creare un nuovo account
4. Verifica il tuo indirizzo email

## 2. Configurazione GitHub Codespaces

GitHub Codespaces è un ambiente di sviluppo cloud che useremo per scrivere codice senza installare nulla sul tuo computer.

1. Accedi al tuo account GitHub
2. Vai su [github.com/codespaces](https://github.com/codespaces)
3. Clicca su "New codespace"
4. Seleziona "Blank" come template
5. Clicca su "Create codespace"

Attendi che l'ambiente si avvii. Vedrai un editor di codice nel browser, simile a Visual Studio Code.

## 3. Creazione account DockerHub

DockerHub è un registro pubblico dove caricheremo le nostre immagini Docker.

1. Vai su [hub.docker.com](https://hub.docker.com)
2. Clicca su "Sign up" in alto a destra
3. Segui le istruzioni per creare un nuovo account
4. Verifica il tuo indirizzo email

## 4. Creazione account Render

Render è una piattaforma cloud che useremo per pubblicare le nostre applicazioni.

1. Vai su [render.com](https://render.com)
2. Clicca su "Sign Up" in alto a destra
3. Puoi registrarti usando il tuo account GitHub (consigliato)
4. Segui le istruzioni per completare la registrazione

## 5. Estensioni utili per Codespaces

Una volta che il tuo Codespace è attivo, installa queste estensioni utili:

1. Clicca sull'icona delle estensioni nella barra laterale (o premi Ctrl+Shift+X)
2. Cerca e installa le seguenti estensioni:
   - "Live Server" (per visualizzare le pagine HTML in tempo reale)
   - "HTML CSS Support" (per il completamento automatico di HTML e CSS)
   - "JavaScript (ES6) code snippets" (per scrivere JavaScript più velocemente)
   - "Docker" (per gestire container Docker)

## Verifica dell'installazione

Per verificare che tutto sia configurato correttamente, esegui questi comandi nel terminale di Codespaces:

```bash
# Verifica Git
git --version

# Verifica Node.js
node --version

# Verifica npm
npm --version
```

Se tutti i comandi restituiscono una versione, sei pronto per iniziare!

## Risoluzione problemi comuni

- **Problema**: Codespace non si avvia
  **Soluzione**: Riprova dopo qualche minuto o crea un nuovo Codespace

- **Problema**: Non riesci ad accedere a DockerHub
  **Soluzione**: Verifica di aver confermato l'email di registrazione

- **Problema**: Estensioni non si installano
  **Soluzione**: Riavvia il Codespace dal menu in basso a sinistra
