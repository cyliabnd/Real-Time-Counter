const textInput = document.getElementById("text-input");
const char = document.getElementById("char-count");
const progress = document.getElementById("progress");

textInput.addEventListener("input", () => {
  let text = textInput.value;
  let length = text.length;

  // Limiter à 50 caractères
  if (length > 50) {
    textInput.value = text.slice(0, 50);
    length = 50;
  }

  // Mettre à jour le compteur
  char.innerText = `Character Count: ${length}/50`;

  // Changer la couleur si limite atteinte
  if (length === 50) {
    char.style.color = "red";
    } else {
    char.style.color = "var(--dark-indigo)";
  }

  
  // Calcul du pourcentage pour la barre
  const percentage = (length / 50) * 100;
  progress.style.width = `${percentage}%`;

  // Changer la couleur si limite atteinte
  if (length === 50) {
    char.style.color = "red";
    progress.style.backgroundColor = "red";
  } else {
    char.style.color = "var(--dark-indigo)";
    progress.style.backgroundColor = "var(--dark-indigo)";
  }

});

