/*Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}*/

function spy(func) {
     function wrapper (...args) {
        wrapper.calls.push([...args]);
        result = func.call(this, ...args);
        return result;
    }

    wrapper.calls = [];

    return wrapper;
}

let myFunc = spy(console.log)

myFunc(1, 2)
myFunc(1, 2, 4, 5)
console.log(myFunc.calls[1])