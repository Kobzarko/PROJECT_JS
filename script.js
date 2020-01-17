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
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++)
		 {
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
};

function chooseExpenses() {

	
}

chooseExpenses();


 // Расчет дневного бюджета

function detectDayBudget() {                                           
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();



// Расчет уровня достатка

function detectLevel() {                                                
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();




// Функция проверки накоплений

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

function chooseOptExpenses() {                            

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();