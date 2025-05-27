# Guida alla configurazione di Render

Render è una piattaforma cloud moderna che permette di pubblicare siti web e applicazioni in modo semplice e professionale. In questa guida imparerai come configurare Render per ospitare il tuo portfolio personale.

## Cos'è Render?

Render è una piattaforma di cloud hosting che offre:
- Deploy automatico da GitHub
- HTTPS gratuito e automatico
- CDN globale per prestazioni veloci
- Monitoraggio e logging integrati
- Piano gratuito generoso per progetti personali

## Vantaggi rispetto a GitHub Pages

| Funzionalità | Render | GitHub Pages |
|--------------|--------|--------------|
| HTTPS | ✅ Automatico | ✅ Automatico |
| Deploy automatico | ✅ Da qualsiasi repo | ✅ Solo da repo specifici |
| Build personalizzata | ✅ Configurabile | ❌ Limitata |
| Backend/API | ✅ Supportato | ❌ Solo frontend |
| Database | ✅ Disponibile | ❌ Non disponibile |
| Dominio personalizzato | ✅ Facile da configurare | ✅ Possibile ma più complesso |

## Prerequisiti

Prima di iniziare, assicurati di avere:
- Un account Render (creato nella Sessione 1)
- Un repository GitHub con il tuo progetto
- Il tuo progetto pronto per il deployment

## Passo 1: Preparare il progetto per Render

Per un sito statico, Render ha bisogno di sapere:
1. Quale repository usare
2. Come costruire il sito (se necessario)
3. Quale directory contiene i file statici

Non è necessario alcun file di configurazione speciale per siti statici semplici.

## Passo 2: Creare un nuovo servizio su Render

1. Accedi al tuo account Render: [dashboard.render.com](https://dashboard.render.com)
2. Clicca su "New" e seleziona "Static Site"
3. Collega il tuo account GitHub se non l'hai già fatto
4. Seleziona il repository che contiene il tuo portfolio

## Passo 3: Configurare il servizio

Nella pagina di configurazione:

1. **Nome**: Inserisci un nome per il tuo sito (es. "mio-portfolio")
2. **Branch**: Seleziona il branch da cui fare il deploy (di solito "main")
3. **Directory di build**: Lascia vuoto se i tuoi file HTML sono nella root del repository
4. **Comando di build**: Lascia vuoto se non hai bisogno di compilare il sito
5. **Directory di pubblicazione**: Lascia "." se i tuoi file HTML sono nella root, altrimenti specifica la cartella (es. "dist" o "build")

## Passo 4: Opzioni avanzate (facoltative)

Puoi configurare:
- **Variabili d'ambiente**: Per configurazioni specifiche
- **Auto-deploy**: Attivo di default, si aggiorna automaticamente ad ogni push
- **Pull request previews**: Per vedere in anteprima le modifiche prima del merge

## Passo 5: Creare il servizio

Clicca su "Create Static Site" per avviare il processo di deployment.

Render inizierà a costruire e pubblicare il tuo sito. Questo processo può richiedere alcuni minuti.

## Passo 6: Accedere al sito pubblicato

Una volta completato il deployment, Render ti fornirà un URL per il tuo sito, che sarà qualcosa come:
```
https://mio-portfolio.onrender.com
```

Clicca sull'URL per verificare che il tuo sito sia online e funzionante.

## Configurazione di un dominio personalizzato

Se desideri utilizzare un dominio personalizzato:

1. Vai alla pagina del tuo servizio su Render
2. Clicca sulla scheda "Settings"
3. Scorri fino alla sezione "Custom Domain"
4. Clicca su "Add Custom Domain"
5. Inserisci il tuo dominio e segui le istruzioni

Dovrai configurare i record DNS presso il tuo registrar di domini. Render ti fornirà istruzioni specifiche.

## Risoluzione problemi comuni

### Il sito non si aggiorna dopo un push

- Verifica che l'auto-deploy sia attivo nelle impostazioni
- Controlla i log di build per eventuali errori
- Assicurati di aver fatto push al branch corretto

### Errori durante il build

- Controlla i log di build per identificare l'errore
- Verifica che il comando di build sia corretto
- Assicurati che tutte le dipendenze siano specificate correttamente

### Problemi con i percorsi dei file

- Usa percorsi relativi per link, immagini e altri asset
- Verifica che la directory di pubblicazione sia configurata correttamente

## Monitoraggio e gestione

Render offre strumenti per monitorare il tuo sito:

- **Logs**: Per vedere i log di build e runtime
- **Metrics**: Per monitorare le prestazioni
- **Events**: Per tracciare gli eventi del servizio

## Limiti del piano gratuito

Il piano gratuito di Render include:
- Larghezza di banda: 100 GB/mese
- Build: 500 minuti/mese
- Siti statici illimitati

Per la maggior parte dei portfolio personali, questi limiti sono più che sufficienti.

## Esercizio pratico

1. Pubblica il tuo portfolio su Render seguendo questa guida
2. Personalizza l'URL del tuo sito
3. Configura l'auto-deploy per aggiornamenti automatici
4. Verifica che il sito sia accessibile e funzionante
