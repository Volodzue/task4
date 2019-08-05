let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    income: [],
    optionalExpenses: {},
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
    
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Щоденний бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Мінімальний рівень достатку');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Середній рівень достатку');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Високий рівень достатку');
        } else {
            console.log('Виконалась помилка!');
        }
    }, 
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Яка сума збережень?'),
                percent = +prompt('Під який процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Дохід в місяць з вашого депозиту: " + appData.monthIncome);
    
        }
    },
    chooseOptExpences: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = +prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может вы что-то забыли?'));
        appData.income.sort();
        while (typeof(items) != 'string' || items == '' || typeof(items) == null ) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
            appData.income = items.split(', ');
            appData.income.push(prompt('Может вы что-то забыли?'));
            appData.income.sort();
        }
        appData.income.forEach(function(item, i) {
            alert("Способы доп. заработка: " + (i+1) + ' - ' +  item);
        });
    }
};
for (let i in appData) {
    console.log("Наша программа включает в себя данные: " + i  + appData[i]);
}

