// Dynamically imports theme functions and sets the theme based on the current hour.

async function loadConfig() {
  const { setLightTheme, setDarkTheme } = await import("./theme.mjs");
  const hour = new Date().getHours();
  if (hour < 18) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}
