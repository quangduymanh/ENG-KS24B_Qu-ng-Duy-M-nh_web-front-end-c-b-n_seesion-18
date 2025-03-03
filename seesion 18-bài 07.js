let a = +prompt("Nhập số thứ nhất:");
let b = +prompt("Nhập số thứ hai:");
let operator = prompt("Nhập phép toán (+, -, *, /):");
let enter;
if (operator === "+") {
    enter = a + b;
} else if (operator === "-") {
    enter = a - b;
} else if (operator === "*") {
    enter = a * b;
} else if (operator === "/") {
   enter = a / b;
} else {
    alert("Phép toán không hợp lệ!");
    enter = "Không hợp lệ";
}
alert(`Kết quả: ${a} ${operator} ${b} = ${enter}`);