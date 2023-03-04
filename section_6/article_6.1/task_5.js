/*
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию. */

//Рекурсия
function printReverseListRec(list) {
    if (list.next) {
        printReverseListRec(list.next);
    }

    console.log(list.value);
}

//Цикл
function printReverseList(list) {
    let result = [];
    let prop = list
    do {
        result.push(prop.value);
        prop = prop.next;
    } while (prop.next);
    result.push(prop.value);

    result.reverse();

    result.forEach(value => console.log(value))
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};