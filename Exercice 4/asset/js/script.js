// document.getElementById('clickboutton').onclick = showAlert;
// function showAlert(){
//     alert('input')
// }
document.getElementById('clickbutton').onclick = showAlert;
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
     var Prénom = document.getElementById("Prénom").value;
    var Nom = document.getElementById("Nom").value;
    var Ville = document.getElementById("Ville").value;
    alert('Bonjour'+' '+ Prénom + ' '+ Nom + ' de'+" "+Ville)
}