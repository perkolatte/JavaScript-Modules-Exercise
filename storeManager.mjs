// Demonstrates inventory management by importing and using inventory functions.

import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("Apple");
addItem("Banana");
addItem("Cherry");
addItem("Dragonfruit");
removeItem("Banana");
listItems();
