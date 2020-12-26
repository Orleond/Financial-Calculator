"use strict";

const money = 1000,
    income = 'Халтура',
    addExpenses = 'Подарки, продукты',
    deposit = false,
    mission = 5000,
    period = 6,
    budgetDay = Math.floor(money / 30);

    console.log('money: ', typeof money);
    console.log('income: ', typeof income);
    console.log('deposit: ', typeof deposit);
    console.log('addExpenses: ', addExpenses.length);    
    console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей.`);    
    console.log('addExpenses: ', addExpenses.toLowerCase().split(', '));
    console.log('budgetDay: ', budgetDay);
