// ! pinia

// import {
//   defineStore
// } from "pinia";
// export const useCartStore = defineStore('cart', {
//   state: () => ({
//     count: 1,
//     name: 'Eduardo'
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

import { defineStore } from "pinia";

export const useCartStore = defineStore(
    'cart', {
        state: () => ({
            items: []
        }),
        getters: {

        },
        actions: {
            addToCart(item) {
                let added = false;
                if (this.items.length === 0) {
                    this.items.push(item)                    
                }
                else {
                    this.items.forEach(e => {
                        // console.log(`e.id : ${e.id} & item.id : ${item.id} ? ${e.id === item.id}`);
                        if (e.id === item.id) {
                            added = true                           
                        }
                    });
                    if (!added) {
                        this.items.push(item)  
                    }
                }
            },
            deleteFromCart(index) {
                // console.log(index);
                // console.log(this.items[index]);
                this.items.splice(index, 1)
            }
        },
        persist: true
    }
)