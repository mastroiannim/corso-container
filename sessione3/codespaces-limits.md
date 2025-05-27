# Limiti degli ambienti temporanei (Codespaces)

GitHub Codespaces è un ambiente di sviluppo cloud che offre molti vantaggi, ma presenta anche alcune limitazioni importanti da conoscere. Questa guida ti aiuterà a comprendere questi limiti e come gestirli.

## Cos'è GitHub Codespaces?

GitHub Codespaces è un ambiente di sviluppo cloud che ti permette di scrivere, eseguire e debuggare codice direttamente dal browser, senza dover installare nulla sul tuo computer. È basato su Visual Studio Code e offre un'esperienza di sviluppo completa nel cloud.

## Vantaggi di Codespaces

- **Nessuna installazione locale**: tutto funziona nel browser
- **Ambiente preconfigurato**: non devi configurare manualmente l'ambiente di sviluppo
- **Accessibilità**: puoi lavorare da qualsiasi dispositivo con un browser
- **Integrazione con GitHub**: perfetta integrazione con i repository GitHub

## Limitazioni importanti

### 1. Limiti di tempo e inattività

- **Timeout per inattività**: i Codespaces si spengono automaticamente dopo 30 minuti di inattività
- **Limite mensile gratuito**: gli account gratuiti hanno un limite di ore mensili (attualmente 60 ore/mese)
- **Persistenza temporanea**: i Codespaces possono essere eliminati dopo un periodo di inattività prolungato (generalmente 30 giorni)

### 2. Limiti di risorse

- **CPU e RAM limitati**: le risorse computazionali sono limitate, soprattutto per account gratuiti
- **Spazio su disco limitato**: lo spazio di archiviazione è limitato (generalmente 32GB)
- **Larghezza di banda limitata**: il trasferimento dati può essere più lento rispetto a un ambiente locale

### 3. Limitazioni di accesso

- **Accesso alla rete**: alcune operazioni di rete potrebbero essere limitate
- **Accesso al filesystem**: puoi accedere solo ai file all'interno del Codespace
- **Porte pubbliche**: l'esposizione di porte per servizi web è temporanea

## Come gestire queste limitazioni

### Salvare frequentemente il lavoro

```bash
# Commit e push frequenti per salvare il lavoro su GitHub
git add .
git commit -m "Salvataggio del lavoro in corso"
git push
```

### Esportare il lavoro importante

```bash
# Creare un archivio ZIP del progetto
zip -r progetto.zip .

# Scaricare l'archivio (usa l'interfaccia di VS Code per il download)
```

### Mantenere attivo il Codespace

- Interagisci regolarmente con il Codespace per evitare il timeout
- Usa l'estensione "GitHub Codespaces" per gestire i tuoi spazi

### Ottimizzare l'uso delle risorse

- Chiudi le schede e i terminali non necessari
- Evita di eseguire processi pesanti in background
- Usa `.gitignore` per escludere file grandi e non necessari

## Alternative a Codespaces per progetti a lungo termine

1. **Ambiente di sviluppo locale**: installa gli strumenti necessari sul tuo computer
2. **GitHub Pages**: per hosting permanente di siti statici
3. **Render**: per hosting di applicazioni web (come vedremo nella Sessione 4)
4. **Replit**: un'alternativa a Codespaces con piani gratuiti

## Migrazione da Codespaces a un ambiente permanente

### 1. Esportare il codice

```bash
# Assicurati che tutto sia committato e pushato su GitHub
git status
git add .
git commit -m "Versione finale prima della migrazione"
git push
```

### 2. Clonare in un ambiente permanente

```bash
# Su un computer locale o altro ambiente
git clone https://github.com/tuousername/tuorepository.git
cd tuorepository
```

### 3. Configurare il nuovo ambiente

```bash
# Installare le dipendenze necessarie
npm install  # per progetti JavaScript/Node.js
```

## Consigli pratici

1. **Pianifica in anticipo**: sapendo che Codespaces è temporaneo, pianifica la migrazione
2. **Documenta la configurazione**: tieni nota di come è configurato il tuo ambiente
3. **Usa file di configurazione**: `.gitignore`, `package.json`, ecc. per facilitare la migrazione
4. **Backup regolari**: non affidarti solo a Codespaces per il tuo lavoro importante

## Esercizio pratico

1. Verifica quanto tempo hai utilizzato dei tuoi Codespaces questo mese
2. Crea un file `.gitignore` per escludere file temporanei e cartelle node_modules
3. Esegui un backup completo del tuo progetto Memory Game
4. Pratica la migrazione da Codespaces a GitHub Pages
