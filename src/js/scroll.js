import {nav} from './index.js'

window.onscroll = function() {scroll()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let hauteurNav = nav.clientHeight;
let sectionUn = document.getElementById('section-un')

let scroll = () =>{
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        sectionUn.style.paddingTop = hauteurNav + 'px'
      } else {
        navbar.classList.remove("sticky");
        sectionUn.style.paddingTop = '0px'
      }
}