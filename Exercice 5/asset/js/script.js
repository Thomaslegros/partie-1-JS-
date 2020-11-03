document.getElementById('clickbutton').onclick = showAlert;
function getValue() {
    var Nombre1 = document.getElementById("Nombre1").value;
    var Nombre2 = document.getElementById("Nombre2").value;
    var result = (Nombre1%Nombre2);
    alert('Reste ' + result)
}