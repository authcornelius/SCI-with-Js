

let firstNum = Number(prompt("Enter First Number"));
let operatorType = (prompt("Select Operator  (+, -, *, / )"));
let secondNum = Number(prompt("Enter Second Number"));



if (operatorType == "+") {
    answer = firstNum +  secondNum
    alert(answer)
}else if (operatorType == "-") {
    answer = firstNum -  secondNum
    alert(answer)
}else if (operatorType == "/") {
    answer = firstNum /  secondNum
    alert(answer)
}else if (operatorType == "*") {
    answer = firstNum *  secondNum
    alert(answer)
}else if(operatorType != "+" ||operatorType != "-" ||operatorType != "/" ||operatorType != "*"){
    answer = "Error in the operator"
    alert(answer)
}