let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

for(let i = 0 ; i<2; i++)
{
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a != '' && b != '' && a.length < 50 ) {
		console.log("well done");
		appData.expenses[a] = b;
	}
	else {
		alert("Введите правильные данные");
		i--;
	}
	
}

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




appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет составляет : "  + appData.moneyPerDay + " UAH.");

if (appData.moneyPerDay< 100) {
	console.log("Минимальный уровень достатка ")
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка")
}else if ( appData.moneyPerDay > 2000) {
	console.log("Средний уровень достатка")
}else {
	console.log("new Error(message: string)")
}




