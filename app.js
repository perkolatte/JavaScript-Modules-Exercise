// Create app.js. Implement an async function, loadConfig, that dynamically imports the theme.mjs and decides which theme function to call based on the current hour (e.g., light theme before 6 PM, dark theme afterward).

async function loadConfig() {
  import { setLightTheme, setDarkTheme } from "./theme.mjs";
  const hour = new Date().getHours();
  if (hour < 18) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}
