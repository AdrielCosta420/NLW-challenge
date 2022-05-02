// abre e fecha com o menu quando clicar no ícone superior direita
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// quando clicar em um item do menu, esconder o menu//
const links = document.querySelectorAll('nav ul a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (this.window.scrollY >= navHeight) {
        //scroll é maior que a  altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
}

window.addEventListener('scroll', function () {
    
})

/* Testimonials carousel slider swiper(carrosel de rolar os depoimentos)*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

/* ScrollReveal: Mostrar elementos quando der scroll na pag*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset:true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    footer .brand, footer .social
`,
{interval: 100}
)


/* Botao voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})