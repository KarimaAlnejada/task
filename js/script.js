
var allProducts = document.querySelectorAll(".products li")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#btn1")
var div2 = document.querySelector("#div2")
var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +(item.getAttribute("price"))
        div1.innerHTML += item.textContent + "__ "

        if (div1.innerHTML != "") {
            btn1.style.display = "block"
            div1.style.display= "block"
        }
    }
})

btn1.onclick = function () {
    div2.style.display="block"
    div2.innerHTML = totalPrice
   
}




