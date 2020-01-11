'use strict';

// объявляем глобальные переменные
let money, time;

function Start() {
	// ставим пустые кавычки для записи результата в переменную 
	money = +prompt("Ваш бюджет на месяц?", ''),
		time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

Start();

// создаем объект 
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {

	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
			console.log("well done");
			appData.expenses[a] = b;
		} else {
			// с помощью декремента возвращаем цикл на единицу обратно

			i--;
		}

	}
}

chooseExpenses();


// loop while
// let i=0;
// while (i<2) {
// 	// statement
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a != '' && b != '' && a.length < 50 ) {
// 		console.log("well done");
// 		appData.expenses[a] = b;
// 	}
// 	else {
// 		alert("Введите правильные данные");
// 		i--;
// 	}
// 	i++;
// }

// LOOP DO WHILE
// let i=0;
// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a != '' && b != '' && a.length < 50 ) {
// 		console.log("well done");
// 		appData.expenses[a] = b;
// 	}
// 	else {
// 		alert("Введите правильные данные");
// 		i--;
// 	}
// 	i++;
// }
// while(i<2)




appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет составляет : " + appData.moneyPerDay + " UAH.");

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка ")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000) {
	console.log("Средний уровень достатка")
} else {
	console.log("new Error(message: string)")
}



function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какая сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход с вашего депозита в месяц " + appData.monthIncome);
	}
}

checkSavings();

// Функция для определения необязательных расходов