# Utiliser une image Node.js officielle
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu du projet dans le conteneur
COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173

# Commande pour démarrer l'application
CMD ["npm", "run", "dev", "--", "--host"]