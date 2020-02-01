"use strict";

let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


  expensesItem = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');



// объявляем глобальные переменные
let money, time;

// expensesBtn.disabled = true;
// optionalExpensesBtn.disabled = true;
// countBtn.disabled = true;




startBtn.addEventListener('click', function () {


  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", '');
  // проверяем на число
  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет на месяц?", "");
  }
  // фиксируем введенные данные пользователя
  appData.budget = money;
  appData.timeData = time;
  //  выводим эти данные на экран в поле budget-Value
  budgetValue.textContent = money.toFixed();
  //  запишем данные времени в value 
  // добавим год в нужное поле 
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  // добавим месяц в нужное  поле
  // месяц начинается с нуля
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  // добавим день в нужное поле
  //getDay возвращает день недели !
  dayValue.value = new Date(Date.parse(time)).getDate();

   // expensesBtn.disabled = false;
   // optionalExpensesBtn.disabled = false;
   //  countBtn.disabled = false;



});

// поле утвердить 
expensesBtn.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    // НАИМЕНОВАНИЕ РАСХОДА
    let a = expensesItem[i].value, 
    // СЛЕДУЮЩИЙ ЭЛЕМЕНТ
      b = expensesItem[++i].value;
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("well done");
      appData.expenses[a] = b;
      // слаживаем полученный результат в sum
      sum += +b; // незабываем проверить на число "+b"
    } else {
      // с помощью декремента возвращаем цикл на единицу обратно
      // i=i+1;
      i--;
    }
     expensesValue.textContent = sum;
  }
  // выводим результат
 
});

optionalExpensesBtn.addEventListener('click' , function(){
    for (let i = 0; i <= optionalExpensesItem.length; i++) {
      let opt= optionalExpensesItem[i].value;
      appData.optionalExpenses[i] = opt;
     optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

// Расчет дневного бюджета

countBtn.addEventListener('click' , function(){
      if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

// ВЫВОД возможного дохода через дополнительный доход 
// можно использовать change вместо input

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    console.log(1);
    if (isNaN(items) || items != '') {
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    } 
});

// меняем checkbox на false или true 

checkSavings.addEventListener("click", () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

// функции для работы с накоплением 
// записываем в input  и выводим на экран

sumValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value; // first input
        let percent = +percentValue.value; // second input

        appData.monthIncome = sum/100/12*percent; // доход за один месяц
        appData.yearIncome = sum/100*percent; // доход за один год
        // месячный доход 
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        // годовой доход
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

// 

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


// создаем объект

const appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
    income: [],
  timeData: time,
    savings: false
};

// for (let key in appData) {
//   console.log(
//     "Наша программа включает в себя данные : " + key + " - " + appData[key]
//   );
// }

// Расчет дневного бюджета detectDayBudget()

// Расчет уровня достатка detectLevel()

// Функция проверки накоплений checkSavings()

// Функция для определения необязательных расходов chooseOptExpenses()