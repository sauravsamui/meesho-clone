let electronics = JSON.parse(localStorage.getItem("electronics"))

 
 electronics = [
    {
        image_url: "https://images.meesho.com/images/products/42715338/bnevt_512.jpg",
        name: "Mobile Chargers",
        price:342,
        oldprice:392 ,
        rating: 3.5,
        details: {
            Name: "Mobile Chargers",
            Fabric: "Plastic", Pattern: "Micro USB"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/69268089/irhoq_512.jpg",
        name: "Mobile Phone Back Case Cover ",
        price:154,
        oldprice:181 ,
        rating: 4.2,
        details: {
            Name: "Mobile Phone Back Case Cover For Vivo y12, Vivo Y15, Vivo Y17",
            Fabric: "Silicone", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/77489638/dgzgo_512.jpg",
        name: "Neckband B-11",
        price:232,
        oldprice:272 ,
        rating: 3.5,
        details: {
            Name: "Neckband B-11",
            Fabric: "Silicone", Pattern: "Blue"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/65363405/6fajy_512.jpg",
        name: "Fast Charging Data Cable",
        price:201,
        oldprice:236 ,
        rating: 3.9,
        details: {
            Name: "Magnetic USB 360 Degree Rotation 3 in 1 Fast Charging Data Cable ",
            Fabric: "Silicone", Pattern: "Blue"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/98379189/ychuj_512.jpg",
        name: " Smart Band Activity Tracker",
        price:417,
        oldprice:467 ,
        rating: 4.1,
        details: {
            Name: "ID116 Fitness Smart Band Activity Tracker Smartwatch with Sleep Monitor, Step Tracking, Heart Rate Sensor for Men, Women, Kids (Black)",
            Fabric: "Silicone", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/21730026/0306c_512.jpg",
        name: "Smart Watches",
        price:1363,
        oldprice:1413 ,
        rating: 3.7,
        details: {
            Name: "Smart Watches",
            Fabric: "Silicone", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/20305725/fb365_512.jpg",
        name: "Fancy Smart Watches",
        price:1217,
        oldprice: 1367,
        rating: 3.7,
        details: {
            Name: "Fancy Smart Watches",
            Fabric: "Silicone", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/34204265/5w2jy_512.jpg",
        name: "Fancy Mobile Holders",
        price:132,
        oldprice:155 ,
        rating: 3.9,
        details: {
            Name: "Fancy Mobile Holders",
            Fabric: "Plastic", Pattern: "Multicolor"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/24417210/fba61_512.jpg",
        name: "Classy Mobile Holders",
        price:315,
        oldprice:365 ,
        rating: 4.1,
        details: {
            Name: "Classy Mobile Holders",
            Fabric: "Plastic", Pattern: "Multicolor"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/25712035/306e2_512.jpg",
        name: "Mobile Phone Stand Holder",
        price:455,
        oldprice:505 ,
        rating: 4.1,
        details: {
            Name: "Trunkin New Fancy Blue Astronaut Figurine Standing Novelty Mobile Phone Stand Holder",
            Fabric: "Plastic", Pattern: "Blue"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/30818911/lnk0b_512.jpg",
        name: " Wall Mounted Storage Case",
        price:210,
        oldprice:247 ,
        rating: 3.6,
        details: {
            Name: "4 PCs Wall Mounted Storage Case For Remote, Toothbrush, Mobile Phone Plug Holder",
            Fabric: "Plastic", Pattern: "Multicolor"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/69926576/rrefo_512.jpg",
        name: "Designer Back Cover",
        price:145,
        oldprice:170 ,
        rating: 3.8,
        details: {
            Name: "Printopolis Designer Back Cover for Infinix Hot 10 Play",
            Fabric: "Silicon", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/58576047/auxvy_512.jpg",
        name: "Realme Narzo 50i",
        price:144,
        oldprice:169 ,
        rating: 4.1,
        details: {
            Name: "Realme Narzo 50i",
            Fabric: "Silicon", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/68691568/mksqk_512.jpg",
        name: "Designer Back Cover",
        price:145,
        oldprice:170 ,
        rating: 3.5,
        details: {
            Name: "Printopolis Designer Back Cover for Oppo Reno 6 Pro 5G",
            Fabric: "Silicon", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/26618107/75420_512.jpg",
        name: "DRY ELECTRONIC IRON ",
        price:459,
        oldprice:509 ,
        rating: 3.6,
        details: {
            Name: "GOODFLAME MEGNA DRY ELECTRONIC IRON ISI QUALITY MARK 1 YEAR WARRANTY",
            Fabric: "Plastic", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/31591320/rghvm_512.jpg",
        name: "Wet Dry-Vacuum Cleaner",
        price:358,
        oldprice:408 ,
        rating: 3.5,
        details: {
            Name: "Car Vaccum Wet/Dry Hi-Power Portable Wet Dry-Vacuum Super Clean for Cleaning Car, Bike and s, Multipurpose Vacuum Cleaner",
            Fabric: "Plastic", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/18114889/39477_512.jpg",
        name: "Window ac Cover 2 ton .",
        price:222,
        oldprice:261 ,
        rating: 3.7,
        details: {
            Name: "Dream Cure Window ac Cover 2 ton Waterproof and dustproof Polyester multiColor.",
            Fabric: "Plastic", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/94659430/9wpph_512.jpg",
        name: "JAR MIXER GRINDER",
        price:1600,
        oldprice: 1650,
        rating: 4.0,
        details: {
            Name: "BLUEMIX STAR 4 JAR MIXER GRINDER WITH HIGH PERFORMANCE MOTOR 24 MONTH LIMITED WARRANTY",
            Fabric: "Abs Plastic", Pattern: " Sky Blue"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/17217081/f2271_512.jpg",
        name: "fancy led usb light",
        price:144,
        oldprice:169 ,
        rating: 3.9,
        details: {
            Name: "fancy led usb light",
            Fabric: "Silicon", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/103914932/iqvf1_512.jpg",
        name: "USB Hand Table Fan",
        price:338,
        oldprice:388 ,
        rating: 4.6,
        details: {
            Name: "Portable Built-in Rechargeable Battery Operated USB Hand Table Fan Summer Cooling with Stand ",
            Fabric: "Plastic", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/4338265/1_512.jpg",
        name: "Red Enzo Hair Spray",
        price:144,
        oldprice:169 ,
        rating: 3.9,
        details: {
            Name: "Red Enzo Hair Spray",
            Fabric: "Spray", Pattern: "Spray"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/85536863/bwltv_512.jpg",
        name: "Bread Mustache Rotary Shaver ",
        price:1775,
        oldprice: 1825,
        rating: 3.4,
        details: {
            Name: "Waterproof Chargeable Triple Blade 3D Wet/Dry Bread Mustache Rotary Shaver With Pop Up Trimmer Shaver",
            Fabric: "Plastic ", Pattern: "Trimmer"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/58736040/kwu2l_512.jpg",
        name: "Light Fairness cream",
        price:602,
        oldprice:652 ,
        rating: 3.5,
        details: {
            Name: "Labola Herbal O Long Action For Man With Man Fair & Light Fairness cream ",
            Fabric: "Spray Perfume ", Pattern: "Herbal"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/2188827/1_512.jpg",
        name: "2 in 1 Hair Straightener and Curler",
        price:203,
        oldprice:238 ,
        rating: 3.2,
        details: {
            Name: "2 in 1 Hair Straightener and Curler",
            Fabric: "Plastic", Pattern: "Straightener "
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/6273760/f86d5_512.jpg",
        name: "Natural Indigo Leaf Powder ",
        price:151,
        oldprice:177 ,
        rating: 3.9,
        details: {
            Name: "Vihado Natural Indigo Leaf Powder 100% Fresh Powder 100g (Pack of 1)",
            Fabric: "Powder ", Pattern: "Fresh Powder"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/84056081/sl8ch_512.jpg",
        name: "LACT 6+1 EXTENTION BOARD ",
        price:163,
        oldprice:191 ,
        rating: 3.9,
        details: {
            Name: "LACT 6+1 EXTENTION BOARD WITH 2.5 MITER COPER WIRE",
            Fabric: "COPER WIRE,Plastic", Pattern: "Multicolor"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/17380678/860bf_512.jpg",
        name: "7 LED COLOR CHANGING ",
        price:142,
        oldprice:167 ,
        rating: 3.8,
        details: {
            Name: "3D ILLUSION LED NIGHT LIGHT WITH 7 LED COLOR CHANGING FOR BEDROOM DECORATION",
            Fabric: "Plastic", Pattern: "DECORATION"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/31295201/17c35_512.jpg",
        name: "Fashionable Table Lamps",
        price:134,
        oldprice:157 ,
        rating: 4.1,
        details: {
            Name: "Fashionable Table Lamps",
            Fabric: "Plastic", Pattern: "DECORATION"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/32716630/wp4mo_512.jpg",
        name: "Fabulous Table Lamps",
        price:261,
        oldprice:306 ,
        rating: 4.0,
        details: {
            Name: "Fabulous Table Lamps",
            Fabric: "Plastic", Pattern: "DECORATION"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/17401521/85a16_512.jpg",
        name: " LED COLOR CHANGING ",
        price:142,
        oldprice:167 ,
        rating: 4.2,
        details: {
            Name: "3D ILLUSION LED NIGHT LIGHT WITH 7 LED COLOR CHANGING FOR BEDROOM DECORATION",
            Fabric: "Plastic", Pattern: "DECORATION"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/32035352/c2123_512.jpg",
        name: "Fancy NIGHT LAMP ",
        price:145,
        oldprice:170 ,
        rating: 3.9,
        details: {
            Name: "RADHE KRISHNA FANCY NIGHT LAMP 625",
            Fabric: "Plastic", Pattern: "DECORATION"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/27713230/nxi8j_512.jpg",
        name: "Trendy Table Lamps",
        price:272,
        oldprice:319 ,
        rating: 3.9,
        details: {
            Name: "Trendy Table Lamps",
            Fabric: "Plastic", Pattern: "DECORATION"
        }
    },
   
    ]

localStorage.setItem("electronics",JSON.stringify(electronics))

import {append1} from "./append.js"

let container = document.getElementById("container")

append1(electronics,container)

import button from "./button.js"

let btn = document.getElementById("button")
btn.innerHTML= button()