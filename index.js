const toggleBtn = document.getElementById("toggleBtn");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const body = document.body;

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(systemPrefersDark ? "dark" : "light");
  }
};

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  const newTheme = isDark ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

function setTheme(mode) {
  if (mode === "dark") {
    body.classList.add("dark");
    themeIcon.textContent = "🌞";
    themeText.textContent = "Light Mode";
  } else {
    body.classList.remove("dark");
    themeIcon.textContent = "🌙";
    themeText.textContent = "Dark Mode";
  }
}
