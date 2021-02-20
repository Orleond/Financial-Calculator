"use strict";

// Проверка на число
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let expenses = [],
    money;

const start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};
start();

const income = 'Халтура',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 5000,
    period = 6;

let showTypeOf = function(data) {
    console.log(data, typeof(data));    
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Сумма всех обязательных расходов за месяц
const getExpensesMonth = function() {
    let sum = 0,
        expensesPrice;

    for (let i = 0; i < 2; i++) {           
        expenses[i] = prompt('Введите обязательную статью расходов');
        do {
            expensesPrice = prompt('Во сколько это обойдется?');
        } while (!isNumber(expensesPrice));
        sum += +expensesPrice;
    }

    console.log(sum);
    return sum;
};
let expensesAmount = getExpensesMonth();

// Накопления за месяц (доходы минус расходы)
const getAccumulatedMonth = function(money, exp) {
    return money - exp;
};    
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

// За какой период будет достигнута цель
const getTargetMonth = function(mission, accumulated) {
    let targetMonth = Math.ceil(mission / accumulated);
    if (targetMonth < 0) {
        return 'Цель не будет достигнута';
    } else {
    return 'Цель будет достигнута за ', targetMonth, ' месяцев';
    }
};
let budgetDay = Math.floor(accumulatedMonth / 30);

console.log(`Расходы за месяц: ${expensesAmount}`);  
console.log(addExpenses.toLowerCase().split(', '));
console.log(getTargetMonth(mission, accumulatedMonth));
console.log('Бюджет на день: ', budgetDay);

const getStatusIncome = function() {
    if (budgetDay >= 40) {
        return ('У вас высокий уровень дохода!');
    } else if (budgetDay < 40 && budgetDay >= 20) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 20 && budgetDay >= 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что-то пошло не так');
    }
};

console.log(getStatusIncome());