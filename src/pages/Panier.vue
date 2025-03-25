<template>
  <div>
    <h1>Votre Panier</h1>
    <div v-if="authStore.user">
      <div v-if="cartStore.items.length > 0">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-item-image" />
          <h2>{{ item.name }}</h2>
          <p>Prix : {{ item.price }} €</p>
          <div class="quantity-control">
            <label for="quantity">Quantité :</label>
            <input
              type="number"
              v-model.number="item.quantity"
              min="1"
              :id="'quantity-' + item.id"
              @change="updateQuantity(item.id, item.quantity)"
            />
          </div>
          <p>Total : {{ item.price * item.quantity }} €</p>
          <button @click="removeFromCart(item.id)">Supprimer</button>
        </div>
        <p class="cart-total">Total du panier : {{ cartTotal }} €</p>
      </div>
      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
    </div>
    <div v-else>
      <p class="login-message">Connectez-vous pour accéder au panier</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';
import { useAuthStore } from '../stores/auth';

const cartStore = useCartStore();
const authStore = useAuthStore();

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

const updateQuantity = (productId, quantity) => {
  cartStore.updateQuantity(productId, quantity);
};

const cartTotal = computed(() =>
  cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0)
);
</script>

<style scoped>
.cart-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.cart-item-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.cart-item h2 {
  margin-bottom: 0.5rem;
}

.cart-item p {
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

.cart-total {
  font-weight: bold;
  margin-top: 1rem;
}

.login-message {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>