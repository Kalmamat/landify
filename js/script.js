document.querySelector('.menu__btn').addEventListener('click' ,() => {
    document.querySelector('.menu__btn').classList.toggle('active')
    document.querySelector('.nav').classList.toggle('active')
})
// header_menu_item это класс который в ссылках меню.
// Нужен для закрытия при клике на них
document.querySelectorAll('.nav__item').forEach( (oneLink) => {
    // oneLink это имя одной ссылки меню. Придумываем сами название
    oneLink.addEventListener('click', () => {
        document.querySelector('.menu__btn').classList.remove('active')
        document.querySelector('.header_menu').classList.remove('active')
    })
})