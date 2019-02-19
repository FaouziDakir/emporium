// JS DE LA PARTIE MODAL

import {body} from './couleur.js'

// VARIABLES GLOBALES
let fenetre = document.getElementById('fenetre')
let fond = document.getElementById('fond-noir')
let connexion = document.getElementById('connexion')
let modal = document.getElementById('modal-connexion')

// VARIABLES PARTIE CONNEXION
export let carte = document.getElementsByClassName('card-body')[0]
let formulaire = [...carte.children];
let inputs = [...carte.children[0].children];
let tab = [...inputs, ...formulaire, carte];

// VARIABLES PARTIE INSCRIPTION
export let carte2 = document.getElementById('sinscrire')
let formulaire2 = [...carte2.children];
let inputs2 = [...carte2.children[0].children];
let tab2 = [...inputs2, ...formulaire2, carte2];

let close = document.getElementById('close-modal')
let modalInscription = document.getElementById('sinscrire')
let modalConnexion = document.getElementById('se-connecter')
let bouttonInscription = document.getElementById('inscription')

let afficherConnexion = () =>{

    // EFFETS VISUELS (fond noir)
    fond.classList.remove('d-none')
    fenetre.classList.add('d-flex')

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

          modal.animate([
            { transform: 'scale(0)'},
            { transform: 'scale(1)'}
        ], {
            duration: 500,
            iterations: 1
        });
      }

      bouttonInscription.addEventListener('click',inscription)
    
}

 // FONCTION POUR RETIRER LE MODAL EN CLIQUANT AILLEURS
 window.onclick = function(event) {


    if (tab2.indexOf(event.target) == -1 && tab.indexOf(event.target) == -1) {
        fermerConnexion();
    } 

     if(event.target == connexion){
          afficherConnexion();
    }
  }


// FERME MODAL
let fermerConnexion = () =>{
    fond.classList.add('d-none')
    fenetre.classList.remove('d-flex')
    modal.classList.add('d-none')
    body.classList.remove('hidden')
    modalInscription.classList.add('d-none')
    modalConnexion.classList.remove('d-none')

}

// ECOUTEURS SIMPLES
connexion.addEventListener('click',afficherConnexion)
close.addEventListener('click',fermerConnexion)

