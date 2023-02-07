
let index = 0;
//https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval( () => {
    handleSlideShow()
}, 2000)


function handleSlideShow() {
    clear();

    let slideShow = ['poster1.png','poster2.png','poster3.png','poster4.png','poster5.png'];

    let slideShowDiv = document.getElementById('slideshow');
    
    if (index >= slideShow.length){
        index = 0;
    } 

    let image = document.createElement('img')
    image.src = slideShow[index];

    slideShowDiv.appendChild(image);
 
    index += 1;
    
}

function clear(){
    let slideShowDiv = document.getElementById('slideshow');
    slideShowDiv.removeChild(slideShowDiv.firstChild)
}