# Dockerfile per il bot Telegram
# Questo Dockerfile crea un'immagine Docker per il bot Telegram

# Usa Node.js 14 come immagine base
FROM node:14-alpine

# Crea e imposta la directory di lavoro
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install --production

# Copia il resto dei file dell'applicazione
COPY . .

# Espone la porta (opzionale, i bot Telegram in genere non necessitano di porte esposte)
# EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["node", "index.js"]
