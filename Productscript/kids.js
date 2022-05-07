let kids = JSON.parse(localStorage.getItem("kids"))

 kids = [
    {
        image_url: "https://images.meesho.com/images/products/76471193/oeipb_512.jpg",
        name: "2ft Red Teddy bear Soft Toys",
        price:152,
        oldprice:189 ,
        rating: 3.7,
        details: {
            Name: "2ft Red Teddy bear (Valentine Special) Soft Toys",
            Fabric: "Fur", Pattern: "Soft Toys"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/53206112/mds8g_512.jpg",
        name: " Teddy Bear for Kids & Girls",
        price:328,
        oldprice:410 ,
        rating: 3.8,
        details: {
            Name: "Little Laughs Multicolor Teddy Bear for Kids & Girls - 3 Feet",
            Fabric: "Fur", Pattern: "Soft Toys"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/20083945/d4a5a_512.jpg",
        name: "Elite Unisex Soft Toys",
        price:228,
        oldprice:268 ,
        rating: 3.4,
        details: {
            Name: "Elite Unisex Soft Toys",
            Fabric: "Fur", Pattern: "Soft Toys"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/55745297/gvfcz_512.jpg",
        name: " HUGABLE Soft Giant Life Size" ,
        price:284,
        oldprice:334 ,
        rating: 3.9,
        details: {
            Name: "Loveable HUGABLE Soft Giant Life Size , Long Huge Teddy Bear - 91 cm (Yellow)",
            Fabric: "Fur", Pattern: "Soft Toys"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/103402020/5lauf_512.jpg",
        name: "Flip Flops for baby Combo ",
        price:158,
        oldprice:204 ,
        rating: 3.6,
        details: {
            Name: "Flip Flops for baby Combo 0-3 Years (girls & Boys)",
            Fabric: "EVA", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/86402477/8f97w_512.jpg",
        name: "Kids Stylish Sports Shoes For Boys",
        price:387,
        oldprice:464 ,
        rating: 3.8,
        details: {
            Name: "Kids Stylish Sports Shoes For Boys",
            Fabric: "Mesh", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/47802726/assyd_512.jpg",
        name: " LED Leight Indain Walking Shoes",
        price:321,
        oldprice:412 ,
        rating: 4.0,
        details: {
            Name: "BUNNIES Boys LED Leight Indain Walking Shoes (5 Years To 13 Years )",
            Fabric: "PVC", Pattern: "Woven Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/59655182/252p1_512.jpg",
        name: "GIRLS KIDE LEAF SHOES",
        price:265,
        oldprice:388 ,
        rating:3.7 ,
        details: {
            Name: "GIRLS KIDE LEAF SHOES",
            Fabric: "Canvas", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/79829057/dnt8a_512.jpg",
        name: " LCD Writing Pad with Screen",
        price:125,
        oldprice:157 ,
        rating: 4.0,
        details: {
            Name: "LCD Writing Pad with Screen 21.5cm (8.5-inch) for Drawing, Playing, Handwriting Gifts" ,
            Fabric: "Plastic", Pattern: "LCD "
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/75684471/k5xgi_512.jpg",
        name: "Reusable Magical Copybook Kids ",
        price:250,
        oldprice:327 ,
        rating: 3.8,
        details: {
            Name: " Copybook for Kids English Reusable Magical Copybook Kids Tracing Book for Handwriting Magical Letter Writing Book Set",
            Fabric: "Paper", Pattern: "Magical"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/2682936/1_512.jpg",
        name: "Voguish Kid's Rubber Watch",
        price:247,
        oldprice:290 ,
        rating: 4.0,
        details: {
            Name: "Voguish Kid's Rubber Watch",
            Fabric: "Rubber", Pattern: "Print"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/98059248/kwvfe_512.jpg",
        name: "KIDS WATCH FOR UNISEX",
        price:170,
        oldprice:206 ,
        rating: 3.9,
        details: {
            Name: "BEST QUALITY KIDS WATCH FOR UNISEX-buy 1 get 1 free (BOYS AND GIRLS)",
            Fabric: "Silicon", Pattern: "Digital"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/96932782/oaemy_512.jpg",
        name: "Designer Analog Watch ",
        price:151,
        oldprice:208 ,
        rating: 4.5,
        details: {
            Name: "Stylish Look Square Dial Designer Analog Watch for Boys and Men (aWhite) - Pack of 1 Watch",
            Fabric: "Rubber", Pattern: "Digital"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/24535443/x81re_512.jpg",
        name: "Classic Kids Bags & Backpacks",
        price:168,
        oldprice:197 ,
        rating: 3.9,
        details: {
            Name: "Classic Kids Bags & Backpacks",
            Fabric: "Canvas", Pattern: "Print"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/42279605/oelnn_512.jpg",
        name: "Classy Kids Bags & Backpacks",
        price:575,
        oldprice:625 ,
        rating: 3.7,
        details: {
            Name: "Classy Kids Bags & Backpacks",
            Fabric: "Polyester", Pattern: "Print"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/59153559/jlcis_512.jpg",
        name: "Bags & Backpacks",
        price:216,
        oldprice:270 ,
        rating: 4.4,
        details: {
            Name: "Bags & Backpacks",
            Fabric: "Nylon", Pattern: "Print"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/82626823/saqcf_512.jpg",
        name: "BRANDED KIDS BACKPACK",
        price:147,
        oldprice:172 ,
        rating: 3.6,
        details: {
            Name: "BRANDED TRENDY KIDS BACKPACK",
            Fabric: "Fabric", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/85664459/agiyn_512.jpg",
        name: "Short Sleeve Half Romper ",
        price:262,
        oldprice:342 ,
        rating: 4.0,
        details: {
            Name: "TiniBerry 100% Cotton Baby Bodysuit Short Sleeve Half Romper Pack of 3 Soft & Comfortable for Kids",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/49652451/g6dig_512.jpg",
        name: "Pretty Classy Boys Dungarees",
        price:186,
        oldprice:242 ,
        rating: 3.7,
        details: {
            Name: "Pretty Classy Boys Dungarees",
            Fabric: "Satin", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/85837942/l76tf_512.jpg",
        name: "Tiny heaven Romper ",
        price:255,
        oldprice:299 ,
        rating: 5.0,
        details: {
            Name: "Tiny heaven Romper For Baby Boys & Baby Girls Casual Striped Organic Cotton Blend (White, Pack of 1)",
            Fabric: "Cotton Blend", Pattern: "Stripes"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/62188298/ctenm_512.jpg",
        name: "Fancy Boys Onesies & Rompers",
        price:163,
        oldprice:191 ,
        rating: 4.2,
        details: {
            Name: "SOOKHSM Pretty Fancy Boys Onesies & Rompers /Body",
            Fabric: "Cotton Blend", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/51135376/lpzdj_512.jpg",
        name: " Boys Onesies & Rompers",
        price:390,
        oldprice:488 ,
        rating: 4.2,
        details: {
            Name: "Cute Stylus Boys Onesies & Rompers",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/79272373/yppus_512.jpg",
        name: "Mattress with Mosquito Net.",
        price:148,
        oldprice:192 ,
        rating: 3.8,
        details: {
            Name: "BLUEDOT Baby's Polyester Soft Mattress with Mosquito Net.",
            Fabric: "Polyester", Pattern: "Net"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/33593414/cajsm_512.jpg",
        name: "Polyester Mosquito Net",
        price:491,
        oldprice:607 ,
        rating: 4.0,
        details: {
            Name: "Double Bed Polyester Fordable Mosquito Net",
            Fabric: "Polyester", Pattern: "Net"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/71731572/vnmiv_512.jpg",
        name: " Cushioned Pillow Mosquito Net ",
        price:253,
        oldprice:297 ,
        rating: 3.9,
        details: {
            Name: "Kwitchy Cotton Infants New Born Baby Mosquito Net Bed with Cushioned Pillow Mosquito Net ( Pink Pilot Netbed )",
            Fabric: "Polycotton", Pattern: "Net"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/29674256/fc87e_512.jpg",
        name: "Alluring Baby Mosquito Nets",
        price:227,
        oldprice:281 ,
        rating: 3.8,
        details: {
            Name: "Alluring Baby Mosquito Nets",
            Fabric: "Polycotton", Pattern: "Net"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/44155275/gzonn_512.jpg",
        name: "baby sleeping bag",
        price:284,
        oldprice:333 ,
        rating: 3.9,
        details: {
            Name: "baby sleeping bag",
            Fabric: "Polycotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/91504717/yct1y_512.jpg",
        name: " Soft Pillow/ Head Shaper Pillow",
        price:227,
        oldprice:286 ,
        rating: 4.3,
        details: {
            Name: "Kids New Born Baby Soft Pillow/ Head Shaper Pillow",
            Fabric: "Polyester Fibre", Pattern: "Self-Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/77543161/lcxgj_512.jpg",
        name: "Soft Hooded Wrapper Towel",
        price:175,
        oldprice:262 ,
        rating: 4.0,
        details: {
            Name: "New Born Baby Bath Towel Pack of Terry Soft Hooded Wrapper Towel",
            Fabric: "Microfiber", Pattern: "Print"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/21297709/7e9e8_512.jpg",
        name: "Waterproof Mattress Protector",
        price:387,
        oldprice:485 ,
        rating: 3.9,
        details: {
            Name: "Threadworks Fitted King Size Double Bed (72x78 Inches) Waterproof Mattress Protector",
            Fabric: "Cotton", Pattern: "Print"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/24655387/f080e_512.jpg",
        name: "Baby hanging cradle",
        price:249,
        oldprice:292 ,
        rating: 3.8,
        details: {
            Name: "Baby hanging cradle",
            Fabric: "Polycotton", Pattern: "Print"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/31768346/kr0z9_512.jpg",
        name: "Fancy Baby Pillows",
        price:185,
        oldprice:217 ,
        rating: 4.0,
        details: {
            Name: "Fancy Baby Pillows",
            Fabric: "Polycotton", Pattern: "Print"
        }
    },
    

    ]
localStorage.setItem("kids",JSON.stringify(kids))

import {append1} from "./append.js"

let container = document.getElementById("container")

append1(kids,container)

import button from "./button.js"

let btn = document.getElementById("button")
btn.innerHTML= button()