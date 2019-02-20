window.onscroll = function() {scroll(),spyscroll()};
window.onload = function() {spyscroll()};

// VARIABLES GLOBALES
export let navbar = document.getElementById("navbar-englobe");
let sticky = navbar.offsetTop;
let titre = document.getElementById('titre-principal')
let titre2 = document.getElementById('titre-secondaire')
export let burger = document.getElementById('burger')
export let toggler = document.getElementById('toggler')



// FONCTION POUR ACCROCHER LA NAVBAR EN SCROLL
let scroll = () =>{
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        titre.classList.add('d-none')
        titre2.classList.remove('d-none')
        burger.classList.add("sticky")

      } else {
        navbar.classList.remove("sticky");
        titre.classList.remove('d-none')
        titre2.classList.add('d-none')
        burger.classList.remove("sticky")

      }
}

// FONCTIONS SPYSCROLL

let spyscroll = () => {
  scrollEventActive(0, 600, 'lien-home');
  scrollEventActive(600, 1200, 'lien-product');
  scrollEventActive(1200, 2100, 'lien-blog');
  scrollEventActive(2100, 2700, 'lien-elements');
  scrollEventActive(2700, 3700, 'lien-about');
  scrollEventActive(3700, 4600, 'lien-contact');
}

  
var scrollEventActive = function(pos1, pos2, id){
  if (document.documentElement.scrollTop >= pos1 && document.documentElement.scrollTop < pos2) {
      document.getElementById(id).classList.add('border');
  } else {
      document.getElementById(id).classList.remove('border');
  };
};