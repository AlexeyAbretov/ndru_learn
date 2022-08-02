let timeout = null;
document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu');
    const menuContainer = document.querySelector('.menu__container');

    let div = null;
    for (let i = 0; i <= 100; i++) {
        div = document.createElement('div');
        div.textContent = i;

        container.append(div);
    }
    
    document.querySelector('.content').innerHTML = container.innerHTML;

    document.querySelector('.sidebar__opener').addEventListener('mouseenter', () => {
        sidebar.classList.add('sidebar_expand');
    });

    sidebar.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
    });

    sidebar.addEventListener('mouseleave', (event) => {
        timeout = setTimeout(() => {
            event.target.classList.remove('sidebar_expand');
        }, 500);
    });

    menu.addEventListener('mouseenter', () => {
        menuContainer.classList.add('menu__container_display_block');
    });

    menu.addEventListener('click', () => {
        menuContainer.classList.toggle('menu__container_display_block');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.className.includes('menu')) {
            menuContainer.classList.remove('menu__container_display_block');
        }
    })
})
