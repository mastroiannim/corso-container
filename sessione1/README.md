### [Corso di Sviluppo Web con Container](../readme.md)

# Sessione 1 – Fondamenti Web + Ambiente di Sviluppo

## Obiettivi della sessione
- Configurare gli ambienti di sviluppo: GitHub, Codespaces, DockerHub, Render
- Creare una pagina HTML base
- Imparare ad usare GitHub Codespaces
- Imparare ad usare l'estensione Live Server per Visual Studio Code
- Pubblicare il proprio repository su GitHub

## Materiali inclusi
- `setup-guide.md`: Guida alla configurazione degli ambienti di sviluppo
- `html-template/`: Cartella con template HTML base
- `git-commands.md`: Guida ai comandi Git essenziali
- `esercizio-pagina-personale/`: Template per l'esercizio finale
- Guida all'uso di GitHub Codespaces
- Guida all'uso dell'estensione Live Server

## Prerequisiti
- Un computer con accesso a internet
- Un browser web moderno (Chrome, Firefox, Edge, ecc.)
- Nessuna conoscenza di programmazione richiesta

## Durata
4 ore di attività pratica al computer

## Note per gli studenti
Tutti i comandi da eseguire sono evidenziati in blocchi di codice per facilitarne la copia. Segui le istruzioni passo dopo passo e non esitare a chiedere aiuto se qualcosa non è chiaro.

## Esercizio: Pagina Personale con GitHub Codespaces

### Passo 1: Configurare GitHub Codespaces
1. Accedi al tuo account GitHub (o creane uno se non lo hai già)
2. Vai su https://github.com/new per creare un nuovo repository
3. Assegna un nome al repository (es. `pagina-personale`)
4. Seleziona l'opzione "Public" e clicca su "Create repository"
5. Nel tuo nuovo repository, clicca sul pulsante "Code" (verde)
6. Seleziona la scheda "Codespaces" e clicca su "Create codespace on main"
7. Attendi che l'ambiente di sviluppo si carichi completamente

### Passo 2: Creare la struttura del progetto
1. Una volta caricato Codespaces, avrai accesso a Visual Studio Code nel browser
2. Nel terminale integrato (se non è già aperto, premi Ctrl+` o vai su Terminal > New Terminal), esegui:
   ```bash
   mkdir -p css js img
   touch index.html css/style.css js/script.js
   ```
3. Questo creerà la struttura base del progetto con cartelle per CSS, JavaScript e immagini

### Passo 3: Sviluppare la pagina personale
1. Nel file explorer di VS Code, apri il file `index.html`
2. Copia il template HTML di base dalla cartella `esercizio-pagina-personale` o usa questo esempio:
   ```html
   <!DOCTYPE html>
   <html lang="it">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>La Mia Pagina Personale</title>
       <link rel="stylesheet" href="css/style.css">
   </head>
   <body>
       <header>
           <h1>Il Mio Nome</h1>
           <p>Sviluppatore Web in formazione</p>
       </header>
       <main>
           <section id="chi-sono">
               <h2>Chi Sono</h2>
               <p>Scrivi qui una breve descrizione di te stesso...</p>
           </section>
           <section id="competenze">
               <h2>Le Mie Competenze</h2>
               <ul>
                   <li>HTML</li>
                   <li>CSS (in apprendimento)</li>
                   <li>JavaScript (in apprendimento)</li>
               </ul>
           </section>
           <section id="contatti">
               <h2>Contatti</h2>
               <p>Email: tua.email@esempio.com</p>
               <p>GitHub: <a href="https://github.com/tuousername">github.com/tuousername</a></p>
           </section>
       </main>
       <footer>
           <p>&copy; 2025 - Il Mio Nome</p>
       </footer>
       <script src="js/script.js"></script>
   </body>
   </html>
   ```
3. Personalizza il contenuto con le tue informazioni
4. Apri il file `css/style.css` e aggiungi del CSS base:
   ```css
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }
   
   body {
       font-family: Arial, sans-serif;
       line-height: 1.6;
       color: #333;
       max-width: 800px;
       margin: 0 auto;
       padding: 20px;
   }
   
   header {
       text-align: center;
       margin-bottom: 30px;
       padding: 20px;
       background-color: #f4f4f4;
       border-radius: 5px;
   }
   
   section {
       margin-bottom: 30px;
   }
   
   h1, h2 {
       margin-bottom: 15px;
   }
   
   ul {
       padding-left: 20px;
   }
   
   footer {
       text-align: center;
       margin-top: 50px;
       padding: 20px;
       background-color: #f4f4f4;
       border-radius: 5px;
   }
   ```

### Passo 4: Visualizzare l'anteprima con Live Server
1. Installa l'estensione Live Server in VS Code:
   - Clicca sull'icona delle estensioni nella barra laterale (o premi Ctrl+Shift+X)
   - Cerca "Live Server"
   - Seleziona l'estensione di Ritwick Dey e clicca su "Install"
2. Una volta installata, clicca con il tasto destro sul file `index.html` nel file explorer
3. Seleziona "Open with Live Server" dal menu contestuale
4. Si aprirà una nuova finestra o tab del browser con l'anteprima della tua pagina
5. Ogni modifica salvata ai file verrà automaticamente aggiornata nell'anteprima

### Passo 5: Pubblicare su GitHub
1. Nel terminale integrato, esegui i seguenti comandi per salvare le modifiche:
   ```bash
   git add .
   git commit -m "Creazione pagina personale"
   git push
   ```
2. Attendi che il push sia completato
3. Vai al tuo repository su GitHub per verificare che i file siano stati caricati correttamente
4. La tua pagina personale è ora pubblicata e il codice è disponibile nel tuo repository GitHub

### Passo 6: Chiudere e riaprire il Codespace (opzionale)
1. Per chiudere il Codespace, vai su https://github.com/codespaces
2. Trova il tuo Codespace nell'elenco e clicca sui tre puntini (...)
3. Seleziona "Stop codespace" per metterlo in pausa
4. Per riaprirlo in futuro, torna alla stessa pagina e clicca sul Codespace
