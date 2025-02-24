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
    const zazakladka = document.createElement('div');
    zazakladka.className = "zakladka";
    zazakladka.id = "zad";
    menuDiv.appendChild(zazakladka);

    // Добавляем обработчик клика на меню
    menuDiv.addEventListener('click', function() {
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active'); // Добавьте/удалите класс для показа/скрытия меню

        // Здесь добавляем логику изменения цвета границы
        const zakladka = document.getElementById('zad');
        const originalBorderColor = "rgba(1, 7, 15, 0.7) rgba(1, 7, 15, 0.7) transparent";

        // Проверяем текущий цвет границы и переключаем его
        if (zakladka.style.borderColor === "rgba(1, 7, 15, 0) rgba(1, 7, 15, 0) transparent") {
            // Если текущий цвет границы соответствует заданному, меняем его обратно
            zakladka.style.borderColor = originalBorderColor; // Установите исходный цвет границы
        } else {
            // В противном случае меняем цвет границы на заданный
            zakladka.style.borderColor = "rgba(1, 7, 15, 0) rgba(1, 7, 15, 0) transparent";
        }
    });

    // Добавляем div меню в header
    header.appendChild(menuDiv);

    // Создаем элемент nav
    const nav = document.createElement('nav');
    nav.id = 'nav-menu';

    // Массив ссылок с изображениями
    const links = [
        { text: 'home', href: '../index.html', imgSrc: '../img/s1.png' },
        { text: 'Мемы', href: '../pages/mem.html', imgSrc: '../img/s1.png' },
        { text: 'Пасты', href: '#', imgSrc: '../img/s1.png' },
        { text: 'Видево', href: '#', imgSrc: '../img/s1.png' },
        { text: 'Гифки', href: '#', imgSrc: '../img/s1.png' },
        { text: 'Войсы', href: '#', imgSrc: '../img/s1.png' },
        { text: 'Список', href: '#', imgSrc: '../img/s1.png' },
        { text: 'logo', href: '№', imgSrc: '../img/s1.png' }

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

});


// ХВОСТ УПИРАЕТСЯ В ХЕДЕР
document.addEventListener('DOMContentLoaded', function() {
    const hvost = document.getElementById('hvost');
    const header = document.querySelector('header');
    const scrollLimit = 200; // Максимальное значение прокрутки

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Проверяем, находится ли прокрутка в пределах установленного предела
        if (header.style.position !== "fixed") {
            if (scrollY <= scrollLimit) {
                // Рассчитываем новое значение top для элемента #hvost
                let newTop = Math.max(0, 7 - (scrollY / scrollLimit) * 7);
                hvost.style.top = newTop + '%';
            } else {
                // Если прокрутка превышает предел, фиксируем элемент на 0%
                hvost.style.top = '0%';
            }
        }
    });
});

// КАРТАВРАЩАТЕЛЬНЫЙ МЕХАНИЗМ
const cards = document.querySelectorAll('.card'); // Получаем все карточки

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Переключаем класс flipped для каждой карточки
    });
});

document.getElementById('hvost').onclick = function(){
    const hvost = document.getElementById('hvost');
    const header = document.querySelector('header');

    if (header.style.position === "absolute" || header.style.position === "") {
        header.style.position = "fixed";
        hvost.style.top = "7%"; // Устанавливаем позицию хвоста под хедером
    } else {
        header.style.position = "absolute";
        hvost.style.top = "0"; // Устанавливаем хвост на верх
    }

};
