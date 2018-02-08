const images = document.querySelectorAll('.image')

function explore(){
   this.classList.toggle('open')
}

function toggleActive(e){
    console.log('transitionend');
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open_active')
    }
}
images.forEach(image => image.addEventListener('click', explore));
images.forEach(image => image.addEventListener('transitionend', toggleActive));
