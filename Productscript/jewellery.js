let jewellery = JSON.parse(localStorage.getItem("jewellery"))||[]
jewellery = [
    {
        image_url: "https://images.meesho.com/images/products/34489240/96c7g_512.jpg",
        name: "Feminine Colorful Jewellery Sets",
        price: 305 ,
        oldprice: 355,
        rating: 3.5,
        details: {
            Name: "Feminine Colorful Jewellery Sets",
            Fabric: "Alloy", Pattern: "Kundan"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/22170903/3a9a6_512.jpg",
        name: "Feminine Graceful Jewellery Sets",
        price:140,
        oldprice:164,
        rating:3.3,
        details: {
            Name: "Feminine Graceful Jewellery Sets",
            Fabric: " Alloy", Pattern: "Pearls"
        }

    },
    {
        image_url: " https://images.meesho.com/images/products/2548008/1_512.jpg",
        name: "Stylish Alloy Jewellery Set",
        price:325,
        oldprice:375,
        rating:3.8,
        details: {
            Name: "Stylish Alloy Jewellery Set",
            Fabric: " Alloy", Pattern: "No"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/8529375/5d066_512.jpg",
        name: "Silver Antic Artificial Earring",
        price:155,
        oldprice:182,
        rating:3.6,
        details: {
            Name: "Silver Antic Artificial Earring",
            Fabric: "Silver", Pattern: "Artificial Stones"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/38650937/w0dhb_512.jpg",
        name: "Feminine Fusion Mangalsutras",
        price:165,
        oldprice: 194,
        rating: 3.0,
        details: {
            Name: "Feminine Fusion Mangalsutras",
            Fabric: " Brass & Copper", Pattern: "Artificial Stones"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/42456891/zuuds_512.jpg",
        name: "Fancy Earrings & Studs",
        price:169,
        oldprice:210,
        rating: 3.8,
        details: {
            Name: "Fancy Earrings & Studs",
            Fabric: "Alloy", Pattern: "Artificial Stones"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/99128522/gsubn_512.jpg",
        name: "Crystal Tassel Earrings",
        price:187,
        oldprice:252,
        rating:"5.0",
        details: {
            Name: "Crystal Tassel Earrings",
            Fabric: "Rayon ", Pattern: "Printed"
        }
    },
    {
        image_url: " https://images.meesho.com/images/products/2209219/1_512.jpg",
        name: "Oxidized Silver Earring",
        price:101,
        oldprice:118,
        rating:"3.0",
        details: {
            Name: "Oxidized Silver Earring",
            Fabric: "Oxidized Silver", Pattern: " Solid"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/54542311/ur180_512.jpg",
        name: "Adjustable Silver Ring  ",
        price:129,
        oldprice:263,
        rating:"3.9",
        details: {
            Name: "Adjustable Silver Ring",
            Fabric: " Alloy", Pattern: "Cubic Zirconia"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/74529508/blq5k_512.jpg",
        name: "Diamond Sparkling Finger Ring",
        price:277 ,
        oldprice:325  ,
        rating:3.7,
        details: {
            Name: "Diamond Sparkling Finger Ring",
            Fabric: "Brass", Pattern: "American Diamond"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/84638332/di7a9_512.jpg",
        name: "Gold Plated finger Ring",
        price:151,
        oldprice:189,
        rating:4.3,
        details: {
            Name: "Alloy Gold Plated finger Ring",
            Fabric: "Gold Plated", Pattern: "American Diamond"
        }
    },

    {
        image_url: "https://images.meesho.com/images/products/84825525/5nrrb_512.jpg",
        name: "Silver Plated Rings ",
        price: 164,
        oldprice:205,
        rating:"4.0",
        details: {
            Name: "Silver Plated Rings ",
            Fabric: " Alloy", Pattern: "No"
        }
    },
    {
        image_url: " https://images.meesho.com/images/products/79172645/hsybt_512.jpg",
        name: "Adjustable Finger Ring",
        price:65,
        oldprice:89,
        rating:3.6,
        details: {
            Name: "Adjustable Finger Ring",
            Fabric: " Brass & Copper", Pattern: "American Diamond"
        }
    },
    {
        image_url: " https://images.meesho.com/images/products/53105851/nstkd_512.jpg",
        name: "Light MeenaKari Earrings",
        price:128,
        oldprice:150,
        rating:3.8,
        details: {
            Name: "Light MeenaKari Earrings",
            Fabric: " Brass", Pattern: "Artificial Stones & Beads"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/80269373/0cmn8_512.jpg",
        name: "gold plated copper earring stud",
        price:318,
        oldprice:368,
        rating:3.9,
        details: {
            Name: "gold plated copper earring stud",
            Fabric: "Copper", Pattern: "No Stone"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/60179177/homyr_512.jpg",
        name: "Trendy Earrings & Studs",
        price:293,
        oldprice:310,
        rating:3.7,
        details: {
            Name: "Trendy Earrings & Studs",
            Fabric: "Copper", Pattern: "Cubic Zirconia/American Diamond"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/8188329/f1fc2_512.jpg",
        name: "Shimmering Graceful Earrings",
        price:113,
        oldprice:149,
        rating:3.9,
        details: {
            Name: "Shimmering Graceful Earrings",
            Fabric: " Alloy", Pattern: "  Artificial Beads"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/16568427/4603f_512.jpg",
        name: "CHAIN ANKLET FOR GIRLS",
        price:105,
        oldprice:131 ,
        rating:3.4,
        details: {
            Name: "CHAIN ANKLET FOR GIRLS",
            Fabric: "Alloy", Pattern: "Artificial Stones"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/70903882/jc4dz_512.jpg",
        name: "Ghungroo Pair Alloy Anklet",
        price:174,
        oldprice:215,
        rating:3.9,
        details: {
            Name: "Ghungroo Pair Alloy Anklet",
            Fabric: "Alloy", Pattern: "Artificial Stones"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/66047745/jk1vw_512.jpg",
        name: "Women Anklate & Toe Rings",
        price:161,
        oldprice:190,
        rating:3.9,
        details: {
            Name: "Women Anklate & Toe Rings",
            Fabric: " Alloy", Pattern: " Artificial Beads"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/89349647/dhxr0_512.jpg",
        name: "Bracelet & Bangles",
        price:237,
        oldprice:278,
        rating:3.7,
        details: {
            Name: "Bracelet & Bangles",
            Fabric: "Meta", Pattern: "Pearls"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/13779623/fa95e_512.jpg",
        name: " Fusion Bracelet & Bangles",
        price:387,
        oldprice:437,
        rating:3.9,
        details: {
            Name: " Fusion Bracelet & Bangles",
            Fabric: " Alloy", Pattern: " Artificial Stones"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/93429670/00t15_512.jpg",
        name: "Trendy Stylish Sunglasses",
        price:206,
        oldprice:257,
        rating:4.1,
        details: {
            Name: "Trendy Stylish Sunglasses",
            Fabric: "Metal & Plastic", Pattern: "No"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/77874452/4wwux_512.jpg",
        name: "Women Sunglasses",
        price: 128,
        oldprice:166,
        rating:"4.0",
        details: {
            Name: "Women Sunglasses",
            Fabric: "Acrylic", Pattern: "No"
        }

    },
    
    {
        image_url: " https://images.meesho.com/images/products/95138912/d5nlv_512.jpg",
        name: "  Flat Metal SunGlasses",
        price:177,
        oldprice:221,
        rating:3.9,
        details: {
            Name: " Flat Metal SunGlasses ",
            Fabric: " Metal", Pattern: "No"
        }

    },
    {
        image_url: " https://images.meesho.com/images/products/65036406/douke_512.jpg",
        name: "Neem Wooden Comb",
        price: 162,
        oldprice:199 ,
        rating:3.9,
        details: {
            Name: "Neem Wooden Comb",
            Fabric: "Metal", Pattern: "No"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/5450329/2_512.jpg",
    
        name: "Attractive Womens Watch",
        price:170,
        oldprice:206,
        rating:3.8,
        details: {
            Name: "Attractive Womens Watch",
            Fabric: "Metal", Pattern: "No"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/919493/1_512.jpg",
        name: "Metal Women's Watch",
        price: 165,
        oldprice:193,
        rating:3.9,
        details: {
            Name: "Metal Women's Watch",
            Fabric: "Metal", Pattern: "No"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/3998514/1_512.jpg",
        name: "Fancy Women's Watches",
        price:221,
        oldprice:299,
        rating:3.6,
        details: {
            Name: "Fancy Women's Watches",
            Fabric: "Metal", Pattern: "No"
        }

    },
    {
        image_url: " https://images.meesho.com/images/products/21428561/efed4_512.jpg",
        name: "Bejeweled Women Necklaces",
        price: 180,
        oldprice: 211,
        rating:3.3,
        details: {
            Name: "Bejeweled Women Necklaces",
            Fabric: "Brass", Pattern: "American Diamond"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/79545541/gydqp_512.jpg",
        name: " Stone Long Haram Necklaces ",
        price: 875,
        oldprice:1005,
        rating:3.9,
        details: {
            Name: "Stone Long Haram set Necklaces ",
            Fabric: "Brass & Copper", Pattern: "Cubic Zirconia/American Diamond"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/73385711/bvrb5_512.jpg",
        name: "customize Necklaces & Chains",
        price:85,
       oldprice:103 ,
       rating:4.5,
        details: {
            Name: "customize Necklaces & Chains",
            Fabric: "Alloy", Pattern: "American Diamond"
        }
    },

]

localStorage.setItem("jewellery",JSON.stringify(jewellery))

import {append1} from "./append.js"

let container = document.getElementById("container")

append1(jewellery,container)

import button from "./button.js"

let btn = document.getElementById("button")
btn.innerHTML= button()