// Ключові слова для змінних:
// var, let, const
// let message = 'Hello!';
// alert(message);
// message = 'World!';
// alert(message);

// const year = 2019;
// alert(year);

// const nextYear = year + 1;
// message = 'Next year will be ' + nextYear;
// alert(message);

const userName = prompt('Enter your name');
alert('Hello, ' + userName);

// Запитайте у користувача вік
// Обчисліть, скільки йому буде через рік
// Виведіть на екран
const userAge = parseFloat(prompt('Enter your age'));
const nextAge = userAge + 1;
alert(nextAge);

if (userName < 18 ) {
    alert("You are not adult");
} else {
    alert ("You are adult");
}