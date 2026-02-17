import { defineStore } from "pinia";
import type { CartProduct, Product } from "~/types/Products";

interface CartState {
  cart: CartProduct[];
  cartTotal: number;
  showCartModal: boolean;
}

export const useCartStore = defineStore("cartStore", {
  state: (): CartState => {
    return {
      cart: [],
      cartTotal: 0,
      showCartModal: false,
    };
  },
  getters: {
    cartItemCount(state) {
      return state.cart.reduce((total: number, item: CartProduct) => total + item.quantity, 0);
    },

    isProductInCart(state) {
      return (productId: number) => {
        return state.cart.some((item: CartProduct) => item.id === productId);
      };
    },

    // Get the quantity of a specific product in the cart
    getProductQuantityInCart(state) {
      return (productId: number) => {
        const cartItem = state.cart.find((item: CartProduct) => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
      };
    },
  },

  actions: {
    addProductToCart(product: Product, variation: string = "") {
      // 1. Find item where BOTH id and variation match
      const existingCartItem = this.cart.find((item) => item.id === product.id && item.variation === variation);

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        this.cart.push({
          ...product,
          quantity: 1,
          variation: variation, // Ensure variation is stored
        });
      }

      this.calculateCartTotal();
    },

    decreaseQuantity(productId: number, variation: string = "") {
      // 2. Locate the specific index using the composite key
      const index = this.cart.findIndex((item) => item.id === productId && item.variation === variation);

      // if (index !== -1) {
      //   if (this.cart[index].quantity > 1) {
      //     this.cart[index].quantity -= 1;
      //   } else {
      //     this.cart.splice(index, 1);
      //   }
      //   this.calculateCartTotal();
      // }

      if (index !== -1) {
        // If quantity is more than 1, decrease quantity
        if (this.cart[index] && this.cart[index].quantity > 1) {
          this.cart[index].quantity -= 1;
        } else if (this.cart[index]) {
          // If quantity is 1, remove the entire item from cart
          this.cart.splice(index, 1);
        }
        // Recalculate cart total
        this.calculateCartTotal();
      }
    },

    removeProductFromCart(productId: number, variation: string = "") {
      // 3. Remove the specific variation, not just the ID
      this.cart = this.cart.filter((item) => !(item.id === productId && item.variation === variation));
      this.calculateCartTotal();
    },

    calculateCartTotal() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.cartTotal = this.cart.reduce((total: number, item: CartProduct) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    setCart(cartItems: CartProduct[]) {
      this.cart = cartItems;
      this.calculateCartTotal();
    },

    clearCart() {
      this.cart = [];
      this.cartTotal = 0;
      this.calculateCartTotal();
    },

    toggleCartModal(payload?: boolean) {
      if (payload) {
        this.showCartModal = payload;
      }

      this.showCartModal = !this.showCartModal;
    },
  },
});
