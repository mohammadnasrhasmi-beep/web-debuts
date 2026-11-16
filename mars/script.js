/*************************************************
 * Exploration de Mars – manipulation du DOM
 *************************************************/

// Question 1 – Ajouter " (version expérimentale)" au titre principal
document.querySelector("header h1").textContent += " (version expérimentale)";

// Question 2 – Ajouter "Bienvenue ! " en gras au début du paragraphe du header
const headerParagraph = document.querySelector("header p");
headerParagraph.innerHTML = "<strong>Bienvenue ! </strong>" + headerParagraph.innerHTML;

// Question 3 – Ajouter un fait scientifique (en italique) à la liste
function ajouterFait() {
  const champ = document.getElementById("new-fact-input");
  const texte = champ.value.trim();

  if (texte === "") {
    alert("Le fait ne peut pas être vide !");
    return;
  }

  const nouveauFait = document.createElement("li");
  nouveauFait.textContent = texte;
  nouveauFait.style.fontStyle = "italic";
  nouveauFait.style.backgroundColor = ORANGE_CLAIR;
  document.getElementById("fact-list").appendChild(nouveauFait);

  champ.value = "";
  afficherNombreDeFaits();
}

// Question 4 – Colorer tous les faits en orange clair
// ("lightorange" n'existe pas en CSS, on utilise donc un code hexadécimal)
const ORANGE_CLAIR = "#ffd8a8";
document.querySelectorAll("#fact-list li").forEach((fait) => {
  fait.style.backgroundColor = ORANGE_CLAIR;
});

// Question 5 – Afficher le nombre de faits dans la console
function afficherNombreDeFaits() {
  const nombre = document.querySelectorAll("#fact-list li").length;
  console.log("Nombre de faits : " + nombre);
}
afficherNombreDeFaits();

// Question 6 – Alterner la couleur du rectangle à chaque clic
const colorBox = document.getElementById("color-box");
const COULEUR_INITIALE = "#ddd";
const COULEUR_MARS = "#c1440e";
let estCouleurMars = false;

function changerCouleur() {
  estCouleurMars = !estCouleurMars;
  colorBox.style.backgroundColor = estCouleurMars ? COULEUR_MARS : COULEUR_INITIALE;
  colorBox.style.color = estCouleurMars ? "white" : "#222";
}

// Question 7 – Changer le texte du rectangle au survol
colorBox.addEventListener("mouseenter", () => {
  colorBox.textContent = "Surface martienne";
});
colorBox.addEventListener("mouseleave", () => {
  colorBox.textContent = "Mars";
});

// Question 8 – Vérifier la réponse du quiz (insensible à la casse)
function verifierfait() {
  const champ = document.getElementById("quiz-input");
  const resultat = document.getElementById("quiz-result");
  const reponse = champ.value.trim().toLowerCase();

  if (reponse === "olympus mons") {
    resultat.textContent = "✔ Bonne réponse !";
    resultat.style.color = "green";
    champ.style.border = "";
  } else {
    resultat.textContent = "✘ Mauvaise réponse, essaie encore.";
    resultat.style.color = "#b02a30";
    champ.style.border = "2px solid red";
  }
}
