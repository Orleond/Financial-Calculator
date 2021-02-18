"use strict";

const money = +prompt('Ваш месячный доход?', 1000),
    income = 'Халтура',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов', 'Курсы'),
    amount1 = +prompt('Во сколько это обойдется?', 280),
    expenses2 = prompt('Введите обязательную статью расходов', 'Аренда'),
    amount2 = +prompt('Во сколько это обойдется?', 150),
    mission = 5000,
    period = 6;

    let showTypeOf = function(data) {
        console.log(data, typeof(data));    
    };
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);

    // Сумма всех обязательных расходов за месяц
    const getExpensesMonth = function(exp1, exp2) {
        return exp1 + exp2;
    };

    // Накопления за месяц (доходы минус расходы)
    const getAccumulatedMonth = function(money, exp) {
        return money - exp;
    };    
    let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));

    // За какой период будет достигнута цель
    const getTargetMonth = function(mission, accumulated) {
        return Math.ceil(mission / accumulated);
    };
    let budgetDay = Math.floor(accumulatedMonth / 30);
   
    console.log(`Расходы за месяц: ${getExpensesMonth(amount1, amount2)}`);  
    console.log(addExpenses.toLowerCase().split(', '));
    console.log('Цель будет достигнута за ', getTargetMonth(mission, accumulatedMonth), ' месяцев');
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