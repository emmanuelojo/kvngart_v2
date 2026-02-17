import { useCartStore } from "~/stores/cart";
import type { CartProduct } from "~/types/Products";

export const fetchLocalCart = (): CartProduct[] | [] => {
  const cartStore = useCartStore();
  const cart = localStorage.getItem("cart");

  if (cart) {
    const cartItems = JSON.parse(cart) as CartProduct[];
    cartStore.setCart(cartItems);
    return cartItems;
  }

  return [];
};
