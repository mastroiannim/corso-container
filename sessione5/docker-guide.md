# Guida ai concetti base di Docker e comandi essenziali

Docker è una piattaforma che permette di sviluppare, distribuire ed eseguire applicazioni all'interno di contenitori. In questa guida imparerai i concetti fondamentali di Docker e i comandi essenziali per containerizzare la tua applicazione.

## Cos'è Docker?

Docker è una piattaforma open source che automatizza il deployment di applicazioni all'interno di contenitori software. I contenitori permettono di impacchettare un'applicazione con tutte le sue dipendenze in un'unità standardizzata.

### Vantaggi di Docker

- **Consistenza**: l'applicazione funziona allo stesso modo in qualsiasi ambiente
- **Isolamento**: le applicazioni sono isolate tra loro e dall'host
- **Portabilità**: i contenitori possono essere eseguiti su qualsiasi sistema che supporti Docker
- **Efficienza**: i contenitori sono leggeri e utilizzano meno risorse rispetto alle macchine virtuali
- **Scalabilità**: è facile distribuire più istanze della stessa applicazione

## Concetti fondamentali

### Immagini

Un'immagine Docker è un template di sola lettura che contiene il sistema operativo, le librerie, le dipendenze e il codice dell'applicazione. Le immagini sono la base per creare i contenitori.

### Contenitori

Un contenitore è un'istanza in esecuzione di un'immagine. Puoi creare, avviare, fermare, spostare o eliminare un contenitore utilizzando l'API o l'interfaccia a riga di comando di Docker.

### Dockerfile

Un Dockerfile è un file di testo che contiene le istruzioni per costruire un'immagine Docker. Definisce l'ambiente di esecuzione dell'applicazione.

### Registry

Un registry è un repository per le immagini Docker. Docker Hub è il registry pubblico predefinito, ma puoi anche utilizzare registry privati.

## Installazione di Docker

Per questo corso, utilizzeremo Docker all'interno di GitHub Codespaces, che ha già Docker preinstallato. Se vuoi installare Docker sul tuo computer, segui le istruzioni sul [sito ufficiale di Docker](https://docs.docker.com/get-docker/).

## Comandi Docker essenziali

### Gestione delle immagini

```bash
# Visualizzare le immagini disponibili localmente
docker images

# Scaricare un'immagine dal registry
docker pull nome_immagine:tag

# Costruire un'immagine da un Dockerfile
docker build -t nome_immagine:tag .

# Eliminare un'immagine
docker rmi nome_immagine:tag

# Pubblicare un'immagine su Docker Hub
docker push nome_utente/nome_immagine:tag
```

### Gestione dei contenitori

```bash
# Creare e avviare un contenitore
docker run nome_immagine:tag

# Elencare i contenitori in esecuzione
docker ps

# Elencare tutti i contenitori (anche quelli fermi)
docker ps -a

# Fermare un contenitore
docker stop id_contenitore

# Avviare un contenitore fermato
docker start id_contenitore

# Eliminare un contenitore
docker rm id_contenitore

# Visualizzare i log di un contenitore
docker logs id_contenitore

# Eseguire un comando all'interno di un contenitore in esecuzione
docker exec -it id_contenitore comando
```

## Creare un Dockerfile

Un Dockerfile di base per un'applicazione Node.js potrebbe essere così:

```dockerfile
# Immagine base
FROM node:14

# Directory di lavoro all'interno del contenitore
WORKDIR /app

# Copia dei file package.json e package-lock.json
COPY package*.json ./

# Installazione delle dipendenze
RUN npm install

# Copia di tutti i file del progetto
COPY . .

# Porta su cui l'applicazione sarà in ascolto
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["node", "index.js"]
```

### Spiegazione delle istruzioni

- **FROM**: specifica l'immagine base da cui partire
- **WORKDIR**: imposta la directory di lavoro all'interno del contenitore
- **COPY**: copia file dal filesystem host al filesystem del contenitore
- **RUN**: esegue comandi durante la costruzione dell'immagine
- **EXPOSE**: informa Docker che il contenitore ascolta sulla porta specificata
- **CMD**: specifica il comando da eseguire quando il contenitore viene avviato

## Costruire e pubblicare un'immagine Docker

### Passo 1: Costruire l'immagine

```bash
# Nella directory che contiene il Dockerfile
docker build -t mio-bot-telegram:1.0 .
```

### Passo 2: Testare l'immagine localmente

```bash
# Avviare un contenitore dall'immagine
docker run -p 3000:3000 mio-bot-telegram:1.0
```

### Passo 3: Taggare l'immagine per Docker Hub

```bash
# Sostituisci "username" con il tuo nome utente Docker Hub
docker tag mio-bot-telegram:1.0 username/mio-bot-telegram:1.0
```

### Passo 4: Accedere a Docker Hub

```bash
docker login
# Inserisci le tue credenziali quando richiesto
```

### Passo 5: Pubblicare l'immagine

```bash
docker push username/mio-bot-telegram:1.0
```

## Docker Compose (cenni)

Docker Compose è uno strumento per definire e gestire applicazioni multi-container. Utilizza un file YAML per configurare i servizi dell'applicazione.

Esempio di `docker-compose.yml`:

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## Best practices

1. **Usa immagini ufficiali** come base per i tuoi Dockerfile
2. **Minimizza il numero di layer** combinando comandi RUN correlati
3. **Non installare pacchetti non necessari**
4. **Usa .dockerignore** per escludere file non necessari
5. **Usa tag specifici** invece di `latest`
6. **Usa variabili d'ambiente** per la configurazione
7. **Non eseguire i contenitori come root** quando possibile

## Esercizio pratico

1. Crea un Dockerfile per il tuo bot Telegram
2. Costruisci l'immagine Docker
3. Testa il bot localmente
4. Pubblica l'immagine su Docker Hub
5. Usa l'immagine pubblicata per il deploy su Render
