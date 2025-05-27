# Guida al deploy su GitHub Pages

GitHub Pages è un servizio gratuito offerto da GitHub che permette di pubblicare siti web statici direttamente dai repository GitHub. In questa guida imparerai come pubblicare il tuo progetto Memory Game online.

## Cos'è GitHub Pages?

GitHub Pages è un servizio di hosting che prende i file HTML, CSS e JavaScript direttamente dal tuo repository GitHub e li pubblica come un sito web accessibile a tutti. È perfetto per:

- Siti web personali
- Documentazione di progetti
- Portfolio
- Progetti web statici (come i nostri giochi)

## Vantaggi di GitHub Pages

- **Gratuito**: non ci sono costi per l'hosting
- **Facile da usare**: bastano pochi passaggi per pubblicare
- **Integrato con GitHub**: si aggiorna automaticamente quando fai push al repository
- **Dominio personalizzato**: puoi usare un dominio personalizzato (opzionale)

## Come pubblicare su GitHub Pages

### 1. Assicurati che il tuo progetto sia su GitHub

Prima di tutto, il tuo progetto deve essere in un repository GitHub. Se hai seguito le istruzioni della Sessione 1, dovresti già avere il tuo repository.

### 2. Vai alle impostazioni del repository

1. Apri il tuo repository su GitHub
2. Clicca sulla scheda "Settings" (Impostazioni) in alto a destra
3. Scorri verso il basso fino alla sezione "GitHub Pages"

### 3. Configura GitHub Pages

1. Nella sezione "Source" (Origine), seleziona il branch da cui pubblicare (di solito "main" o "master")
2. Seleziona la cartella root ("/") come origine
3. Clicca su "Save" (Salva)

### 4. Attendi la pubblicazione

GitHub impiegherà qualche minuto per pubblicare il tuo sito. Una volta pronto, vedrai un messaggio con l'URL del tuo sito, che sarà qualcosa come:

```
https://tuousername.github.io/tuorepository/
```

### 5. Verifica il tuo sito

Clicca sull'URL fornito per verificare che il tuo sito sia online e funzionante. Potrebbe essere necessario attendere qualche minuto prima che il sito sia completamente disponibile.

## Struttura dei file per GitHub Pages

Per un corretto funzionamento su GitHub Pages, assicurati che:

1. Il file principale sia chiamato `index.html` (GitHub Pages lo cercherà automaticamente)
2. Tutti i percorsi nei link e negli script siano relativi, non assoluti
3. Tutti i file necessari (CSS, JavaScript, immagini) siano inclusi nel repository

## Aggiornare il tuo sito

Ogni volta che fai push di nuove modifiche al branch configurato per GitHub Pages, il tuo sito verrà automaticamente aggiornato. Il processo di aggiornamento può richiedere alcuni minuti.

## Risoluzione problemi comuni

### Il sito non si aggiorna

- Verifica di aver fatto push al branch corretto
- Attendi qualche minuto (a volte ci vuole tempo)
- Controlla se ci sono errori nella sezione GitHub Pages delle impostazioni

### Le immagini o gli stili non vengono caricati

- Verifica che i percorsi nei file HTML siano corretti
- Assicurati che tutti i file necessari siano stati caricati su GitHub
- Controlla che i nomi dei file corrispondano esattamente (maiuscole/minuscole sono importanti)

### Errori 404

- Verifica che il file `index.html` sia nella posizione corretta
- Controlla che l'URL che stai visitando sia corretto

## Esercizio pratico

1. Carica il tuo Memory Game su GitHub
2. Configura GitHub Pages come descritto sopra
3. Verifica che il gioco sia accessibile online
4. Condividi l'URL con i tuoi compagni di corso

## Risorse aggiuntive

- [Documentazione ufficiale GitHub Pages](https://docs.github.com/en/pages)
- [Temi per GitHub Pages](https://pages.github.com/themes/)
- [Configurare un dominio personalizzato](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
