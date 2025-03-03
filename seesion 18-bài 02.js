let math = +prompt ("nhập điểm môn toán");
let literature = +prompt ("nhập điểm môn văn");
let eng = +prompt ("nhập điểm môn tiếng anh");
let enter = (math+literature+eng)/3;
if (enter>=8.0){
    document.write(`học sinh giỏi`);
}else if(enter>=6.5) {
    document.write(`học sinh khá`);
}else if(enter>=5.0) {
    document.write(`học sinh trung bình`);
}else{
    document.write(`học sinh yếu`);
}