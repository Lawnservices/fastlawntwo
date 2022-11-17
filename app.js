function myFuncition() {
    var a = document.getElementById("myTopnav");
    if (a.className === "topnav") {
        a.className += " responsive";
    } else {
        a.className = "topnav";
    }
}

const laguna = document.getElementById('myTopnav');

document.addEventListener('scroll', () => {
    var scroll_posirion = window.scrollY;
    if (scroll_posirion > 260) {
        myTopnav.style.backgroundColor = 'green';

    } else {
        myTopnav.style.backgroundColor = '#00758f';
    }
})