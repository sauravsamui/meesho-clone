
let products = JSON.parse(localStorage.getItem("products"))|| []

products =[
{
    image_url:"https://images.meesho.com/images/products/21164025/d5111_512.jpg",
    name:"Women Sports Bottoms wear",
    price:224,
    oldprice:263,
    rating:3.9,
   details:{Name : "Unique Women Sports & Activewear Bottoms",
                   Fabric : "Polycotton", Pattern : "Colorblocked"}
},
{
    image_url:"https://images.meesho.com/images/products/2981112/1_512.jpg",
    name:"Elite Cotton Men's Socks Combo",
    price:268,
    oldprice:315,
    rating:4.1,
   details:{Name : "Elite Cotton Men's Socks Combo( Pack Of 10 )",
                   Fabric : "Cotton", Pattern : " Argyle"}
},
{
    image_url:"https://images.meesho.com/images/products/36154124/grzd5_512.jpg",
    name:"Women Multicolor Track Pants",
    price:239,
    oldprice:281,
    rating:3.8,
   details:{Name : "Women Self-Design Multicolor Track Pants",
                   Fabric : "Polycotton", Pattern : "Colorblocked"}
},
{
    image_url:"https://images.meesho.com/images/products/99605579/i7xi9_512.jpg",
    name:"Women Bra Non Padded Bra",
    price:164,
    oldprice:192,
    rating:4.2,
   details:{Name : "Women Bra Full COVRAGE Non Padded Bra",
                   Fabric : " Cotton Blendn", Pattern : "Solid"}
},
{
    image_url:"https://images.meesho.com/images/products/20813908/efe05_512.jpg",
    name:"Optify® 3 Pair Grey, Blue",
    price:284,
    oldprice:334,
    rating:4.1,
   details:{Name : "Optify® 3 Pair Grey, Blue, Light Blue 0 Power Monthly",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/436925/1_512.jpg",
    name:"Stylish Men's Watch",
    price:233,
    oldprice:274,
    rating:3.7,
   details:{Name : "Optify® 3 Pair Grey, Blue, Light Blue 0 Power Monthly",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/89592871/gie4z_512.jpg",
    name:"Lycra Cotton Readymade Blouse",
    price:225,
    oldprice:264,
    rating:4.3,
   details:{Name : "Lycra Cotton Readymade Blouse",
                   Fabric : "Cotton Blend", Pattern : "Self-Design"}
},{
    image_url:"https://images.meesho.com/images/products/96631184/j3gfi_512.jpg",
    name:"Rayon Emboridary Kurti Pant Set",
    price:268,
    oldprice:315,
    rating:4.3,
   details:{Name : "Rayon Emboridary Kurti Pant Set For Girls or Women Wear",
                   Fabric : "Rayon", Pattern : "Self Design"}
},
{
    image_url:"https://images.meesho.com/images/products/38854822/lxgkp_512.jpg",
    name:"Pretty Fashionista Men Tshirts",
    price:134,
    oldprice:157,
    rating:3.8,
   details:{Name : "Pretty Fashionista Men Tshirts",
                   Fabric : "Cotton Blend", Pattern : " Printed"}
},
{
    image_url:"https://images.meesho.com/images/products/53275834/ahgeh_512.jpg",
    name:"TRENS SKY SMILEY T SHIRT",
    price:179,
    oldprice:210,
    rating:3.7,
   details:{Name : "TRENS SKY SMILEY YELLOW T SHIRT",
                   Fabric : " Polyester", Pattern : " Printed"}
},
{
    image_url:"https://images.meesho.com/images/products/4983663/mcfg4_512.jpg",
    name:"Styles Metal Men Analog Watch",
    price:182,
    oldprice:213,
    rating:"4.0",
   details:{Name : "Styles Metal Men Analog Watch",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/24322642/b489a_512.jpg",
    name:"Makeup Brush",
    price:128,
    oldprice:150,
    rating:3.8,
   details:{Name : "Makeup Brush",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/39777817/ngvyk_512.jpg",
    name:"Flawsome Boy Top & Bottom Set",
    price:457,
    oldprice:507,
    rating:3.7,
   details:{Name : "Flawsome Elegant Boys Top & Bottom Sets",
                   Fabric : "Denim", Pattern : "Dyed/ Washed"}
},
{
    image_url:"https://images.meesho.com/images/products/58295118/t6kl1_512.jpg",
    name:"Round Nack Man T-Shirts",
    price:271,
    oldprice:318,
    rating:"4.0",
   details:{Name : "Round Nack Man T-Shirts",
                   Fabric : " Cotton", Pattern : "Printed"}
},{
    image_url:"https://images.meesho.com/images/products/97876329/25mab_512.jpg",
    name:"Square Dial Miller Watch Boys",
    price:179,
    oldprice:210,
    rating:3.9,
   details:{Name : "Square Dial Miller Watch Boys",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/7155749/e8707_512.jpg",
    name:"AroMine Pure Aloe Vera Gel",
    price:182,
    oldprice:213,
    rating:"4.0",
   details:{Name : "AroMine 99% Pure Green Aloe Vera Gel-(300 g)",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/4983663/mcfg4_512.jpg",
    name:"Styles Metal Men Analog Watch",
    price:182,
    oldprice:213,
    rating:"4.0",
   details:{Name : "Styles Metal Men Analog Watch",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/3105237/1_512.jpg",
    name:"Miss Rose Matte Look Lipstick",
    price:163,
    oldprice:191 ,
    rating:4.2,
   details:{Name : "Miss Rose Professional Matte Look Lipstick",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/92298682/g9w20_512.jpg",
    name:"Women's Jaipuri Embrodiery",
    price:433,
    oldprice:483,
    rating:"4.0",
   details:{Name : "Women's Royal Jaipuri Embrodiery Kaftan(Blue Colour)",
                   Fabric : "Rayon", Pattern : "Self Design"}
},
{
    image_url:"https://images.meesho.com/images/products/8451039/4e64b_512.jpg",
    name:"VELLICAL PRINTED SHIRT",
    price:288,
    oldprice:338,
    rating:3.9,
   details:{Name : "VELLICAL NEW PRINTED SHIRT",
                   Fabric : "Cotton", Pattern : "Printed"}
},
{
    image_url:"https://images.meesho.com/images/products/30053320/98200_512.jpg",
    name:"Comfy Women Sweatshirts",
    price:300,
    oldprice:350,
    rating:3.2,
   details:{Name : "Comfy Fabulous Women Sweatshirts",
                   Fabric : "Cotton", Pattern : "Solid"}
},
{
    image_url:"https://images.meesho.com/images/products/4766400/1_512.jpg",
    name:"Stylish Women Watches",
    price:169,
    oldprice:198,
    rating:4.2,
   details:{Name : "Stylish Women Watches",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/94916772/pvbbp_512.jpg",
    name:"Kurtis",
    price:720,
    oldprice:770,
    rating:3.5,
   details:{Name : "Kurtis",
                   Fabric : " Chiffon", Pattern : " Chikankari"}
},
{
    image_url:"https://images.meesho.com/images/products/55032016/gcghq_512.jpg",
    name:"Kids Boys Full Sleeves",
    price:176,
    oldprice:207,
    rating:"4.0",
   details:{Name : "New Stylish Double Pocket Shirts For Men",
                   Fabric : "Cotton", Pattern : "Embellished"}
},
{
    image_url:"https://images.meesho.com/images/products/63529696/d3hev_512.jpg",
    name:"Stylo Kids Bags & Backpacks",
    price:224  ,
    oldprice:263,
    rating:3.8,
   details:{Name : "Stylo Kids Bags & Backpacks",
                   Fabric : "Material", Pattern : "Colorful"}
},
{
    image_url:"https://images.meesho.com/images/products/17884344/02285_512.jpg",
    name:"Dry Fit Honey Track Pants",
    price:467,
    oldprice:517,
    rating:3.7,
   details:{Name : "Dry Fit Polyster Honey Comb Track Pants",
                   Fabric : "Polyester", Pattern : "Colorblocked"}
},
{
    image_url:"https://images.meesho.com/images/products/71798467/uxvkw_512.jpg",
    name:"Jivika Petite Kurtis",
    price:235,
    oldprice:276,
    rating:"4.0",
   details:{Name : "Jivika Petite Kurtis",
                   Fabric : "Khadi Cotton", Pattern : " Printed"}
},
{
    image_url:"https://images.meesho.com/images/products/76114604/pdjhq_512.jpg",
    name:"Rubber Kitty Design Back Cover",
    price:430,
    oldprice:480,
    rating:3.8,
   details:{Name : "Coverage Rubber Hello Kitty Design Back Cover",
                   Fabric : "No", Pattern : "No"}
},
{
    image_url:"https://images.meesho.com/images/products/5151755/1_512.jpg",
    name:"Fabulous Men Tshirt",
    price:222,
    oldprice:261,
    rating:3.6,
   details:{Name : "Fabulous Men Tshirt",
                   Fabric : "Cotton", Pattern : "Colorblocked"}
},
{
    image_url:"https://images.meesho.com/images/products/46457651/x3kh3_512.jpg",
    name:"Relaxed Men Sports Shoes",
    price:347,
    oldprice:397,
    rating:3.9,
   details:{Name : "Relaxed Fabulous Men Sports Shoes",
                   Fabric : "Mesh", Pattern : "Solid"}
},
{
    image_url:"https://images.meesho.com/images/products/13415707/78491_512.jpg",
    name:"Trendy Men Double Pocket Shirt",
    price:430,
    oldprice:480,
    rating:3.9,
   details:{Name : "Trendy Stylish Men Double Pocket Shirt(Only Shirt)",
                   Fabric : "Cotton", Pattern : "Solid"}
},
{
    image_url:"https://images.meesho.com/images/products/43184357/xosbj_512.jpg",
    name:"Fancy Trendy Men Sunglasses",
    price:91,
    oldprice:106,
    rating:3.7,
   details:{Name : "Fancy Trendy Men Sunglasses",
                   Fabric : "No", Pattern : "No"}
},

]


localStorage.setItem("products",JSON.stringify(products))
console.log(products.length)

import {append} from "./append.js"

let container = document.getElementById("container")

append(products,container)

