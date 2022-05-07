let homeKitchen = JSON.parse(localStorage.getItem("homeKitchen"))

 homeKitchen = [
    {
        image_url: "https://images.meesho.com/images/products/1357972/1_512.jpg",
        name: "Comfy Cotton Single Bedsheet",
        price:232,
        oldprice:272 ,
        rating: "4.0",
        details: {
            Name: "Comfy Cotton Single Bedsheet",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/766278/1_512.jpg",
        name: "Fiber Printed Double Bedsheet",
        price:289,
        oldprice:339 ,
        rating: 3.2,
        details: {
            Name: "Stylish Micro Fiber Printed Double Bedsheet",
            Fabric: " Micro Fiber", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/9512054/c6a69_512.jpg",
        name: "Pure Cotton Single bedsheet",
        price:276,
        oldprice:324 ,
        rating: 4.1,
        details: {
            Name: "Pure Cotton Single bedsheet with 1 pillow cover",
            Fabric: "Microfiber", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/4494586/1_512.jpg",
        name: "Classy Double Cotton Bedsheet",
        price:353,
        oldprice:403 ,
        rating: 3.5,
        details: {
            Name: "Classy Double Cotton Bedsheet",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/3257023/1_512.jpg",
        name: "Cotton Printed Double Bedsheets",
        price:353,
        oldprice:403 ,
        rating: "4.0",
        details: {
            Name: "Fancy Cotton Printed Double Bedsheets",
            Fabric: "Bedsheet - Cotton Pillow Covers - Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/3354631/1_512.jpg",
        name: "Cotton Printed Double Bedsheets",
        price:353,
        oldprice:403 ,
        rating: 3.7,
        details: {
            Name: "rendy Decorative Cotton Printed Double Bedsheets",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/77723413/rdarh_512.jpg",
        name: "rectangle dori doormat",
        price:194,
        oldprice:234 ,
        rating: 3.8,
        details: {
            Name: "rectangle dori doormat",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/88220186/13wxm_512.jpg",
        name: "kitchen mat",
        price:180,
        oldprice:227 ,
        rating: 3.8,
        details: {
            Name: "kitchen mat",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/87948419/h1o3m_512.jpg",
        name: "Kitchen matt",
        price:164,
        oldprice:192 ,
        rating: 3.7,
        details: {
            Name: "Kitchen matt",
            Fabric: "Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/627279/1_512.jpg",
        name: "Fancy Printed Long Door Curtains",
        price:621,
        oldprice:671 ,
        rating: 3.7,
        details: {
            Name: "Fancy Printed Long Door Curtains Pack Of 2",
            Fabric: "Glace Cotton", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/9252619/09097_512.jpg",
        name: "printed door curtain of 2 piece",
        price:251,
        oldprice:317 ,
        rating: "4.0",
        details: {
            Name: "printed door curtain of 2 piece (4x7feet)",
            Fabric: "Polyester", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/2564567/1_512.jpg",
        name: "Polyester String Door Curtain",
        price:223,
        oldprice:276 ,
        rating: 3.8,
        details: {
            Name: "Shaped Polyester String Door Curtain",
            Fabric: "Polyester", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/68538309/e3mfw_512.jpg",
        name: "TLF Polyester Printed Custain",
        price:306,
        oldprice:379 ,
        rating: 3.9,
        details: {
            Name: "TLF Polyester Printed Custain (pack of 1) 7 Ft",
            Fabric: "Satin", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/8132640/85456_512.jpg",
        name: "Tv Setup Box & Tv Unite ",
        price:468,
        oldprice:518 ,
        rating: "4.0",
        details: {
            Name: "Tv Setup Box & Tv Unite ",
            Fabric: "Wood", Pattern: "Wooden"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/24639724/2eade_512.jpg",
        name: "Classic Dream Catchers",
        price:329,
        oldprice:379 ,
        rating: 4.3,
        details: {
            Name: "Classic Dream Catchers",
            Fabric: "cotton, silk", Pattern: "Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/29321034/aedbb_512.jpg",
        name: "Laddu Gopal Dress",
        price:365,
        oldprice:415 ,
        rating: 3.7,
        details: {
            Name: "Laddu Gopal Dress",
            Fabric: "cotton", Pattern: "Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/12585820/f3e75_512.jpg",
        name: "Krishna PVC Vinyl Sticker Wall Decals",
        price:172,
        oldprice:202 ,
        rating: 4.3,
        details: {
            Name: "Indra Graphics Krishna PVC Vinyl Sticker Wall Decals",
            Fabric: "PVC Vinyl", Pattern: "Graphics"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/25942892/38245_512.jpg",
        name: "Minions wall Sticker & Decal",
        price:192,
        oldprice:225 ,
        rating: 4.8,
        details: {
            Name: "suman graphics Minions wall Sticker & Decal",
            Fabric: "PVC Vinyl", Pattern: "Graphics"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/13165462/804c3_512.jpg",
        name: "Lord Hanuman wall Sticker",
        price:177,
        oldprice:208 ,
        rating: "4.0",
        details: {
            Name: "Indra Graphic Lord Hanuman wall Sticker & Decal",
            Fabric: "Vinyl", Pattern: "Graphic "
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/26043466/8ec0c_512.jpg",
        name: "Princess wall Sticker & Decal",
        price:192,
        oldprice:225 ,
        rating: 3.8,
        details: {
            Name: "suman graphics Princess wall Sticker & Decal",
            Fabric: "PVC Vinyl", Pattern: "Graphic"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/76373035/kscem_512.jpg",
        name: "Ganesh Home Decor wall clock",
        price:263,
        oldprice:309 ,
        rating: 3.8,
        details: {
            Name: "Ganesh exclusive Home Decor wall clock",
            Fabric: "Plastic", Pattern: "Decor"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/64314589/hbhkm_512.jpg",
        name: "Arts Classic Anchor Wall Clock",
        price:285,
        oldprice:335 ,
        rating: 3.7,
        details: {
            Name: "Shoora Arts Classic Anchor Wall Clock",
            Fabric: "Plastic", Pattern: "Arts"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/67415050/o2zxp_512.jpg",
        name: "Modern Plastic Wall Clock",
        price:285,
        oldprice:335 ,
        rating: 3.6,
        details: {
            Name: "Shoora Arts Modern Designer Plastic Wall Clock",
            Fabric: "Plastic", Pattern: "Arts"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/33133886/4iobg_512.jpg",
        name: "Classic Idols & Figurines",
        price:120,
        oldprice:176 ,
        rating: 3.9,
        details: {
            Name: "Classic Idols & Figurines",
            Fabric: "Plastic", Pattern: "Arts"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/23432058/5a99f_512.jpg",
        name: "Latest Idols & Figurines",
        price:114,
        oldprice:155 ,
        rating: 3.9,
        details: {
            Name: "Latest Idols & Figurines",
            Fabric: "Plastic", Pattern: "Arts"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/73692175/zd15b_512.jpg",
        name: "Crafts Lord Hanuman ",
        price:153,
        oldprice:189 ,
        rating:3.8 ,
        details: {
            Name: "Crafts Lord Hanuman ",
            Fabric: "Plastic", Pattern: "Arts"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/9560686/a2f9c_512.jpg",
        name: "Pack Of 12 Blue-Black Normal",
        price:209,
        oldprice:245 ,
        rating:2.9 ,
        details: {
            Name: "Pack Of 12 Blue-Black Normal",
            Fabric: "Plastic", Pattern: "Normal"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/9543018/b5a29_512.jpg",
        name: "Purple Containers Lunchbox",
        price:310,
        oldprice:360 ,
        rating: 2.8,
        details: {
            Name: "Brown-Beige + Solace Red-Brown Purple Containers Lunchbox",
            Fabric: "Plastic", Pattern: "Normal"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/28168846/w6mgj_512.jpg",
        name: " Modular Storage Jar Container",
        price:1038,
        oldprice: 1088,
        rating: 4.3,
        details: {
            Name: "Unbreakable Modular Storage Jar Container ",
            Fabric: "Plastic", Pattern: "Normal"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/22836828/163b0_512.jpg",
        name: "Wonderful Cake Tins",
        price:198,
        oldprice:232 ,
        rating: 3.8,
        details: {
            Name: "Wonderful Cake Tins",
            Fabric: "Plastic", Pattern: "Normal"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/9834752/47e7c_512.jpg",
        name: "Plastic Kulfi Maker Mould",
        price:129,
        oldprice:151 ,
        rating: 3.6,
        details: {
            Name: "MOUNTHILLS Plastic Kulfi Maker Mould",
            Fabric: "Plastic", Pattern: "Normal"
        }
    },
    
    {
        image_url: "https://images.meesho.com/images/products/5877340/hf5rk_512.jpg",
        name: "Modern Unique Trendy Kitchen Tools",
        price:125,
        oldprice:150 ,
        rating: 4.2,
        details: {
            Name: "Modern Unique Trendy Kitchen Tools",
            Fabric: "Plastic", Pattern: "Normal"
        }
    },

    ]
localStorage.setItem("homeKitchen",JSON.stringify(homeKitchen))

import {append1} from "./append.js"

let container = document.getElementById("container")

append1(homeKitchen,container)

import button from "./button.js"

let btn = document.getElementById("button")
btn.innerHTML= button()