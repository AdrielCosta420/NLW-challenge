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