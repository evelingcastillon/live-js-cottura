//Il programma chiede all’utente quanti secondi mancano
//alla cottura della pasta. Dopo il tempo indicato, appare un alert().

var secondi = parseInt(prompt('Quanti secondi mancano alla cottura della pasta?'));
console.log(secondi);

setTimeout(function() {
    alert('La pasta è pronta!')
}, secondi * 1000);