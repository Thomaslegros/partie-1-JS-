document.getElementById('image').onmouseover = NewImage
function NewImage(){
    document.getElementById('image').src = 'asset/image/jul cesar.jfif';
}
document.getElementById('image').onmouseout = OldImage
function OldImage(){
    document.getElementById('image').src = 'asset/image/jull.jfif';
}

// correction hugo