    
    const calcolo = document.getElementById('calcolo')
    
    calcolo.addEventListener('click', function() {
    
    const km = parseInt(document.getElementById('km').value);
    const eta = parseInt(document.getElementById('eta').value);
    let risultato = document.getElementById('risultato')

    // Calcolo del prezzo base
    let prezzoBase = km * 0.21;

    // Applicazione degli sconti
    if (eta < 18) {
        prezzoBase *= 0.8; // Sconto del 20%
    } else if (eta >= 65) {
        prezzoBase *= 0.6; // Sconto del 40%
    }

    risultato.textContent = 'Il risultato è: ', prezzoBase;
});

    
