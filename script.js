    
    const calcolo = document.getElementById('calcolo')
    const annulla = document.getElementById('annulla')

    //FUNZIONE PER CANCELLARE
    
    calcolo.addEventListener('click', function() {
    
    const km = parseInt(document.getElementById('km').value);
    const eta = parseInt(document.getElementById('eta').value);
    let risultato = document.getElementById('risultato');

    // Calcolo del prezzo base
    let prezzoBase = km * 0.21;

    // Applicazione degli sconti
    if (eta < 18) {
        prezzoBase = prezzoBase * 0.8; // Sconto del 20%
    } else if (eta >= 65) {
        prezzoBase = prezzoBase * 0.6; // Sconto del 40%
    } 

    risultato.textContent = 'Il risultato è: ' + prezzoBase.toFixed(2) + '€';
});

// FUNZIONE PER ANNULLARE

  annulla.addEventListener('click', function() {
  document.getElementById("km").value = "";
  document.getElementById("eta").value = "";

});  
