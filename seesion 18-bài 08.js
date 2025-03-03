let a = +prompt("Nhập cạnh a:");
let b = +prompt("Nhập cạnh b:");
let c = +prompt("Nhập cạnh c:");

if (a + b > c && a + c > b && b + c > a) {
    let type = (a === b && b === c) ? 1 :
               (a === b || a === c || b === c) ? 2 :
               (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) ? 3 :
               4;
    switch (type) {
        case 1:
            document.write("Tam giác đều");
            break;
        case 2:
            document.write("Tam giác cân");
            break;
        case 3:
            document.write("Tam giác vuông");
            break;
        default:
            document.write("Tam giác thường");
    }
} else {
    document.write("Ba cạnh không tạo thành tam giác hợp lệ");
}