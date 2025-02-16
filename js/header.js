document.addEventListener('DOMContentLoaded', function() {

    if (document.querySelector('header')) {
        return; // Если header существует, выходим из функции
    }

    // Создаем элемент header
    const header = document.createElement('header');

    // Создаем div для меню
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';
    menuDiv.id = 'burger-menu';

    // Создаем полосы для бургер-меню
    for (let i = 1; i <= 3; i++) {
        const bar = document.createElement('div');
        bar.className = `bar bar${i}`;
        menuDiv.appendChild(bar);
    }

    menuDiv.addEventListener('click', function() {
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active'); // Добавьте/удалите класс для показа/скрытия меню
    });

    // Добавляем div меню в header
    header.appendChild(menuDiv);

    // Создаем элемент nav
    const nav = document.createElement('nav');
    nav.id = 'nav-menu';

    // Массив ссылок с изображениями
    const links = [
        { text: 'Мемы', href: '../pages/mem.html', imgSrc: '../img/s1.webp' },
        { text: 'Пасты', href: '#', imgSrc: '../img/s1.webp' },
        { text: 'Видево', href: '#', imgSrc: '../img/s1.webp' },
        { text: 'Гифки', href: '#', imgSrc: '../img/s1.webp' },
        { text: 'Войсы', href: '#', imgSrc: '../img/s1.webp' },
        { text: 'Список', href: '#', imgSrc: '../img/s1.webp' }
    ];

    // Создаем ссылки
    links.forEach(link => {
        const a = document.createElement('a');
        const img = document.createElement('img');
        img.className = 'sticker';
        img.src = link.imgSrc; // Используем путь к изображению из объекта
        a.appendChild(img);
        a.appendChild(document.createTextNode(link.text));
        a.href = link.href;
        nav.appendChild(a);
    });

    // Добавляем nav в header
    header.appendChild(nav);

    // Вставляем header в начало body
    document.body.insertBefore(header, document.body.firstChild);
})


const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});
