// For formatting prices (₹, commas, etc.)
export function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
  }
  