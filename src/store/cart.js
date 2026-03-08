import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export const isCartOpen = atom(false);

export const cartItems = persistentAtom('ler_cart_v2', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addToCart(product, talle) {
  const items = cartItems.get();
  const uniqueKey = `${product.id}-${talle}`;
  const existingItem = items.find((item) => item.uniqueKey === uniqueKey);
  
  if (existingItem) {
    cartItems.set(items.map((item) =>
      item.uniqueKey === uniqueKey ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    cartItems.set([...items, { ...product, uniqueKey, selectedTalle: talle, quantity: 1 }]);
  }
  isCartOpen.set(true);
}

export function updateQuantity(uniqueKey, delta) {
  const items = cartItems.get();
  cartItems.set(items.map(item => {
    if (item.uniqueKey === uniqueKey) {
      return { ...item, quantity: Math.max(1, item.quantity + delta) };
    }
    return item;
  }));
}

export function removeFromCart(uniqueKey) {
  cartItems.set(cartItems.get().filter(item => item.uniqueKey !== uniqueKey));
}