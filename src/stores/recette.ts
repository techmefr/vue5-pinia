import { defineStore } from 'pinia'

export const useRecetteStore = defineStore('recette', {
    state: () => ({
        recettes: [
            {
                id: 1,
                image: "https://i.imgur.com/0umadnY.jpg",
                name: "Burger",
                description:
                    "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis d'une galette de steak haché et de crudités, salade, tomate, oignon, cornichon ainsi que de sauce.",
                note: 4
            },
            {
                id: 2,
                image: "https://i.imgur.com/b9zDbyb.jpg",
                name: "Pizza",
                description:
                    "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile d'olive, de sauce tomate, de mozzarella et d'autres ingrédients et cuite au four.",
                note: 5
            },
            {
                id: 3,
                image: "https://i.imgur.com/0umadnY.jpg",
                name: "Burger 2",
                description:
                    "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis d'une galette de steak haché et de crudités, salade, tomate, oignon, cornichon ainsi que de sauce.",
                note: 4
            },
            {
                id: 4,
                image: "https://i.imgur.com/b9zDbyb.jpg",
                name: "Pizza 2",
                description:
                    "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile d'olive, de sauce tomate, de mozzarella et d'autres ingrédients et cuite au four.",
                note: 5
            }
        ]
    }),
    getters: {
        getRecettes: (state) => state.recettes,
        getFirstRecette: (state) => state.recettes[0],
        getLastRecette: (state) => state.recettes[state.recettes.length - 1],
    },
    actions: {
        resetStore() {
            this.recettes = []
        },
        deleteRecette(itemId: number) {
            const index = this.recettes.findIndex(i => i.id === itemId)
            if (index !== -1) {
                this.recettes.splice(index, 1)
            }
        },
        updateRecette(item: { id: number; image: string; name: string; description: string; note: number }) {
            const foundIndex = this.recettes.findIndex(i => i.id === item.id)
            if (foundIndex !== -1) {
                this.recettes[foundIndex] = item
            } else {
                item.id = this.recettes.length ? Math.max(...this.recettes.map(r => r.id)) + 1 : 1
                this.recettes.push(item)
            }
        },
    }
})