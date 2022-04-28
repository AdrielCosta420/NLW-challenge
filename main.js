// abre e fecha com o menu quando clicar no ícone superior direita
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

// quando clicar em um item do menu, esconder o menu//
const links = document.querySelectorAll('nav ul a')

for (const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */ 
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if (this.window.scrollY >= navHeight) {
        //scroll é maior que a  altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* Testimonials carousel slider swiper(carrosel de rolar os depoimentos)*/ 


    /* PAREI EM 42 MINUTOS*/