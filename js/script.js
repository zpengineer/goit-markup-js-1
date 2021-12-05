// Задача 1

// const productName = "Генератор защитного поля"
// let productPrice = 1000;
// let msg = ` Выбран ${productName}, цена за штуку: ${productPrice} кредитов`
// console.log(msg);


// productPrice = 2000;
// msg = ` Выбран ${productName}, цена за штуку: ${productPrice} кредитов`
// console.log(msg);



// Задача 2
// const total = 100;
// const ordered = 50;



// let msg = "";
// // if (ordered <= total) {
// //     msg = "Заказ оформлен, с вами свяжется менеджер";
// // }

// ordered <= ordered
//     ? msg = "Заказ оформлен, с вами свяжется менеджер"
//     : msg = "На складе недостаточно твоаров!";


// console.log(msg);

// Задание 3

// const ADMIN_PASSWORD = 'dima';
// let message = "";
// const userInput = prompt("ввeдіть пароль");
// if (userInput === null) {
//     message ="Вдмінено користувача"
// }else if (ADMIN_PASSWORD === userInput) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }
// console.log(message);

// Задание 4

// const credits = 35500;
// const pricePerDroid = 3000;
// const amauntDroidsToBuy = prompt("еобходимо спросить количество дроидов которые пользователь хочет купить");
// let totalPrice = 0;
// let mess = "";
// const totalOrder = amauntDroidsToBuy * pricePerDroid;

// if (!amauntDroidsToBuy) {
//     mess = 'Отменено пользователем!';
    
// }
// else if (totalOrder> credits) {
//     mess ='Недостаточно средств на счету!'
    
// }
// else {
//     mess=`Вы купили ${amauntDroidsToBuy} дроидов, на счету осталось ${credits - totalOrder} кредитов.`
    
// }
// console.log(mess);
// Задание 5

// let state = prompt("Вудіть країну").toLowerCase().split("");
// state[0] = state[0].toUpperCase();
// state = state.join("");
// let price = 0;
// let state = prompt("Вудіть країну").toLowerCase();
// state = state[0].toUpperCase() + state.slice(1);
// switch (state) {
//     case "Китай":
//         price = 150;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     case "Австралия":
//         price = 300;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     case "Индия":
//         price = 160;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     case "Ямайка":
//         price = 120;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     default:
//         console.log("Сьюи немає доставки");
// }

// Задание 6

// let total = 0;
// let input = prompt('Enter number...');

// for (let i = 0; input !== null; i += 1) {
//     if (isNaN(input)) {
//         alert('Вы ввели не число');
//         input = prompt('Enter number...');
//     } else {
//         total += Number(input);
//         input = prompt('Enter number...');
//     }
// }

// console.log('Сумма равна = ', total);






// const salaryes = [100, 500, 600, 1000, 1500];
// let totalSalaryes = 0;

// for (let i = 0; i < salaryes.length; i += 1) {
//   totalSalaryes += salaryes[i];
// }
// console.log(totalSalaryes);

// const salaryes = [100, 500, 600, 1000, 1500];
// let maxSalary = [];

// for (let i = 0; i < salaryes.length; i += 1) {
//     if (salaryes[i] > 600) {
//         maxSalary.push(salaryes[i]);
//     }
// }
// console.log(maxSalary);