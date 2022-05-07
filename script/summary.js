let cartItem = JSON.parse(localStorage.getItem("cartItem"))
let total_price = localStorage.getItem("total_amount")


let total_amount =  document.getElementById("total_amount")
 let p = Number(total_price)
 total_amount.innerText=`₹${p}`
 document.getElementById("item_price").innerText=`₹${cartItem.price}`

 let inputqnt = localStorage.getItem("quant") || 1
 let item = document.getElementById("item_details")
 function displayData() {

     item.innerText = null;
     let image = document.createElement("img")
     image.setAttribute("id", "img")
     image.src = cartItem.url;

     let div1 = document.createElement("div")
     div1.setAttribute("class", "item_name")
     let n = document.createElement("h4");
     n.innerText = cartItem.name;
     let bttn = document.createElement("button")
     bttn.setAttribute("class", "open-btn")
     bttn.innerText = "Edit"
     let s = document.createElement("h4");
     s.innerText = "Size : Free"
     let q = document.createElement("h4")
     q.setAttribute("id", "qty");
     q.innerText = `Qty : ${inputqnt}`

     let p = document.createElement("h4");
     p.innerText = `₹${cartItem.price}`
     p.setAttribute("id","p")
     div1.append(n, bttn, s, q, p)

     item.append(image, div1)

 }
 displayData()
let address =JSON.parse(localStorage.getItem("address"))||{}

let {name,mob,house,area,pincode,city,state,nearby} = address;

let receiver_name = document.getElementById("receiver_name")
let area_local = document.getElementById("area_local");
let state_pin = document.getElementById("state_pin");
let mob1 = document.getElementById("mob");

receiver_name.innerText= name;
area_local.innerText=`${house}, ${area}, ${city}, ${nearby},`;
state_pin.innerText = `${state} - ${pincode}`;
mob1.innerText=`+91 ${mob}`

let orderPlace = ()=>{
    alert("Congratulation! Order Placed")
    window.location.href="landingpageproduct.html"
    cartItem={};
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
}



document.getElementById("continue").addEventListener("click",orderPlace)