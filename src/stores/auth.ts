import { defineStore } from 'pinia';
import bcrypt from 'bcryptjs';

interface User {
  username: string;
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async register(username: string, email: string, password: string): Promise<void> {
      const hashedPassword = await bcrypt.hash(password, 10);
      this.user = { username, email, password: hashedPassword };
    },
    async login(email: string, password: string): Promise<boolean> {
      if (this.user && this.user.email === email) {
        const isPasswordValid = await bcrypt.compare(password, this.user.password);
        return isPasswordValid;
      }
      return false;
    },
    logout(): void {
      this.user = null;
    },
  },
});