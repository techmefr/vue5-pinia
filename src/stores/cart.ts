import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    // State 
    state: () => ({
        refreshKey: 0,  // Comme la valeur change, le compute qui contient ce refresh va donc se rafraîchir
        cart: [
            {
                id: 1,
                name: "Cadeau",
                price: 0,
                quantity: 1
            }
        ]
    }),

    // Getters 
    getters: {
        getCart(state) {
            return state.cart
        },

        getTotalPrice(state) {
            return state.cart.reduce((total, p) => total + p.price * p.quantity, 0)
        }
    },

    // Actions 
    actions: {
        clearCart() {
            this.cart = []
        },

        removeProduct(itemId: number) {
            this.cart = this.cart.filter(p => p.id !== itemId)
        },

        addProduct(item: any) {
            const foundIndex = this.cart.findIndex(p => p.id === item.id)
            if (foundIndex !== -1) {
                this.cart[foundIndex].quantity++  // Augmenter quantité sans écraser l'objet
            } else {
                this.cart.push({ ...item })  // Ajouter une copie pour éviter les mutations indésirables
            }
        }
    }
})
