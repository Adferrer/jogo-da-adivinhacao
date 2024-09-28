let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('result').textContent = `Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas.`;
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = 'Muito baixo! Tente novamente.';
    } else {
        document.getElementById('result').textContent = 'Muito alto! Tente novamente.';
    }
});
