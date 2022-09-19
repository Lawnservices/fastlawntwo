const laguna = document.getElementById('header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 240) {
        header.style.backgroundColor = 'rgb(160,200, 180,0.4)'
    } else {
        header.style.backgroundColor = '#154'
    }
})