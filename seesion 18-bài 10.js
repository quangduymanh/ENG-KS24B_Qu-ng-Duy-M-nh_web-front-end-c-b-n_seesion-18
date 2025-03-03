let n = +prompt("Nhập một số từ 0 - 999:");
if (n < 0 || n > 999) {
    document.write("Số không hợp lệ! Hãy nhập từ 0 - 999.");
} else {
    let donVi = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    let chuc = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    let tram = ["", "một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];
    let hundred = Math.floor(n / 100);
    let ten = Math.floor((n % 100) / 10);
    let unit = n % 10;
    let words = "";
    if (n === 0) {
        words = "Không";
    } else if (n < 10) {
        words = donVi[n];
    } else if (n < 100) {
        if (ten === 1) {
            words = "mười";
            if (unit === 5) {
                words += " lăm";
            } else if (unit !== 0) {
                words += " " + donVi[unit];
            }
        } else {
            words = chuc[ten];
            if (unit === 5) {
                words += " lăm";
            } else if (unit !== 0) {
                words += " " + donVi[unit];
            }
        }
    } else {
        words = tram[hundred];

        if (ten === 0 && unit !== 0) {
            words += " lẻ " + donVi[unit];
        } else if (ten === 1) {
            words += " mười";
            if (unit === 5) {
                words += " lăm";
            } else if (unit !== 0) {
                words += " " + donVi[unit];
            }
        } else {
            words += ten !== 0 ? " " + chuc[ten] : "";
            if (unit === 5 && ten !== 0) {
                words += " lăm";
            } else if (unit !== 0) {
                words += " " + donVi[unit];
            }
        }
    }
    document.write(`<b>${n}:</b> ${words.charAt(0).toUpperCase() + words.slice(1)}`);
}
