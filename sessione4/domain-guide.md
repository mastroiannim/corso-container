# Guida alla gestione del dominio e build automatica

In questa guida imparerai come configurare un dominio personalizzato per il tuo sito web su Render e come impostare la build automatica per mantenere il tuo sito sempre aggiornato.

## Configurazione di un dominio personalizzato

Avere un dominio personalizzato (come `tuonome.com` invece di `tuosito.onrender.com`) rende il tuo portfolio più professionale e memorabile.

### Passo 1: Acquistare un dominio

Se non possiedi già un dominio, puoi acquistarne uno presso un registrar come:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)

I prezzi variano da circa 10€ a 20€ all'anno, a seconda dell'estensione (.com, .it, .dev, ecc.).

### Passo 2: Configurare il dominio su Render

1. Vai alla dashboard del tuo sito su Render
2. Clicca sulla scheda "Settings"
3. Scorri fino alla sezione "Custom Domain"
4. Clicca su "Add Custom Domain"
5. Inserisci il tuo dominio (es. `tuonome.com` o `portfolio.tuonome.com`)
6. Segui le istruzioni per verificare la proprietà del dominio

### Passo 3: Configurare i record DNS

Render ti fornirà specifiche istruzioni DNS. In generale, dovrai:

1. Accedere al pannello di controllo del tuo registrar
2. Trovare la sezione di gestione DNS
3. Aggiungere un record CNAME che punti al tuo sito Render

Esempio di configurazione:
```
Tipo: CNAME
Nome: www (o @ per il dominio root)
Valore: tuosito.onrender.com
TTL: Automatico o 3600
```

Per il dominio root (es. `tuonome.com` senza www), potresti dover configurare un record A o ALIAS, a seconda del tuo registrar.

### Passo 4: Attendere la propagazione DNS

Le modifiche DNS possono richiedere fino a 48 ore per propagarsi completamente, anche se spesso sono più veloci (1-3 ore).

### Passo 5: Verificare la configurazione

Una volta completata la propagazione, verifica che:
- Il tuo dominio personalizzato funzioni correttamente
- Il certificato HTTPS sia attivo (Render lo configura automaticamente)
- Tutti i link e le risorse del sito funzionino con il nuovo dominio

## Configurazione della build automatica

La build automatica permette al tuo sito di aggiornarsi automaticamente ogni volta che fai push di nuove modifiche al repository GitHub.

### Passo 1: Verificare le impostazioni di auto-deploy

1. Vai alla dashboard del tuo sito su Render
2. Clicca sulla scheda "Settings"
3. Scorri fino alla sezione "Build & Deploy"
4. Assicurati che "Auto-Deploy" sia impostato su "Yes"

### Passo 2: Configurare il branch di deploy

Nella stessa sezione, verifica che:
- Il branch selezionato sia quello che usi per lo sviluppo (di solito "main" o "master")
- Il comando di build sia corretto (se necessario)
- La directory di pubblicazione sia configurata correttamente

### Passo 3: Configurare webhook (opzionale)

Se desideri trigger di build più avanzati:

1. Vai alla sezione "Outgoing Webhooks" nelle impostazioni
2. Crea un nuovo webhook che si attiva dopo un deploy riuscito
3. Puoi usarlo per notificare altri servizi o eseguire azioni aggiuntive

### Passo 4: Testare la build automatica

Per verificare che tutto funzioni:

1. Fai una piccola modifica al tuo repository (es. aggiorna il README)
2. Esegui commit e push al branch configurato
3. Vai alla dashboard di Render e controlla la sezione "Events"
4. Dovresti vedere un nuovo build in corso o completato
5. Verifica che le modifiche appaiano sul tuo sito

## Ottimizzazione del processo di build

### Ridurre i tempi di build

Per rendere il processo più veloce:

1. Minimizza le dipendenze non necessarie
2. Usa la cache di build quando possibile
3. Ottimizza le immagini e altri asset prima del push

### Configurare build preview per pull request

Questa funzionalità ti permette di vedere in anteprima le modifiche prima di unirle al branch principale:

1. Vai alle impostazioni del tuo sito su Render
2. Attiva "Pull Request Previews"
3. Ora, quando crei una pull request su GitHub, Render creerà automaticamente un deploy di anteprima

## Monitoraggio e debug

### Controllare i log di build

Se qualcosa non funziona:

1. Vai alla dashboard del tuo sito su Render
2. Clicca sulla scheda "Logs"
3. Seleziona "Build Logs" per vedere i dettagli del processo di build
4. Cerca messaggi di errore che possano indicare il problema

### Impostare notifiche

Per essere avvisato di problemi:

1. Vai alla scheda "Settings"
2. Scorri fino a "Notifications"
3. Configura le notifiche email per build falliti o altri eventi importanti

## Esercizio pratico

1. Configura un dominio personalizzato per il tuo portfolio (se ne possiedi uno)
2. Verifica che l'auto-deploy funzioni correttamente
3. Fai una modifica al tuo sito e osserva il processo di build automatica
4. Configura le notifiche per essere avvisato in caso di problemi
