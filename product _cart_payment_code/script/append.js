
let create=(el)=>{
    return document.createElement(el)
}

let append = (data,container)=>{
  container.innerText=null;
  data.map(({image_url:url,name,price,oldprice,rating,details})=>{
      let div = create("div")
      let div1 = create("div")
      let image = create("img")
      image.src =url;

      let title = create("h3")
      title.innerText=name;

      let p = create("h2")
      p.innerText=`₹${price}`  ;
      p.style.display="inline-block"
      let oldp = create("p")
      oldp.setAttribute("class","op")
      oldp.innerText=`₹${oldprice}`;

      let r = create("h4")
      r.setAttribute("class","rating")
      r.innerText= `${rating}*`;
      if(rating<3.5){
          r.style.backgroundColor="sandybrown"
      }else{
        r.style.backgroundColor="mediumseagreen"
      }
      let deli = create("p")
      deli.innerText="Free Delivery"
       div1.append(title,p,oldp,deli,r)
      div.append(image,div1)
      div.style.cursor="pointer"
      let data1={
        url,
        name,
        price,
        oldprice,
        rating,
        details
      }
      div.addEventListener("click",()=>{
          window.location.href="productDetails.html"
        localStorage.setItem("productDetails",JSON.stringify(data1))
      })

      container.append(div)
  })
  
}
let append1 = (data,container)=>{
  container.innerText=null;
  data.map(({image_url:url,name,price,oldprice,rating,details})=>{
      let div = create("div")
      let div1 = create("div")
      let image = create("img")
      image.src =url;

      let title = create("h3")
      title.innerText=name;

      let p = create("h2")
      p.innerText=`₹${price}`  ;
      p.style.display="inline-block"
      let oldp = create("p")
      oldp.setAttribute("class","op")
      oldp.innerText=`₹${oldprice}`;

      let r = create("h4")
      r.setAttribute("class","rating")
      r.innerText= `${rating}*`;
      if(rating<3.5){
          r.style.backgroundColor="sandybrown"
      }else{
        r.style.backgroundColor="mediumseagreen"
      }
      let deli = create("p")
      deli.innerText="Free Delivery"
       div1.append(title,p,oldp,deli,r)
      div.append(image,div1)
      div.style.cursor="pointer"
      let data1={
        url,
        name,
        price,
        oldprice,
        rating,
        details
      }
      div.addEventListener("click",()=>{
          window.location.href="jewelleryDetails.html"
        localStorage.setItem("productDetails",JSON.stringify(data1))
      })

      container.append(div)
  })
  
}


let cartItem = JSON.parse(localStorage.getItem("cartItem"))||{};
let appendDetails=(data,container)=>{
  container.innerText=""
let {url,name,price,oldprice,rating,details:{Name,Fabric,Pattern}} = data;
let small_div = create("div");
small_div.setAttribute("class","small_div")
let img = create("img");
img.src = url
small_div.append(img)
let imgdiv = create("div");
imgdiv.setAttribute("class","imgdiv")
let div1= create("div")
div1.setAttribute("class","div1")
let image = create("img");
image.src = url;
div1.append(image)
let btn = create("button");
btn.innerText="Add To Cart"
btn.setAttribute("id","btn")

btn.addEventListener("click",()=>{
  cartItem = JSON.parse(localStorage.getItem("cartItem"))||{};
  if((Object.keys(cartItem).length)>1){
    console.log(Object.keys(cartItem).length)
    alert("No product of same/different seller so,product has been replaced ")
    localStorage.setItem("cartItem",JSON.stringify(data));
   
  }else{
    alert("product added to cart")
    localStorage.setItem("cartItem",JSON.stringify(data));
   
  }
  
  
})
imgdiv.append(div1,btn);

let bigdiv = create("div")
bigdiv.setAttribute("class","bigdiv")
let details_div = create("div")
details_div.setAttribute("class","details_div")
let title = create("h3")
title.innerText=name;

let p = create("h2")
p.innerText=`₹${price}`  ;
let oldp = create("p")
p.style.display="inline-block"

oldp.setAttribute("class","op")
oldp.innerText=`₹${oldprice}`;
oldp.style.display="inline-block"

let r = create("h4")
      r.setAttribute("class","rating")
      r.innerText= `${rating}*`;
      if(rating<3.5){
          r.style.backgroundColor="sandybrown"
      }else{
        r.style.backgroundColor="mediumseagreen"
      }

      let deli = create("p")
      deli.innerText="Free Delivery";
 details_div.append(title,p,oldp,r,deli)

let size_div = create("div");
size_div.setAttribute("class","size_div");
let size = create("h3")
size.innerText="Select Size"
let sizebtn = create("button")
sizebtn.setAttribute("id","sizebtn")
sizebtn.innerText="Free Size"
size_div.append(size,sizebtn)

let prodetails_div = create("div")
prodetails_div.setAttribute("class","prodetails_div")
let pro = create("h3")
pro.innerText="Product Details"
let n = create("p");
n.innerText=`Name: ${Name}`;

let f= create("p")
f.innerText=`Fabric: ${Fabric}`

let pat = create("p")
pat.innerText=`Pattern: ${Pattern}`
let origin = create("p");
origin.innerText="Country of Origin: India"
let info = create("p");
info.innerText="More Information"

prodetails_div.append(pro,n,f,pat,origin,info)

bigdiv.append(details_div,size_div,prodetails_div)
container.append(small_div,imgdiv,bigdiv)

}

let appendJewellery=(data,container)=>{
  container.innerText=""
let {url,name,price,oldprice,rating,details:{Name,Fabric,Pattern}} = data;
let small_div = create("div");
small_div.setAttribute("class","small_div")
let img = create("img");
img.src = url
small_div.append(img)
let imgdiv = create("div");
imgdiv.setAttribute("class","imgdiv")
let div1= create("div")
div1.setAttribute("class","div1")
let image = create("img");
image.src = url;
div1.append(image)
let btn = create("button");
// let i = create("i");
// i.setAttribute("class","fa-light fa-cart-shopping icon")
// // <i class="fa-light fa-cart-shopping"></i>
// btn.innerHTML=i
btn.innerText="Add To Cart"
btn.setAttribute("id","btn")
btn.addEventListener("click",()=>{
  cartItem = JSON.parse(localStorage.getItem("cartItem"))||{};
  if(Object.keys(cartItem).length>0){
  
    alert("No product of same/different seller so,product has been replaced ")
    localStorage.setItem("cartItem",JSON.stringify(data));
   
  }else{
    localStorage.setItem("cartItem",JSON.stringify(data));
    alert("product has add to cart");
  }
})
imgdiv.append(div1,btn);

let bigdiv = create("div")
bigdiv.setAttribute("class","bigdiv")
let details_div = create("div")
details_div.setAttribute("class","details_div")
let title = create("h3")
title.innerText=name;

let p = create("h2")
p.innerText=`₹${price}`  ;
let oldp = create("p")
p.style.display="inline-block"

oldp.setAttribute("class","op")
oldp.innerText=`₹${oldprice}`;
oldp.style.display="inline-block"

let r = create("h4")
      r.setAttribute("class","rating")
      r.innerText= `${rating}*`;
      if(rating<3.5){
          r.style.backgroundColor="sandybrown"
      }else{
        r.style.backgroundColor="mediumseagreen"
      }

      let deli = create("p")
      deli.innerText="Free Delivery";
 details_div.append(title,p,oldp,r,deli)

let size_div = create("div");
size_div.setAttribute("class","size_div");
let size = create("h3")
size.innerText="Select Size"
let sizebtn = create("button")
sizebtn.setAttribute("id","sizebtn")
sizebtn.innerText="Free Size"
size_div.append(size,sizebtn)

let prodetails_div = create("div")
prodetails_div.setAttribute("class","prodetails_div")
let pro = create("h3")
pro.innerText="Product Details"
let n = create("p");
n.innerText=`Name: ${Name}`;

let f= create("p")
f.innerText=`Material: ${Fabric}`

let pat = create("p")
pat.innerText=`Type: ${Pattern}`
let origin = create("p");
origin.innerText="Country of Origin: India"
let info = create("p");
info.innerText="More Information"

prodetails_div.append(pro,n,f,pat,origin,info)

bigdiv.append(details_div,size_div,prodetails_div)
container.append(small_div,imgdiv,bigdiv)

}
export  {append,appendDetails,appendJewellery,append1}
