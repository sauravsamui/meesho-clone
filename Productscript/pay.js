let cartItem = JSON.parse(localStorage.getItem("cartItem"))
let total_price = localStorage.getItem("total_amount")


let total_amount =  document.getElementById("total_amount")
 let p = Number(total_price)
 total_amount.innerText=`₹${p}`
 document.getElementById("item_price").innerText=`₹${cartItem.price}`
 document.getElementById("span").style.display="none"

let unhideFunc =()=>{
    let x = document.getElementById("span");
  if (x.style.display == "none") {
    x.style.display = "block";
   
  }
    let yes = document.getElementById("yes")
    yes.style.color="deeppink"
    yes.style.backgroundColor="lavenderblush"
    yes.style.border ="1px solid deeppink"
    let n= document.getElementById("no")
    n.style.color="black"
    n.style.backgroundColor="whitesmoke"
    n.style.border ="1px solid black"
    
    
}
let showFunc =()=>{
    let x = document.getElementById("span");
  if (x.style.display == "block") {
    x.style.display = "none";
   
  }
  let n= document.getElementById("no")
    n.style.color="deeppink"
    n.style.backgroundColor="lavenderblush"
    n.style.border ="1px solid deeppink"
   
    let yes = document.getElementById("yes")
    yes.style.color="black"
    yes.style.backgroundColor="whitesmoke"
    yes.style.border ="1px solid black"
    
    
}

let marginFunc =()=>{
  let input = document.getElementById("input").value;
  let margin = document.getElementById("margin");

  if(input=="" ||input== 0){
    margin.style.color="mediumseagreen";
    margin.innerText= `Margin : ₹0`
  }else{
    margin.innerText= `Margin : ₹${Number(input)-total_price}`
    margin.style.color="red"
  }
}
let payButton = ()=>{
  let input = document.getElementById("input").value;
  if(input>0){
    document.getElementById("nomargin").innerText=`Enter an amount greater than or equal to ₹${total_price} and less than or equal to ₹ 2598`
    document.getElementById("nomargin").style.color="red"
    return
  }
  else{
    window.location.href="summary.html"
  }
}




document.getElementById("continue").addEventListener("click",payButton)
document.getElementById("input").addEventListener("input",marginFunc)


 document.getElementById("yes").addEventListener("click",unhideFunc)
 document.getElementById("no").addEventListener("click",showFunc)