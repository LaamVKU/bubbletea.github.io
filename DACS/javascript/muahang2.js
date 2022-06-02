const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        alert("Bạn cần đăng nhập để mua hàng!")
        return
    }})
})

const cartshow = document.querySelector(".fa-cart-shopping")
const cartsho = document.querySelector(".ss2")
cartshow.addEventListener("click",function(){
    alert("Bạn cần đăng nhập để mua hàng!")
    return
})
cartsho.addEventListener("click",function(){
    alert("Bạn cần đăng nhập để mua hàng!")
    return
})
