console.log('hello, its me');

AOS.init();

//Navbar
let mainLocation = window.pageYOffset;

window.addEventListener('scroll', function(){
    let currentOffset = window.pageYOffset;

    if(mainLocation >= currentOffset) {
        document.getElementsByTagName('nav')[0].style.top = '0px'
    } else {
        document.getElementsByTagName('nav')[0].style.top = '-100px'
    }

    mainLocation = currentOffset;
}) 


//Menu
let headerLinks = document.querySelectorAll('.header--links')[0];
let colorChanger = true;

document.querySelectorAll('.hamburger')[0].addEventListener('click', function(){
    if (colorChanger){
        document.querySelectorAll('.hamburger')[0].style.color = '#fff';
        colorChanger = false;
    }else{
        document.querySelectorAll('.hamburger')[0].style.color = '#000';
         colorChanger = true;
    }
    headerLinks.classList.toggle('menuTwo');
})

