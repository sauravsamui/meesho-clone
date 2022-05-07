let menProduct = JSON.parse(localStorage.getItem("menProduct"))||[]

 menProduct = [

    {
        image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
    name: "HRX Men Cotton Pure Cotton",
    price: 549,
    oldprice: 1799,
    rating:3.9,
    details:{Name : "HRX Men Cotton Pure Cotton",
    Fabric : "Cotton Blend", Pattern : "Solid"}
  },
  {
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16590968/2021/12/23/ef2521a7-c238-4cda-9d34-6ca7936aeac11640243292593RegularFitRound-neckT-shirt1.jpg",
    name: "Roadster Men Cotton Pure Cotton",
    price: 459,
    oldprice: 1235,
    rating:4.1,
    details:{Name : "HRX Men Cotton Pure Cotton",
    Fabric : "Cotton Blend", Pattern : "Solid"}
  },
  {
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
    name: "Roadster Men Cotton T-shirt",
    price: 699,
    oldprice: 1245,
    rating:3.8,
    details:{Name : "HRX Men Cotton Pure Cotton",
    Fabric : "Cotton", Pattern : "Solid"}
  },
  {
    image_url: "https://images.meesho.com/images/products/12227762/874ff_512.jpg",
    name: "Highlander Men Cotton Shirt",
    price: 249,
    oldprice: 749,
    rating:3.4,
    details:{Name : "Highlander Men Cotton Shirt",
    Fabric : "Cotton", Pattern : "Solid"}
  },
  {
    image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16430352/2022/1/19/dd8e1cd9-3d30-4793-afeb-2fb83a066c541642586795859-U-S-Polo-Assn-Men-Teal-Brand-Logo-Printed-Polo-Collar-Pure-C-6.jpg",
    name: "Highlander Men Cotton Shirt",
    tags:"Men Cotton Pure Cotton",
    price: 249,
    oldprice: 749,
    rating:3.9,
    details:{Name : "Highlander Men Cotton Shirt",
    Fabric : "Cotton", Pattern : "Solid"}
  },
 
  {
    image_url:"https://images.meesho.com/images/products/41012942/8unf3_512.jpg",
    name:"Pretty Elegant Men Tshirts",
    price:225,
    oldprice:264,
    rating:4.3,
   details:{Name : "Pretty Elegant Men Tshirts",
                   Fabric : "Cotton Blend", Pattern : "Self-Design"}
},
{
  image_url:"https://images.meesho.com/images/products/30757385/760b4_512.jpg",
  name:"Modern Men Active Tshirts",
  price:771,
  oldprice:761,
  rating:4.3,
 details:{Name : "Modern Men Active Tshirts",
                 Fabric : "Polyester", Pattern : "Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/347523/1_512.jpg",
  name:"Smart Cotton Men Shirt",
  price:376,
  oldprice:426,
  rating:3.4,
 details:{Name : "Smart Cotton Men Shirt",
                 Fabric : "Cotton ", Pattern : "Self-Design"}
},
{
  image_url:"https://images.meesho.com/images/products/41012942/8unf3_512.jpg",
  name:"Classy Ravishing Men Tshirts",
  price:225,
  oldprice:264,
  rating:2.5,
 details:{Name : "Classy Ravishing Men Tshirts",
                 Fabric : "Polycotton", Pattern : "Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/23990925/865c7_512.jpg",
  name:" MEN'S TOP & BOTTOM SET",
  price:805,
  oldprice:855,
  rating:3.7,
 details:{Name : " MEN'S TOP & BOTTOM SET",
                 Fabric : "Cotton Blend", Pattern : "Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/42958845/fwpya_512.jpg",
  name:"Comfy Partywear Men Tshirts",
  price:225,
  oldprice:264,
  rating:4.3,
 details:{Name : "Comfy Partywear Men Tshirts",
                 Fabric : "Cotton Blend", Pattern : " Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/23091646/05f44_512.jpg",
  name:"HALF SLEEV TSHIRT FOR MEN",
  price:443,
  oldprice:503,
  rating:3.5,
 details:{Name : "HALF SLEEV TSHIRT FOR MEN",
                 Fabric : "Cotton", Pattern : " Colorblocked"}
},
{
  image_url:"https://images.meesho.com/images/products/13408535/7db04_512.jpg",
  name:"Men Double Pocket Shirt",
  price:443,
  oldprice:493,
  rating:3.7,
 details:{Name : "Men Double Pocket Shirt",
                 Fabric : "Cotton", Pattern : "Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/77243094/mvi05_512.jpg",
  name:"FANCY Ethnic Jackets",
  price:481,
  oldprice:531,
  rating:"4.0",
 details:{Name : "FANCY Ethnic Jackets",
                 Fabric : " Polycotton", Pattern : "Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/41939063/umn5m_512.jpg",
  name:"Mens Ethnic Jackets",
  price:587,
  oldprice:637,
  rating:4.1,
 details:{Name : "Mens Ethnic Jackets",
                 Fabric : "Polycotton", Pattern : "Checked"}
},
{
  image_url:"https://images.meesho.com/images/products/20204193/49c30_512.jpg",
  name:"Woven Jacquard Nehru Jacket",
  price:598,
  oldprice:640,
  rating:"4.0",
 details:{Name : "Woven Jacquard Nehru Jacket",
                 Fabric : "Silk Blend", Pattern : "Self-Design"}
},
{
  image_url:"https://images.meesho.com/images/products/31808852/a2faf_512.jpg",
  name:"Urbane Men Ethnic Jackets",
  price:440,
  oldprice:490,
  rating:3.7,
 details:{Name : "Urbane Men Ethnic Jackets",
                 Fabric : " Art Silk", Pattern : " Printed"}
},

{
  image_url:"https://images.meesho.com/images/products/4997069/1_512.jpg",
  name:"Stylish Men's Tshirts",
  price:217,
  oldprice:264,
  rating:3.3,
 details:{Name : "Stylish Men's Tshirts",
                 Fabric : "Cotton ", Pattern : "Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/47770631/j6vfm_512.jpg",
  name:"Mens Cotton Printed Tshirt",
  price:225,
  oldprice:264,
  rating:4.3,
 details:{Name : "Pretty Elegant Men Tshirts",
                 Fabric : "Cotton Blend", Pattern : "Self-Design"}
},
{
  image_url:"https://images.meesho.com/images/products/57166641/492p6_512.jpg",
  name:" White Printed t shirt ",
  price:215,
  oldprice:244,
  rating:3.7,
 details:{Name : " White Printed t shirt ",
                 Fabric : " Polycotton", Pattern : "Printed"}
},
{
  image_url:"https://images.meesho.com/images/products/65296306/ynmgl_512.jpg",
  name:" Full Sleeves gym tshirt",
  price:425,
  oldprice:475,
  rating:3.8,
 details:{Name : " Full Sleeves gym tshirt",
                 Fabric : "Cotton", Pattern : "Colorblocked"}
},
{
  image_url:"https://images.meesho.com/images/products/50961015/l4isa_512.jpg",
  name:" Fashionable Men Tshirts",
  price:214,
  oldprice:251,
  rating:3.7,
 details:{Name : " Fashionable Men Tshirts",
                 Fabric : "Cotton Blend", Pattern : "Printed"}
},
{
  image_url:"https://images.meesho.com/images/products/59966941/xtlaz_512.jpg",
  name:"Full Sleeeves T shirt",
  price:215,
  oldprice:254,
  rating:3.6,
 details:{Name : "Full Sleeeves T shirt for man",
                 Fabric : "Cotton", Pattern : "Printed"}
},
{
  image_url:"https://images.meesho.com/images/products/1705139/1_512.jpg",
  name:"Stylish Cotton T-Shirt",
  price:225,
  oldprice:264,
  rating:3.8,
 details:{Name : "Pretty Elegant Men Tshirts",
                 Fabric : "Cotton", Pattern : "Printed"}
},
{
  image_url:"https://images.meesho.com/images/products/99333653/4npaw_512.jpg",
  name:"kurta for mens",
  price:442,
  oldprice:462,
  rating:4.2,
 details:{Name : "kurta for mens",
                 Fabric : "Cotton", Pattern : "Self-Design"}
},

{
  image_url:"https://images.meesho.com/images/products/57575192/ufvpt_512.jpg",
  name:"Maleno Men Trousers",
  price:386,
  oldprice:436,
  rating:3.8,
 details:{Name : "Maleno Men Trousers",
                 Fabric : "Polycotton", Pattern : "Checked"}
},
{
  image_url:"https://images.meesho.com/images/products/26421464/86e96_512.jpg",
  name:"Stylish Trendy Men Trousers",
  price:508,
  oldprice:550,
  rating:3.4,
 details:{Name : "Stylish Trendy Men Trousers",
                 Fabric : "Cotton", Pattern : "Solid"}
},
{
  image_url:"https://images.meesho.com/images/products/8034586/cf3a4_512.jpg",
  name:"Shiv Trishul Damaru Rudraksha ",
  price:127,
  oldprice:149,
  rating:4.3,
 details:{Name : "Shiv Trishul Damaru Rudraksha Mala",
                 Fabric : "No", Pattern : "No"}
},
{
  image_url:"https://images.meesho.com/images/products/76847548/4ubej_512.jpg",
  name:"vanse Canvas Shose",
  price:327,
  oldprice:377,
  rating:4.1,
 details:{Name : "vanse Canvas Shose",
                 Fabric : "Canvas", Pattern : "No"}
},
{
  image_url:"https://images.meesho.com/images/products/67383334/cayu8_512.jpg",
  name:"Casual shoes",
  price:443,
  oldprice:493,
  rating:3.9,
 details:{Name : "Casual shoes",
                 Fabric : "Syntethic Leather", Pattern : "No"}
},
{
  image_url:"https://images.meesho.com/images/products/101751657/88guk_512.jpg",
  name:" Stylish Long Running shoes",
  price:417,
  oldprice:464,
  rating:4.3,
 details:{Name : "Stylish Long Running shoes",
                 Fabric : "Syntethic Leather", Pattern : "No"}
},
{
  image_url:"https://images.meesho.com/images/products/11804754/b4028_512.jpg",
  name:" CASUAL SHOES FOR MEN",
  price:456,
  oldprice:506,
  rating:3.7,
 details:{Name : " CASUAL SHOES FOR MEN",
                 Fabric : "Syntethic Leather", Pattern : "No"}
},



]
console.log(menProduct.length)
localStorage.setItem("menProduct",JSON.stringify(menProduct))

import {append} from "./append.js"

let container = document.getElementById("container")

append(menProduct,container)

import button from "./button.js"

let btn = document.getElementById("button")
btn.innerHTML= button()