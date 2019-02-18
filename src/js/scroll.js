import {nav} from './index.js'

window.onscroll = function() {scroll()};

// VARIABLES GLOBALES
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let hauteurNav = nav.clientHeight;
let sectionUn = document.getElementById('section-un')

// FONCTION POUR ACCROCHER LA NAVBAR EN SCROLL
let scroll = () =>{
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        sectionUn.style.paddingTop = hauteurNav + 'px'
      } else {
        navbar.classList.remove("sticky");
        sectionUn.style.paddingTop = '0px'
      }
}