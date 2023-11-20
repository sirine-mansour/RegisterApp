const nom = document.querySelector('.nom');
console.log (nom.value);
const submit = document.querySelector('.submit');
console.log (submit.value);

function validatenom (nom) {
    if(!nom) {
        return " nom is required.";
    }
    
        return null;
     }

submit.addEventListener('click' , (event) => {
    if ( validatenom(nom.value) !== null) {
        alert (validatenom (nom.value))
        return;
    }   } )

