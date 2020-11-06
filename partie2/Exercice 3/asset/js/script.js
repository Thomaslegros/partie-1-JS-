document.getElementById("clic").onclick=changer;
var num=0;
function changer (){
    if(num == 0){
        num =1;
        document.pictur.width = 1000;
        document.pictur.height = 700;
    } else {
        num = 0;
        document.pictur.width = 500;
        document.pictur.height = 200;
    }
}
