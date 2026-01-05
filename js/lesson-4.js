// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector('body');
console.log(bodyElem);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleElem = document.querySelector('#title');
console.log(titleElem);


// 3 - отримай елемент class="list" і виведи його в консоль;
const listElem = document.querySelector('.list');
console.log(listElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataElem = document.querySelectorAll('[data-topic]');
console.log(dataElem);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstDataElem = dataElem[0];
const firstDataElem = listElem.firstElementChild;
console.log(firstDataElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDataElem = dataElem[dataElem.length - 1];
console.log(lastDataElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const siblingTitle = titleElem.nextElementSibling;
console.log(siblingTitle);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allTitles = document.querySelectorAll('h3');
// allTitles.forEach(title => console.log(title.textContent)
// );
console.log(allTitles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
allTitles.forEach(title => {
    console.log(title.textContent)
    title.classList.add('active')
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const dataNavElem = document.querySelector('[data-topic="navigation"]');
console.log(dataNavElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
dataNavElem.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const pElem = dataNavElem.querySelector('p');

const pElem = document.querySelector('[data-topic="navigation"]>p');
pElem.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const dataManElem = document.querySelector(`[data-topic='${currentTopic}']`);
console.log(dataManElem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
dataManElem.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedElem = document.querySelector('h3.completed');
console.log(completedElem);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completedElem.closest('li').remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const pNewElem = document.createElement('p');
// pNewElem.textContent = "Об'єктна модель документа (Document Object Model)";
// titleElem.after(pNewElem);
// const markup = "<p>Об'єктна модель документа (Document Object Model)</p>"
// titleElem.insertAdjacentHTML("afterend", markup);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newP = document.createElement('p');
// const newLi = document.createElement('li');
// const newH3 = document.createElement('h3');
// newH3.textContent = "Властивість innerHTML";
// newP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// newLi.append(newH3, newP);
// listElem.append(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const markup = "<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>";
listElem.insertAdjacentHTML("beforeend", markup);
// 20 - очисти список
listElem.innerHTML = "";

// Task-2
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).
const numberContainer = document.querySelector('.number-container');
for (let i = 0; i < 100; i++) {
    const numberBlock = document.createElement('div');
    numberBlock.classList.add('number');
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numberBlock.textContent = randomNumber;
    if (randomNumber % 2 === 0) {
        numberBlock.classList.add('even');
    } else {
        numberBlock.classList.add('odd');
    }
    numberContainer.appendChild(numberBlock);
}



// Task-3
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('.js-contact-form');
const userNameInput = document.querySelector('.js-username-input');
const spanName = document.querySelector('.js-username-output');

userNameInput.addEventListener('input', handleUserNameInput);
form.addEventListener('submit', handleSubmit);
userNameInput.addEventListener('input', handleChangeName);



function handleUserNameInput(event) {
    const inputValue = event.target.value.trim();
    console.log(inputValue);
    if (inputValue.length > 6) {
        userNameInput.classList.add('success');
        userNameInput.classList.remove('error');
    }
    else {
        userNameInput.classList.add('error'); 
        userNameInput.classList.remove('success');
    }
}


function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements.userName.value.trim();
    const checkBoxValue = event.target.elements.accept.checked;
    if (inputValue === "" || !checkBoxValue) {
        alert('Write all');
    }
    else {
        const data = { username: inputValue };
        console.log(data);
        form.reset(); 
        spanName.textContent = "Anonymous";  
    }
}


function handleChangeName(event) {
    const inputValue = event.target.value.trim();
    spanName.textContent = event.target.value;
    if (inputValue === "") {
        spanName.textContent = "Anonymous";  
    }
}

// Task-4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.