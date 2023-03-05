/*Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.*/

function sum(value) {
    let result = value;

  function _sum(b) {
    result += b;
    return _sum;
  }

  _sum[Symbol.toPrimitive] = function (hint) {
    if(hint == "default") {
        return result;
    }
  }

  return _sum;
}