function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

// Higher Order Function
function calculate(num1, num2, operator){
    let result = operator(num1, num2);
    return result;
}

console.log(calculate(5, 3, subtract));