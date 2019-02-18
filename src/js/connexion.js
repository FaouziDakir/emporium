let connexion = document.getElementById('connexion')
let modal = document.getElementById('modal-connexion')
let carte = document.getElementsByClassName('card-body')[0]
let close = document.getElementById('close-modal')

let afficherConnexion = () =>{
    modal.classList.remove('d-none')

    modal.animate([
        { opacity: 0},
        { opacity: 1}
    ], {
        duration: 1000,
        iterations: 1
    });
    
}

let fermerConnexion = () =>{
    modal.classList.add('d-none')
    
}

connexion.addEventListener('click',afficherConnexion)
close.addEventListener('click',fermerConnexion)

window.onclick = function(event) {
      if (event.target != carte) {
          fermerConnexion();
      } 

      if(event.target == connexion){
          afficherConnexion();
      }
  }