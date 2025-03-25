# 🛒 Rose's Market

Rose's Market est une application Vue.js pour gérer un marché en ligne avec des fonctionnalités comme l'inscription, la connexion, la gestion du panier et la navigation entre les pages.

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+
- Docker (optionnel)

### Installation
1. Clonez le dépôt :
   ```
    git clone <url-du-repo>
    cd vuejs_market_project
   ```
2. Installez les dépendances :
    ```
        npm install
    ```

### Lancement en mode développement
   
    ``` npm run dev ```
    Accédez à l'application sur http://localhost:5173.
### Lancement avec Docker
1. Construisez et démarrez le conteneur :
    docker-compose up --build
2. Accédez à http://localhost:5173.

### 📂 Structure du Projet
-  ``` src/pages/ ``` : Pages principales (Accueil, Login, Panier, Register).
- ``` src/stores/ ``` : Stores Pinia pour l'authentification et le panier.
- ``` public/images/ ``` : Images des produits.

### 🛠️ Technologies
- Vue 3
- Pinia
- Vue Router
- Vite
- TypeScript
- Docker
- BcryptJS

### 📄 Licence
Ce projet est sous licence MIT.
@nubroc