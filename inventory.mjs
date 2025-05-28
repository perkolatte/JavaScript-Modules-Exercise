const inventory = [];

export function addItem(item) {
  if (typeof item !== "string" || item.trim() === "") {
    throw new Error("Invalid item. Item must be a non-empty string.");
  }
  inventory.push(item);

  console.log(`Item ${item} added to inventory.`);
}

export function removeItem(item) {
  const index = inventory.indexOf(item);
  if (index === -1) {
    throw new Error(`Item ${item} not found in inventory.`);
  }
  inventory.splice(index, 1);

  console.log(`Item ${item} removed from inventory.`);
}

export function listItems() {
  if (inventory.length === 0) {
    console.log("Inventory is empty.");
    return;
  }
  console.log("Current inventory items:");
  inventory.forEach((item, index) => {
    console.log(`${index}: ${item}`); //Index +1?
  });
}
