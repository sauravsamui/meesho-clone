let cartItem = JSON.parse(localStorage.getItem("cartItem"))
let total_price = localStorage.getItem("total_amount")


let total_amount =  document.getElementById("total_amount")
 let p = Number(total_price)
 total_amount.innerText=`₹${p}`
 document.getElementById("item_price").innerText=`₹${cartItem.price}`


let add = JSON.parse(localStorage.getItem("address"))||{}
if(Object.keys(add).length>1){
    let form = document.querySelector("form")
       form.name.value= add.name
       form.phone.value=add.mob
       form.house.value = add.house
       form.area.value= add.area
       form.pincode.value= add.pincode
       form.city.value=add.city
       form.state.value=add.state
       form.nearby.value=add.nearby
   }



let submitAddress =()=>{
    event.preventDefault();
    let form = document.querySelector("form")
     add = {
        name:form.name.value,
        mob:form.phone.value,
        house:form.house.value,
        area:form.area.value,
        pincode:form.pincode.value,
        city:form.city.value,
        state:form.state.value,
        nearby:form.nearby.value
    }
    for(let key in add){
        if(add[key]==""){
            alert("please enter valid address fill")
            return
        }
    }
   localStorage.setItem("address",JSON.stringify(add))
   window.location.href="pay.html"
   
}





 document.querySelector("form").addEventListener("submit",submitAddress)
