function calculerImc() {
    const poids = parseFloat(document.getElementById('poids').value);
    const taille = parseFloat(document.getElementById('taille').value);

    if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
        alert('Veuillez entrer des valeurs valides pour le poids et la taille.');
        return;
    }

    const imc = poids / (taille * taille);
    let interpretation = '';

    if (imc < 18.5) {
        interpretation = 'Poids insuffisant';
    } else if (imc < 25) {
        interpretation = 'Poids normal';
    } else if (imc < 30) {
        interpretation = 'Surpoids';
    } else {
        interpretation = 'Obésité';
    }

    const interpretationLabel = document.getElementById('interpretation');
    interpretationLabel.textContent = `Votre IMC est ${imc.toFixed(2)} (${interpretation})`;
    interpretationLabel.style.display = 'block';
}
