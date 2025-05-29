// Utility functions for string manipulation.

export function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toLowerCase(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }
  return str.toLowerCase();
}

export function toUpperCase(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }
  return str.toUpperCase();
}

export function trim(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }
  return str.trim();
}
