document.getElementById('calcul').onclick = showAlert;
function getValue(){
    var pointure = document.getElementById("pointure").value;
    var naissance = document.getElementById("naissance").value;
    var result = (((((pointure*2)+5)*50)-naissance)+1769);
    alert('resultat : ' + result)    
}