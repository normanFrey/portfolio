const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const flagValue = document.getElementById("flag-theme");

const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
};

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (flagValue.value == 1) {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
    toggleText.textContent = "Light Mode";
    flagValue.value = 2;
    document.getElementById("ver").src = "responsive-dark.png";
    document.getElementById("ver1").src = "responsive-dark.png";
    document.getElementById("ver2").src = "responsive-dark.png";
  } else {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
    toggleText.textContent = "Dark Mode";
    flagValue.value = 1;
    document.getElementById("ver").src = "responsive-light.png";
    document.getElementById("ver1").src = "responsive-light.png";
    document.getElementById("ver2").src = "responsive-light.png";
  }
});

toggleColors.addEventListener("click", (e) => {
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
