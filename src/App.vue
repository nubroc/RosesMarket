<script setup lang="ts">
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
};
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/panier">Panier</router-link></li>
          <li v-if="!authStore.user"><router-link to="/login">Login</router-link></li>
          <li v-if="!authStore.user"><router-link to="/register">Register</router-link></li>
          <li v-if="authStore.user">
            <button @click="logout" class="logout-button">Déconnexion</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 🛒 Rose's Market. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #42b983;
  padding: 1rem;
  color: white;
}

header nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

header nav ul li {
  margin: 0 1rem;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

header nav ul li a:hover {
  text-decoration: underline;
}

.logout-button {
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.logout-button:hover {
  color: #ffcccc;
}

main {
  padding: 2rem;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
}
</style>
