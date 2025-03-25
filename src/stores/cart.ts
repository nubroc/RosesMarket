import { defineStore } from 'pinia';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  actions: {
    addToCart(product: CartItem) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        this.items.push({ ...product });
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          this.removeFromCart(productId);
        }
      }
    },
  },
});