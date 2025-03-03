let time24 = prompt("Nhập thời gian theo định dạng 24h (hh:mm:ss):");
if (/^([01]?\d|2[0-3]):[0-5]?\d:[0-5]?\d$/.test(time24)) {
    let [hour, minute, second] = time24.split(":").map(Number);

    let period = (hour >= 12) ? "PM" : "AM";
    let hour12 = (hour % 12 === 0) ? 12 : hour % 12;

    let time12 = `${hour12}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")} ${period}`;
    
    document.write(`Thời gian định dạng 12 giờ: ${time12}`);
} else {
    document.write("Định dạng không hợp lệ! Hãy nhập đúng dạng hh:mm:ss.");
}