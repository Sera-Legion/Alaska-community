const burgers = document.querySelectorAll('.burger');

burgers.forEach(burger => {
    const menu = burger.nextElementSibling; // Получаем следующее за бургером меню
    const animatedContainer = menu.querySelector('.animatedText'); // Контейнер для анимации текста
    const animatedText = "Добро пожаловать!"; // Текст для анимации

    burger.onclick = () => {
        burger.classList.toggle('active'); // Добавляем класс для анимации стрелки
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300); // Задержка для завершения анимации
        } else {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.classList.add('show');

                // Анимация для "Меню"
                const menuText = menu.querySelector('.menuText');
                if (menuText) {
                    animateText(menuText);
                }

                // Анимация для "Это текст внутри рамочки."
                const infoText = menu.querySelector('.infoText');
                if (infoText) {
                    animateText(infoText);
                }

                // Анимация для "Добро пожаловать!"
                if (animatedContainer) {
                    animateText(animatedContainer, animatedText);
                }
            }, 10); // Небольшая задержка для активации анимации
        }
    };
});

function animateText(element, text = element.textContent) {
    element.innerHTML = ''; // Очищаем элемент
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = char === ' ' ? '\u00A0' : char; // Заменяем пробел на неразрывный пробел
        span.style.animationDelay = `${index * 0.1}s`; // Задержка для каждого символа
        element.appendChild(span);
    });
}
