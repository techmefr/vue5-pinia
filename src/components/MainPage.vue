<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { storeToRefs } from 'pinia'

// Initialisation du store
const storeCart = useCartStore()
const { getCart, getTotalPrice, cart } = storeToRefs(storeCart)
const { addProduct, removeProduct } = storeCart

// Produits disponibles
const product1 = { id: 2, name: "Produit 1", quantity: 1, price: 10 }
const product2 = { id: 3, name: "Produit 2", quantity: 1, price: 20 }

// Fonctions d'ajout et suppression
const addProduct1 = () => addProduct(product1)
const addProduct2 = () => addProduct(product2)
const resetItem = (id: number) => removeProduct(id)
</script>

<template>
    <div class="container">
        <h1 class="title">🛒 Panier</h1>

        <div class="total">
            Total : <span class="total-price">{{ getTotalPrice }} €</span>
        </div>

        <div v-if="cart.length" class="cart">
            <p class="cart-title">Produits dans le panier :</p>
            <ul>
                <li v-for="p in cart" :key="p.id" class="cart-item">
                    <span>{{ p.name }} (x{{ p.quantity }})</span>
                    <button @click="() => resetItem(p.id)" class="remove-btn">✖</button>
                </li>
            </ul>
        </div>
        <p v-else class="empty-cart">Aucun produit dans le panier.</p>

        <div class="buttons">
            <button @click="addProduct1" class="add-btn">➕ Ajouter Produit 1 (10€)</button>
            <button @click="addProduct2" class="add-btn">➕ Ajouter Produit 2 (20€)</button>
        </div>

        <details class="debug">
            <summary>🔍 Debug</summary>
            <pre>{{ getCart }}</pre>
            <pre>{{ cart }}</pre>
        </details>
    </div>
</template>

<style scoped>
/* Conteneur principal */
.container {
    max-width: 75svw;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

/* Titre */
.title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

/* Total */
.total {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background: #f4f4f4;
    border-radius: 6px;
}

.total-price {
    color: #2c3e50;
}

/* Panier */
.cart {
    margin-top: 20px;
}

.cart-title {
    font-weight: bold;
    margin-bottom: 10px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 8px;
}

.empty-cart {
    text-align: center;
    color: #888;
    font-style: italic;
}

/* Boutons */
.buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.add-btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
}

.add-btn:hover {
    background: #2980b9;
}

.remove-btn {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
}

.remove-btn:hover {
    background: #c0392b;
}

/* Debug */
.debug {
    margin-top: 20px;
    background: #f4f4f4;
    padding: 10px;
    border-radius: 6px;
}

.debug summary {
    cursor: pointer;
    font-weight: bold;
}

.debug pre {
    background: #ddd;
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 14px;
}
</style>
