"use strict";

const money = prompt('Ваш месячный доход?', 1000),
    income = 'Халтура',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?', 'Курсы'),
    amount1 = prompt('Во сколько это обойдется?', 280),
    expenses2 = prompt('Введите обязательную статью расходов?', 'Аренда'),
    amount2 = prompt('Во сколько это обойдется?', 150),
    mission = 5000,
    period = 6,
    budgetMonth = money - amount1 - amount2,
    budgetDay = Math.floor(budgetMonth / 30);

    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log(addExpenses.length);    
    console.log(`Период равен ${period} месяцев`);
    console.log(`Цель заработать ${mission} рублей.`);    
    console.log(addExpenses.toLowerCase().split(', '));
    console.log('Бюджет на месяц: ', budgetMonth);
    console.log('Цель будет достигнута за ', Math.ceil(mission / budgetMonth), ' месяцев');
    console.log('budgetDay: ', budgetDay);

    
if (budgetDay >= 40) {
    console.log('У вас высокий уровень дохода!');
} else if (budgetDay < 40 && budgetDay >= 20) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 20 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}