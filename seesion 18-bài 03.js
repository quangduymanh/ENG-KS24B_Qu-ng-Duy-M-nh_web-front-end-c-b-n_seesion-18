let name = prompt ("nhập tên người dùng");
if (name ==="Admin"){
    let pass = prompt ("nhap mat khau");
    if (pass === "The Master"){
        document.write("Welcome");
    }
    else if (pass === ("null")){
        document.write("Cancelled");
    }
    else {
        document.write("Wrong password");
    }
}
else if (name === ("null")){
    document.write("Cancelled");
}
else {
    document.write("“I Don’t know you”");
}