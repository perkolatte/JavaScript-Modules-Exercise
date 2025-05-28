// Utility functions for string manipulation.
// Export each function individually for use throughout the application.

export function capitalize(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function toLowerCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str.toLowerCase();
}
export function toUpperCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str.toUpperCase();
}
export function trim(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str.trim();
}
