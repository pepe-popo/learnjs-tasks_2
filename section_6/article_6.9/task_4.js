/*Пример кода:

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
P.S. Аргументы и контекст this, переданные в f1000, должны быть переданы в оригинальную f.*/

function throttle(func, ms) {

    function wrapper(...args) {
        if (Date.now() - wrapper.lastCall > ms) {
            func.call(this, ...args);
            wrapper.lastCall = Date.now()
        } else {
            clearTimeout(wrapper.timeId);
            wrapper.lastTryCall = Date.now();
            let time = ms - (wrapper.lastTryCall - wrapper.lastCall);
            wrapper.timeId = setTimeout(func.bind(this), time, ...args);
        }
    }
    wrapper.timeId = null;
    wrapper.lastCall = new Date(0);
    wrapper.lastTryCall = new Date(0);
    return wrapper;
}

function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
// ...выводим 3, промежуточное значение 2 было проигнорировано