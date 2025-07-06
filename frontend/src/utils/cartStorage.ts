export function getCartItemsFromStorage(): number[] {
  const stored = localStorage.getItem('cartItems');
  try {
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveCartItemsToStorage(items: number[]) {
  localStorage.setItem('cartItems', JSON.stringify(items));
}
