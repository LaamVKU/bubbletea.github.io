const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("a").innerText
        var productPrice = product.querySelector("p").innerText
        // console.log(productImg,productName,productPrice)
        addcart(productPrice,productImg,productName)
    }})
})
function addcart(productPrice,productImg,productName) {
   var addtr = document.createElement("tr")
   var cartItem = document.querySelectorAll("tbody tr")
   for(var i=0; i<cartItem.length;i++){
           var productT = document.querySelectorAll(".title")
           if(productT[i].innerHTML == productName){
                       alert("Sản phẩm đã tồn tại trong giỏ hàng!")
                       return
                   }
       }
   var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width:70px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="d">'+productPrice+'</span></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
   addtr.innerHTML = trcontent 
   var cartTable = document.querySelector("Tbody")
   cartTable.append(addtr)
    carttotal()
   deleteCart()
}
//-------deletecart--------
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemX = cartDelete.parentElement.parentElement
            cartItemX.remove()
            carttotal ()
        })
    }
}
//-------totalprice--------
function carttotal () {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    var totalA
    for(var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".d").innerHTML
        // console.log(productPrice)
       totalA = parseInt(inputValue) * parseInt(productPrice) *1000
        totalC = totalC + totalA
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange ()
}
function inputchange () {
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0; i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input")
      inputValue.addEventListener("change",function(){
        carttotal ()
      })
  }
}
const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
const cartsho = document.querySelector(".ss2")

cartshow.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "0"
})
cartsho.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
    
  })
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "-100%"
})
