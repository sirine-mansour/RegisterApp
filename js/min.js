const nom = document.querySelector('.nom');
console.log (nom.value);
const submit = document.querySelector('.submit');
console.log (submit.value);

function validatenom (nom) {
    if(!nom) {
        return " nom is required.";
    }
    if (nom.length < 4 ){
        return "nom must be between 3 and 20 characters long.";
     }
       
        if (!/^[a-zA-Z]+$/.test(nom)) {
           return "nom must contain only letters and spaces.";
        }
        return null;
     }

submit.addEventListener('click' , (event) => {
    if ( validatenom(nom.value) !== null) {
        alert (validatenom (nom.value))
        return;
    }   } )

