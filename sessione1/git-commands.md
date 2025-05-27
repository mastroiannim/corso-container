# Guida ai comandi Git essenziali

Git è un sistema di controllo versione che ti permette di tenere traccia delle modifiche al tuo codice e collaborare con altri sviluppatori. Ecco i comandi Git più importanti che userai durante il corso.

## Configurazione iniziale

Prima di iniziare a usare Git, devi configurare il tuo nome utente e indirizzo email:

```bash
# Imposta il tuo nome utente
git config --global user.name "Il Tuo Nome"

# Imposta la tua email (usa la stessa email del tuo account GitHub)
git config --global user.email "tua.email@esempio.com"
```

## Comandi Git di base

### Inizializzare un repository

Per creare un nuovo repository Git nella cartella corrente:

```bash
git init
```

### Verificare lo stato dei file

Per vedere quali file sono stati modificati:

```bash
git status
```

### Aggiungere file all'area di staging

Per preparare i file per il commit:

```bash
# Aggiungere un file specifico
git add nomefile.html

# Aggiungere tutti i file modificati
git add .
```

### Creare un commit

Per salvare le modifiche nel repository:

```bash
git commit -m "Descrizione delle modifiche"
```

### Collegare il repository locale a GitHub

Per collegare il tuo repository locale a uno su GitHub:

```bash
git remote add origin https://github.com/tuousername/tuorepository.git
```

### Inviare le modifiche a GitHub

Per caricare i tuoi commit su GitHub:

```bash
# La prima volta che invii i commit
git push -u origin main

# Le volte successive
git push
```

### Scaricare le modifiche da GitHub

Per aggiornare il tuo repository locale con le modifiche da GitHub:

```bash
git pull
```

## Flusso di lavoro tipico

Ecco il flusso di lavoro che seguirai più spesso:

1. Modifica i file nel tuo progetto
2. Controlla lo stato: `git status`
3. Aggiungi i file modificati: `git add .`
4. Crea un commit: `git commit -m "Descrizione delle modifiche"`
5. Invia le modifiche a GitHub: `git push`

## Risoluzione problemi comuni

### Errore durante il push

Se ricevi un errore durante il push, potrebbe essere necessario prima scaricare le modifiche:

```bash
git pull
git push
```

### Annullare le modifiche non ancora in staging

Per annullare le modifiche a un file non ancora aggiunto all'area di staging:

```bash
git checkout -- nomefile.html
```

### Rimuovere file dall'area di staging

Per rimuovere un file dall'area di staging (ma mantenere le modifiche):

```bash
git reset HEAD nomefile.html
```

### Visualizzare la cronologia dei commit

Per vedere la storia dei commit:

```bash
git log
```

Per una versione più compatta:

```bash
git log --oneline
```
