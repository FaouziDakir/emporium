import {toggler} from './scroll.js'
import {navbar} from './scroll.js'


toggler.addEventListener('click',()=>{
    if(navbar.classList.contains('d-none')){
        navbar.classList.remove('d-none')
        console.log('flex')

    navbar.animate([
        { transform: 'translateY(-256px)'},
        { transform: 'translateY(0px)'}
    ], {
        duration: 300,
        iterations: 1
    });

    } else {
        navbar.classList.add('d-none')
        console.log('none')

        navbar.animate([
            { transform: 'translateY(0px)'},
            { transform: 'translateY(-256px)'}
        ], {
            duration: 300,
            iterations: 1
        });
    }
})