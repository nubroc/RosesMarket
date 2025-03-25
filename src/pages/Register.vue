<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Inscription</h1>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Nom d'utilisateur</label>
          <input v-model="username" type="text" id="username" placeholder="Entrez votre nom d'utilisateur" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Entrez votre email" />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input v-model="password" type="password" id="password" placeholder="Entrez votre mot de passe" />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirmez le mot de passe</label>
          <input v-model="confirmPassword" type="password" id="confirm-password" placeholder="Confirmez votre mot de passe" />
        </div>
        <button type="submit" class="login-button">S'inscrire</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas !");
    return;
  }
  authStore.register(username.value, email.value, password.value);
  alert("Inscription réussie !");
  router.push('/login');
};
</script>

<style scoped>

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79vh;
  margin: 0;
}

.login-box {
  padding: 2rem;
  border-radius: 8px;
  background-color: #333333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

h1 {
  color: #42b983;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #42b983;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #369f6b;
}
</style>
