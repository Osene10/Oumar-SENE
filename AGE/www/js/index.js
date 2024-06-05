function calculerAge() {
  const anneeNaissance = Number(document.getElementById('naissance').value);
  const resultat = document.getElementById('resultat');
  const resultatArea = document.querySelector('fieldset');

  if (isNaN(anneeNaissance) || anneeNaissance < 1900 || anneeNaissance > new Date().getFullYear()) {
      resultat.innerHTML = "Veuillez entrer une année valide.";
      resultatArea.hidden = false;
      return;
  }

  const age = new Date().getFullYear() - anneeNaissance;
  resultat.innerHTML = `Vous avez ${age} ans !`;
  resultatArea.hidden = false;
}

function effacerForm() {
  document.getElementById('ageForm').reset();
  document.querySelector('fieldset').hidden = true;
}
