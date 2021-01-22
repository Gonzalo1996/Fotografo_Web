addEventListener('DOMContentLoaded',() => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
           console.log('entré')
            const menu_items = document.querySelector('.header_ul')
            menu_items.classList.toggle('show')
        })
    }
})