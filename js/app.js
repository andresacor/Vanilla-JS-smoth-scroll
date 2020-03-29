

let subir = document.querySelector('#subir')

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 500) {
        if(!subir.classList.contains('entrar')) {
            subir.classList.remove('salir')
            subir.classList.add('entrar')
            subir.style.display = 'block'
      }
    }
    else {
        if(subir.classList.contains('entrar')) {
            subir.classList.remove('entrar')
            subir.classList.add('salir')
            subir.style.display = 'none'
        }
    }
} )

