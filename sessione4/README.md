### [Corso di Sviluppo Web con Container](../readme.md)

# Sessione 4 – Deployment Professionale con Render

## Obiettivi della sessione
- Imparare a fare il deploy di un sito statico su Render
- Confrontare diverse soluzioni di hosting: Render vs GitHub Pages
- Configurare un dominio personalizzato
- Impostare la build automatica da GitHub

## Materiali inclusi
- `render-guide.md`: Guida completa alla configurazione di Render
- `portfolio-template/`: Template per il portfolio personale
- `domain-guide.md`: Guida alla gestione del dominio e build automatica

## Prerequisiti
- Aver completato le Sessioni 1, 2 e 3
- Avere un account GitHub con repository
- Avere un account Render (creato nella Sessione 1)

## Durata
4 ore di attività pratica al computer

## Note per gli studenti
In questa sessione imparerai a pubblicare il tuo portfolio personale su Render, una piattaforma di hosting professionale. Rispetto a GitHub Pages, Render offre maggiori funzionalità e controllo sul processo di deployment.

## Esercizio: Portfolio Personale su Render con Dominio Personalizzato

### Passo 1: Preparare il progetto in GitHub
1. Accedi al tuo account GitHub
2. Vai su https://github.com/new per creare un nuovo repository
3. Assegna un nome al repository (es. `portfolio-personale`)
4. Seleziona l'opzione "Public" e clicca su "Create repository"
5. Clona il repository sul tuo computer o utilizza GitHub Codespaces:
   ```bash
   git clone https://github.com/tuousername/portfolio-personale.git
   cd portfolio-personale
   ```
   oppure crea un nuovo Codespace dal repository

### Passo 2: Utilizzare il template del portfolio
1. Copia i file dal template fornito nella cartella `portfolio-template/` nel tuo repository:
   - `index.html`: Struttura principale del portfolio
   - `style.css`: Stili e layout responsive
   - `script.js`: Funzionalità interattive
2. Se stai lavorando in locale, copia i file manualmente; se stai usando Codespaces, puoi creare i file e copiare il contenuto:
   ```bash
   touch index.html style.css script.js
   ```

3. Per `index.html`, copia il contenuto dal template e personalizzalo con le tue informazioni:
   - Modifica il titolo e la descrizione
   - Aggiorna la sezione "Chi sono"
   - Personalizza i progetti mostrati
   - Aggiorna le informazioni di contatto

4. Personalizza `style.css` secondo le tue preferenze:
   - Cambia i colori principali
   - Modifica i font
   - Adatta il layout alle tue esigenze

5. Adatta `script.js` se necessario per aggiungere funzionalità personalizzate

### Passo 3: Testare il sito localmente
1. Se stai usando Codespaces o VS Code, utilizza l'estensione Live Server:
   - Clicca con il tasto destro su `index.html`
   - Seleziona "Open with Live Server"
2. Verifica che il sito funzioni correttamente:
   - Controlla che sia responsive (ridimensiona la finestra del browser)
   - Verifica che tutte le sezioni siano visualizzate correttamente
   - Assicurati che le interazioni JavaScript funzionino

### Passo 4: Pubblicare su GitHub
1. Dopo aver apportato le modifiche, salva i file e pubblica su GitHub:
   ```bash
   git add .
   git commit -m "Aggiunto portfolio personale"
   git push
   ```
2. Verifica che i file siano stati caricati correttamente nel tuo repository GitHub

### Passo 5: Configurare Render per il deployment
1. Accedi al tuo account Render (o creane uno su https://render.com)
2. Dalla dashboard, clicca su "New" e seleziona "Static Site"
3. Collega il tuo account GitHub se non l'hai già fatto
4. Seleziona il repository `portfolio-personale` dall'elenco
5. Configura le impostazioni di deployment:
   - **Nome**: Assegna un nome al tuo sito (es. `mio-portfolio`)
   - **Branch**: `main` (o il branch che stai utilizzando)
   - **Directory di pubblicazione**: Lascia vuoto se i file sono nella root del repository
   - **Build Command**: Lascia vuoto se non hai bisogno di build (per siti statici semplici)
6. Clicca su "Create Static Site"

### Passo 6: Verificare il deployment
1. Render inizierà automaticamente il processo di deployment
2. Attendi che il deployment sia completato (status: "Live")
3. Clicca sull'URL generato da Render (solitamente nella forma `https://mio-portfolio.onrender.com`)
4. Verifica che il tuo portfolio sia visualizzato correttamente online

### Passo 7: Configurare un dominio personalizzato (opzionale)
1. Acquista un dominio da un provider (es. Namecheap, GoDaddy, Google Domains)
2. In Render, vai alla pagina del tuo sito e clicca sulla scheda "Settings"
3. Scorri fino alla sezione "Custom Domains" e clicca su "Add Custom Domain"
4. Inserisci il tuo dominio (es. `miodominio.com` o `portfolio.miodominio.com`)
5. Segui le istruzioni di Render per configurare i record DNS:
   - Per un dominio apex (es. `miodominio.com`): Aggiungi record A che puntano agli IP di Render
   - Per un sottodominio (es. `portfolio.miodominio.com`): Aggiungi un record CNAME che punta al tuo sito Render
6. Attendi che la propagazione DNS sia completata (può richiedere fino a 48 ore)
7. Verifica che il tuo sito sia accessibile tramite il dominio personalizzato

### Passo 8: Configurare la build automatica
1. In Render, la build automatica è attivata per impostazione predefinita
2. Ogni volta che effettui un push al repository GitHub, Render rileverà le modifiche e avvierà automaticamente un nuovo deployment
3. Per testare questa funzionalità:
   - Apporta una piccola modifica al tuo portfolio (es. aggiorna il testo nella sezione "Chi sono")
   - Commit e push delle modifiche su GitHub
   - Osserva come Render avvia automaticamente un nuovo deployment
   - Verifica che le modifiche siano visibili sul tuo sito dopo il deployment

### Passo 9: Monitorare il sito
1. In Render, puoi monitorare lo stato del tuo sito nella dashboard
2. Controlla i log di build e deployment per risolvere eventuali problemi
3. Verifica le metriche di utilizzo (nella scheda "Metrics")
4. Imposta notifiche per essere avvisato in caso di problemi con il deployment

### Passo 10: Confronto con GitHub Pages
1. Vantaggi di Render rispetto a GitHub Pages:
   - Supporto per build più complesse
   - Maggiore controllo sul processo di deployment
   - Supporto nativo per SSL personalizzato
   - Possibilità di utilizzare servizi backend (API, database) sulla stessa piattaforma
2. Considera questi fattori quando scegli la piattaforma di hosting per i tuoi progetti futuri
