import {body} from './index.js'

let connexion = document.getElementById('connexion')
let modal = document.getElementById('modal-connexion')
let carte = document.getElementsByClassName('card-body')[0]
let formulaire = [...carte.children];
let inputs = [...carte.children[0].children];
let close = document.getElementById('close-modal')
let tab = [...inputs, ...formulaire, carte];

let afficherConnexion = () =>{
    modal.classList.remove('d-none')
    body.classList.add('hidden')

    modal.animate([
        { opacity: 0},
        { opacity: 1}
    ], {
        duration: 1000,
        iterations: 1
    });

    window.onclick = function(event) {
        console.log(event.target)

        if (tab.indexOf(event.target) == -1) {
            fermerConnexion();
        } 
    
          if(event.target == connexion){
              afficherConnexion();
          }
      }
    
}

let fermerConnexion = () =>{
    modal.classList.add('d-none')
    body.classList.remove('hidden')
    
}

connexion.addEventListener('click',afficherConnexion)
close.addEventListener('click',fermerConnexion)

