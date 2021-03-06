const signUp = e => {
    let fname = document.getElementById('fname').value,
        dienthoai = document.getElementById('dienthoai').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.dienthoai.toLowerCase() == dienthoai.toLowerCase()
        );
    if(!exist){
        formData.push({ fname, dienthoai, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Tài Khoản Đã Tạo Thành Công!!! \n\n Vui Lòng Đăng Nhập Để Sử Dụng.");
    }
    else{
        alert("Ooopppssss... Tài Khoản Này Đã Được Đăng Kí!!!\n\n Vui Lòng Đăng Nhập Để Sử Dụng.");
    }
    e.preventDefault();
}
function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Thông Tin Đăng Nhập Không Chính Xác!!!");
    }
    else{
        location.href = "index2.html";
    }
    e.preventDefault();
}