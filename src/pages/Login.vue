<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Entrez votre email" />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input v-model="password" type="password" id="password" placeholder="Entrez votre mot de passe" />
        </div>
        <button type="submit" class="login-button">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const email = ref('');
const password = ref('');

const login = () => {
  const success = authStore.login(email.value, password.value);
  if (success) {
    alert("Connexion réussie !");
  } else {
    alert("Email ou mot de passe incorrect !");
  }
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