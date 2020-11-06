function blockVanish(){
    document.getElementById('blockMax').style.display ='none';
}
window.onload=blockVanish;

document.querySelector('body').onscroll = animate;
function animate(){
    if(window.scrollY > height){
        blocAdd.classlist.add('scroll');
    } else{
        blocAdd.classlist.remove('scroll')
    }

}