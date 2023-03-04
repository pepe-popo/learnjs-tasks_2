// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

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
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

//рекурсия
function printListRec(list) {
    if (list.next === null) {
        console.log(list.value);
    } else {
        console.log(list.value)
        printListRec(list.next)
    }
}

//Цикл
function printList(list) {
    for(let i = list; i != null; i = i.next) {
        console.log(i.value);
    }
}