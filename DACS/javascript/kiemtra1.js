// JavaScript Document
function validateForm() {
//Họ phải được điền
    var ho = document.forms["form"]["fname"].value;
    if (ho == "") {
        alert("Họ không được để trống");
        return false;
    }
    var email=document.forms["form"]["email"].value;
    var aCong=email.indexOf("@");
    var dauCham = email.lastIndexOf(".");
    if (email == "") {
        alert("Email không được để trống");
        return false;
    }
    else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
        alert("Email bạn điền không chính xác");
        return false;
    }
    //Nhập số điện thoại
    var dienThoai = document.forms["form"]["dienThoai"].value;
    var kiemTraDT = isNaN(dienThoai);
    if (dienThoai == "") {
        alert("Điện thoại không được để trống");
        return false;
    }
    if (kiemTraDT == true) {
        alert("Điện thoại phải để ở định dạng số");
        return false;
    }

    var p1 = document.getElementById("pwd").value;
    if(p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    if(p2 == "") {
        alert("Vui lòng xác minh mật khẩu!");
        return false;
    }
}
