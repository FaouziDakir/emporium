import {carte} from './connexion.js'
import {carte2} from './connexion.js'


// CHANGEMENT DE COULEUR
// VARIABLES GLOBALES
let blanc = document.getElementsByClassName('btn btn-light')[0]
let noir = document.getElementsByClassName('btn btn-dark')[0]
let h1 = document.getElementsByTagName('h1')
let a = document.querySelectorAll('#section-trois a')
let aNav = document.querySelectorAll('#navbarSupportedContent a')
export let body = document.getElementsByTagName('body')[0]
export let nav = document.getElementsByTagName('nav')[0]

// FONCTION POUR PASSER AU NOIR
let bgNoir = () =>{
    body.classList.add('bg-noir')
    nav.classList.add('bg-noir')
    carte.classList.add('bg-noir')
    carte2.classList.add('bg-noir')

    for(let i = 0; i<h1.length; i++){
        h1[i].classList.add('text-blanc')
    }

    for(let i = 0; i< a.length; i++){
        a[i].classList.add('text-blanc')
    }

    for(let i = 0; i< aNav.length; i++){
        aNav[i].classList.add('text-blanc')
    }
}

// FONCTION POUR PASSER AU BLANC
let bgBlanc = () =>{
    body.classList.remove('bg-noir')
    nav.classList.remove('bg-noir')
    carte.classList.remove('bg-noir')
    carte2.classList.remove('bg-noir')

    for(let i = 0; i<h1.length; i++){
        h1[i].classList.remove('text-blanc')
    }

    for(let i = 0; i< a.length; i++){
        a[i].classList.remove('text-blanc')
    }

    for(let i = 0; i< aNav.length; i++){
        aNav[i].classList.remove('text-blanc')
    }
}

// ECOUTEURS D'EVENEMENTS
noir.addEventListener('click',bgNoir)
blanc.addEventListener('click',bgBlanc)