import {body} from './index.js'

// VARIABLES GLOBALES
let connexion = document.getElementById('connexion')
let modal = document.getElementById('modal-connexion')
export let carte = document.getElementsByClassName('card-body')[0]
let formulaire = [...carte.children];
let inputs = [...carte.children[0].children];
let tab = [...inputs, ...formulaire, carte];

let carte2 = document.getElementById('sinscrire')
let formulaire2 = [...carte2.children];
let inputs2 = [...carte2.children[0].children];
let tab2 = [...inputs2, ...formulaire2, carte2];

let close = document.getElementById('close-modal')
let modalInscription = document.getElementById('sinscrire')
let modalConnexion = document.getElementById('se-connecter')
let bouttonInscription = document.getElementById('inscription')

let afficherConnexion = () =>{

    // AFFICHE LE MODAL
    modal.classList.remove('d-none')

    // POUR RETIRER LA BARRE DE SCROLL
    body.classList.add('hidden')

    // ANIMATION FADE
    modal.animate([
        { opacity: 0},
        { opacity: 1}
    ], {
        duration: 1000,
        iterations: 1
    });

   
      let inscription = () =>{
          modalConnexion.classList.add('d-none')
          modalInscription.classList.remove('d-none')
      }

      bouttonInscription.addEventListener('click',inscription)
    
}

 // FONCTION POUR RETIRER LE MODAL EN CLIQUANT AILLEURS
 window.onclick = function(event) {

    if (tab.indexOf(event.target) == -1 && tab2.indexOf(event.target) == -1) {
        fermerConnexion();
    } 

     if(event.target == connexion){
          afficherConnexion();
    }
  }

// FERME MODAL
let fermerConnexion = () =>{
    modal.classList.add('d-none')
    body.classList.remove('hidden')
    modalInscription.classList.add('d-none')
    modalConnexion.classList.remove('d-none')

}

// ECOUTEURS SIMPLES
connexion.addEventListener('click',afficherConnexion)
close.addEventListener('click',fermerConnexion)

