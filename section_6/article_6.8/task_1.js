/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.*/

//setInterval
function printNumbers(from, to) {
    let timerId = setInterval(() => {
        console.log(from++)
        if (from > to) {
            clearInterval(timerId);
        }
    }, 1000)
}

//рекурсивный вызов setTimeout
function printNumbers(from, to) {
    let count = from;
    let timerId = setTimeout(function tick(){
        console.log(count++);
        timerId = setTimeout(tick, 1000);
        if(count > to) {
            clearTimeout(timerId)
        }
        
    }, 1000)
}
printNumbers(3, 10)