function switchImg(img){
    img.src = img.src.match('img/logo-text2.png') ? 
        img.src.replace('img/logo-text2.png', 'img/logo-text2_black.png') : 
        img.src.replace('img/logo-text2_black.png', 'img/logo-text2.png');
}

function switchImgAbout(img){
    img.src = img.src.match('img/caca.jpg') ? 
        img.src.replace('img/caca.jpg', 'img/img-2.jpg') : 
        img.src.replace('img/img-2.jpg', 'img/caca.jpg');
}