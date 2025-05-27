# Guida al deploy di un worker su Render

Render è una piattaforma cloud che permette di deployare facilmente diversi tipi di servizi, inclusi i "worker" - processi in background che non servono traffico HTTP. In questa guida imparerai come deployare il tuo bot Telegram come worker su Render.

## Cos'è un worker?

Un worker è un processo che esegue operazioni in background senza servire direttamente richieste HTTP. È ideale per:
- Bot (come il nostro bot Telegram)
- Job di elaborazione
- Processi di sincronizzazione
- Code di messaggi
- Qualsiasi applicazione che non necessita di un'interfaccia web

## Vantaggi di Render per i worker

- **Semplicità**: facile da configurare e gestire
- **Scalabilità**: può scalare automaticamente
- **Monitoraggio**: log e metriche integrate
- **Affidabilità**: riavvio automatico in caso di crash
- **Integrazione con Docker**: supporto nativo per container Docker

## Prerequisiti

Prima di iniziare, assicurati di avere:
- Un account Render (creato nella Sessione 1)
- Un'immagine Docker del tuo bot su DockerHub
- Il token del tuo bot Telegram

## Passo 1: Accedere a Render

1. Vai su [dashboard.render.com](https://dashboard.render.com)
2. Accedi con il tuo account

## Passo 2: Creare un nuovo servizio

1. Clicca su "New" e seleziona "Web Service"
2. Nella sezione "Deploy from image repository", seleziona "Docker Hub"
3. Inserisci il nome dell'immagine Docker (es. `tuousername/mio-bot-telegram:1.0`)

## Passo 3: Configurare il servizio

Nella pagina di configurazione:

1. **Nome**: Inserisci un nome per il tuo servizio (es. "mio-telegram-bot")
2. **Tipo di piano**: Seleziona "Free" per iniziare
3. **Regione**: Scegli la regione più vicina a te
4. **Tipo di servizio**: Cambia da "Web Service" a "Background Worker"
5. **Variabili d'ambiente**: Aggiungi le variabili necessarie
   - `TELEGRAM_BOT_TOKEN`: il token del tuo bot
   - Altre variabili specifiche della tua applicazione

## Passo 4: Opzioni avanzate (facoltative)

Puoi configurare:
- **Health Check Path**: lascia vuoto per i worker
- **Auto-deploy**: attivo di default, si aggiorna automaticamente quando l'immagine Docker viene aggiornata
- **Persistent Disk**: non necessario per la maggior parte dei bot

## Passo 5: Creare il servizio

Clicca su "Create Background Worker" per avviare il processo di deployment.

Render inizierà a scaricare l'immagine Docker e avvierà il worker. Questo processo può richiedere alcuni minuti.

## Passo 6: Monitorare il worker

Una volta avviato il worker, puoi monitorarlo dalla dashboard di Render:

1. **Logs**: visualizza i log in tempo reale
2. **Metrics**: monitora l'utilizzo di CPU e memoria
3. **Events**: traccia gli eventi del servizio (deploy, riavvii, ecc.)

## Gestione del worker

### Riavviare il worker

Se hai bisogno di riavviare il worker:
1. Vai alla pagina del servizio
2. Clicca su "Manual Deploy" e seleziona "Restart Service"

### Aggiornare il worker

Per aggiornare il worker con una nuova versione:
1. Aggiorna l'immagine Docker su DockerHub
2. Se l'auto-deploy è attivo, Render aggiornerà automaticamente il servizio
3. Altrimenti, vai alla pagina del servizio e clicca su "Manual Deploy"

### Visualizzare i log

I log sono fondamentali per il debug:
1. Vai alla pagina del servizio
2. Clicca sulla scheda "Logs"
3. Puoi filtrare i log per livello (info, error, ecc.)

## Limiti del piano gratuito

Il piano gratuito di Render include:
- 750 ore di runtime al mese (sufficiente per un worker sempre attivo)
- Spegnimento automatico dopo 15 minuti di inattività
- Riavvio automatico quando riceve traffico

Per i bot Telegram, lo spegnimento per inattività non è ideale perché il bot non risponderà durante il periodo di inattività. Considera l'upgrade a un piano a pagamento per applicazioni di produzione.

## Webhook per aggiornamenti automatici

Puoi configurare un webhook da DockerHub a Render per aggiornare automaticamente il worker quando l'immagine Docker viene aggiornata:

1. Vai alla pagina del servizio su Render
2. Vai a "Settings" > "Build & Deploy"
3. Copia l'URL del webhook
4. Vai al tuo repository su DockerHub
5. Vai a "Webhooks" e aggiungi un nuovo webhook con l'URL copiato

## Risoluzione problemi comuni

### Il worker si riavvia continuamente

- Controlla i log per errori
- Verifica che le variabili d'ambiente siano configurate correttamente
- Assicurati che il comando di avvio nel Dockerfile sia corretto

### Il bot non risponde

- Verifica che il worker sia in esecuzione
- Controlla i log per errori
- Assicurati che il token Telegram sia corretto
- Verifica che il bot sia configurato per il polling

### Errori di memoria

- Controlla l'utilizzo di memoria nelle metriche
- Ottimizza il codice per ridurre l'utilizzo di memoria
- Considera l'upgrade a un piano con più risorse

## Esercizio pratico

1. Pubblica l'immagine Docker del tuo bot su DockerHub
2. Crea un worker su Render seguendo questa guida
3. Configura le variabili d'ambiente necessarie
4. Verifica che il bot funzioni correttamente
5. Configura un webhook per gli aggiornamenti automatici
