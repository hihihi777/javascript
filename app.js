const calculator = {
    plus : function (a, b) {
        return a + b;
    },
    min : function (a, b) {
        return a - b ;
    },
    div : function (a, b) {
        return a / b;
    },
    squ : function (a, b) {
        return a ** b;
    },
    mul : function (a, b) {
        return a * b;
    },
};
const plusResult = calculator.plus(2, 3);
const minResult = calculator.min(plusResult, 10);
const divResult = calculator.div(10, minResult);
const squResult = calculator.squ(divResult, plusResult);
const mulResult = calculator.mul(divResult, minResult);