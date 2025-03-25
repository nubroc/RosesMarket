<template>
  <div>
    <h1>Bienvenue sur la page d'accueil</h1>
    <p>Découvrez nos articles disponibles :</p>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Prix : {{ product.price }} €</p>
        <div v-if="authStore.user" class="quantity-control">
          <label for="quantity">Quantité :</label>
          <input
            type="number"
            v-model.number="product.quantity"
            min="1"
            :id="'quantity-' + product.id"
          />
          <button @click="addToCart(product)">Ajouter au panier</button>
        </div>
        <div v-else>
          <p class="login-message">Connectez-vous pour ajouter au panier</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';
import { useAuthStore } from '../stores/auth';

const cartStore = useCartStore();
const authStore = useAuthStore();

const products = ref([
  {
    id: 1,
    name: 'Bison',
    description: 'Pétard à mèche très puissant.',
    price: 10,
    quantity: 1,
    image: '/images/bison.jpg',
  },
  {
    id: 2,
    name: 'Big Pif Paf',
    description: 'Boîte de 50 pétards.',
    price: 20,
    quantity: 1,
    image: '/images/big_pif_paf.jpg',
  },
  {
    id: 3,
    name: 'Demon',
    description: 'Pétards XXL pour les amateurs.',
    price: 30,
    quantity: 1,
    image: '/images/demon.jpg',
  },
]);

const addToCart = (product) => {
  cartStore.addToCart(product);
  alert(`Ajouté ${product.quantity} x ${product.name} au panier !`);
};
</script>

<style scoped>
h1 {
  color: #42b983;
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.product-card h2 {
  color: #333;
  margin-bottom: 0.5rem;
}

.product-card p {
  margin: 0.5rem 0;
}

.quantity-control {
  margin: 1rem 0;
}

.quantity-control label {
  margin-right: 0.5rem;
}

input[type='number'] {
  width: 60px;
  padding: 0.25rem;
  text-align: center;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369f6b;
}

.login-message {
  color: red;
  font-weight: bold;
}
</style>