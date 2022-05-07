let womenEthenic = JSON.parse(localStorage.getItem("womenEthenic"))||[]
womenEthenic = [
    {
        image_url: " https://images.meesho.com/images/products/32025170/hfgty_512.jpg",
        name: "Aagyeyi Superior Sarees",
        price: 442,
        oldprice: 492,
        rating: 3.8,
        details: {
            Name: "Women Analouge",
            Fabric: " Aura Silk", Pattern: "Woven Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/37975321/ekvcq_512.jpg",
        name: "J-Card Fancy Women Dupatta",
        price: 165,
        oldprice:194,
        rating:3.5,
        details: {
            Name: "J-Card Fancy Women Dupatta",
            Fabric: " Polyester", Pattern: "Printed"
        }

    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12894708/2020/12/3/15de92f0-3a4c-470c-9e1d-b5526f4335171606978803351anaynaWomenNavyBlueWhitePrintedStraightKurta1.jpg",
        name: "Printed Straight Kurta",
        price: 383,
        oldprice: 1198,
        rating:3.5,
        details: {
            Name: "Printed Straight Kurta",
            Fabric: "Cotton", Pattern: "Colorblocked"
        }

    },
    {
        image_url: " https://images.meesho.com/images/products/87259094/e7hnp_512.jpg",
        name: "Aagam Attractive Sarees",
        price:300,
        oldprice:367,
        rating:3.4,
        details: {
            Name: "Aagam Attractive Sarees",
            Fabric: " Satin Silk", Pattern: "Embroidered"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/82215069/unpou_512.jpg",
        name: "Elegant Gown Style Kurtis",
        price:216,
        oldprice: 263,
        rating: 3.9,
        details: {
            Name: "Pandora's Elegant Gown Style Kurtis",
            Fabric: " Crepe", Pattern: "Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/83320895/o0vs8_512.jpg",
        name: "FLOWER GREY",
        price:304,
        oldprice:372,
        rating: 3.9,
        details: {
            Name: "FLOWER GREY",
            Fabric: "Net", Pattern: "Dyed/ Washed"
        }
    },
    {
        image_url: " https://images.meesho.com/images/products/27853332/b6941_512.jpg",
        name: "Salwar Suits & Dress Materials",
        price:529,
        oldprice:579,
        rating:3.4,
        details: {
            Name: "Aishani Fashionable Salwar Suits & Dress Materials",
            Fabric: "Cotton Cambric + Chiffon", Pattern: "No"
        }
    },
    {
        image_url: " https://images.meesho.com/images/products/13070890/6a1af_512.jpg",
        name: "Banarasi Silk Saree with Blouse",
        price:455,
        oldprice:579,
        rating:4.2,
        details: {
            Name: "Green Banarasi Silk Saree with Blouse",
            Fabric: "Banarasi Silk", Pattern: " Woven Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/101635127/gy3tv_512.jpg",
        name: "Sizco Grey Radium Kurtis",
        price:470,
        oldprice:520,
        rating:"4.0",
        details: {
            Name: "Sizco Grey Radium Kurtis",
            Fabric: "Cotton", Pattern: "Solid"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/40038108/ptma1_512.jpg",
        name: "DEETYA FASHION Kurti",
        price:769,
        oldprice:819,
        rating:3.9,
        details: {
            Name: "DEETYA FASHION represent organza printed with mirror work kurti for women and girl",
            Fabric: "Organza", Pattern: "Embroidered"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/81584802/9zbhs_512.jpg",
        name: " Lycra Party Wear Blouse",
        price:208,
        oldprice:271,
        rating:3.9,
        details: {
            Name: "Readymade Stretchable Lycra Party Wear Blouse Latest Design",
            Fabric: "Lycra", Pattern: "Solid"
        }
    },

    {
        image_url: " https://images.meesho.com/images/products/3392748/1_512.jpg",
        name: "Printed Straight Kurta",
        price: 526,
        oldprice:1350,
        rating:3.3,
        details: {
            Name: "Printed Straight Kurta",
            Fabric: " Cotton", Pattern: "Kuchi Work"
        }
    },
    {
        image_url: " https://images.meesho.com/images/products/42486830/mn6sq_512.jpg",
        name: "Classy Modern Women Gowns",
        price:1020,
        oldprice:1070,
        rating:3.3,
        details: {
            Name: "Classy Modern Women Gowns",
            Fabric: "Rayon Slub", Pattern: " Printed"
        }
    },
    {
        image_url: " https://images.meesho.com/images/products/99101860/vnkc0_512.jpg",
        name: "Fancy Feminine Women Gowns",
        price:686,
        oldprice:736,
        rating:4.6,
        details: {
            Name: "Fancy Feminine Women Gowns",
            Fabric: "Georgette", Pattern: "Embroidered"
        }
    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
        name: "Printed Straight Kurta",
        price: 526,
        oldprice:1350,
        rating:3.8,
        details: {
            Name: "Printed Straight Kurta",
            Fabric: "Rayon Slub", Pattern: "Embroidered"
        }

    },
    {
        image_url: "https://images.meesho.com/images/products/8463011/01ea2_512.jpg",
        name: "Jaipuri Art Silk Bandhej Dupatta",
        price:235,
        oldprice:276,
        rating:4.2,
        details: {
            Name: "Traditional Jaipuri Art Silk Bandhej Dupatta",
            Fabric: "Art Silk", Pattern: " Self-Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/84806674/rhtwb_512.jpg",
        name: "Jacqurad Butti Designer Blouse",
        price:200,
        oldprice:261,
        rating:3.9,
        details: {
            Name: "Readymade Stretchable Stitched Jacqurad Butti Designer Blouse",
            Fabric: "Lycra", Pattern: " Self-Design"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/102783281/1bxqd_512.jpg",
        name: "ANARKALI CHEKS KURTI",
        price:635,
        oldprice:685,
        rating:3.9,
        details: {
            Name: "ANARKALI KOTA CHEKS LONG GOWN KURTI",
            Fabric: "Banarasi Silk", Pattern: " Printed"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/102592289/9n5g2_512.jpg",
        name: "Anara Banita Women Lehenga",
        price:840,
        oldprice:890,
        rating:4.3,
        details: {
            Name: "Anara Rama Banita Fashionable Women Lehenga",
            Fabric: "Satin", Pattern: "Chevron"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/83115001/dfwct_512.jpg",
        name: "new style lehenga",
        price:598,
        oldprice:728,
        rating:3.9,
        details: {
            Name: "new style lehenga",
            Fabric: "Satin", Pattern: "Embellished"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/33982828/ptekt_512.jpg",
        name: "Embroidery Velvet Lehenga",
        price:884,
        oldprice:934,
        rating:3.9,
        details: {
            Name: "Embroidery Velvet Lehenga",
            Fabric: "Satin", Pattern: "Embroidered"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/50585103/t6wim_512.jpg",
        name: "Elegant Suit & dress material",
        price:501,
        oldprice:551,
        rating:3.9,
        details: {
            Name: "Elegant Suit & dress material",
            Fabric: "Shantoon + Chanderi Cotton ", Pattern: "Zari Embroidered"
        }
    },
    {
        image_url: "https://images.meesho.com/images/products/46732769/djuql_512.jpg",
        name: "Charvi Voguish Sarees",
        price:335,
        oldprice:385,
        rating:4.1,
        details: {
            Name: "Charvi Voguish Sarees",
            Fabric: "Chiffon", Pattern: "Jacquard"
        }
    },
    {
        image_url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg ",
        name: "Women Printed Cotton Kurta",
        price: 699,
        oldprice:2799,
        rating:3.7,
        details: {
            Name: "Women Printed Cotton Kurta",
            Fabric: "Chiffon", Pattern: "Jacquard"
        }

    },
    
    {
        image_url: " https://images.meesho.com/images/products/91395269/pwxcf_512.jpg",
        name: "women anarkali",
        price: 1152,
        oldprice:1295,
        rating:4.2,
        details: {
            Name: "women anarkali",
            Fabric: " Rayon", Pattern: " Printed"
        }

    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
        name: "Yoke Design Kurta with Trouser",
        price: 1025,
        oldprice:2699,
        rating:3.6,
        details: {
            Name: "Yoke Design Kurta with Trouser",
            Fabric: "Chiffon", Pattern: "Jacquard"
        }

    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15816476/2021/11/13/5d433091-6cdd-4d5b-831e-e3d08c9acdc71636795731219-Fabindia-Women-Kurtas-6861636795730664-1.jpg",
    
        name: "Women Yoke Design Kurta",
        price: 2799,
        oldprice: "3350",
        rating:3.4,
        details: {
            Name: "Women Cotton Yoke Design Kurta",
            Fabric: "Cotton", Pattern: "Printed"
        }

    },
    {
        image_url: " https://images.meesho.com/images/products/15356630/de22d_512.jpg",
        type: "jeans",
        name: "SATIN SAREE WITH BLOUSE",
        brand: "Libas",
        price: 799,
        oldprice: 1999,
        rating:4.3,
        details: {
            Name: "NEW BOLLYWOOD SATIN PATTA SAREE WITH BLOUSE",
            Fabric: "Chiffon", Pattern: "Jacquard"
        }
    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
        name: "Chanderi Yoke Design Kurta Set",
        price: 1979,
        oldprice:5999,
        rating:4.4,
        details: {
            Name: "Chanderi Yoke Design Kurta Set",
            Fabric: "Rayon", Pattern: "Colorblocked"
        }

    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
        name: "Floral",
        price: 1229,
        oldprice: 2459,
        rating:4.3,
        details: {
            Name: "Floral",
            Fabric: "Chiffon", Pattern: "Self Design"
        }

    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11056866/2019/12/9/67a0d919-cbca-4d89-a8f1-6a25c9e9305c1575891613300-Round-NeckWith--34th-Sleeve-Straight-Floral-print-Crepe-Kurt-1.jpg",
        name: "Floral Leafy Foil Kurta Set",
        price: 641,
        oldprice:2468,
        rating:4.1,
        details: {
            Name: "Floral Leafy Foil Kurta Set",
            Fabric: "Cotton", Pattern: "Jacquard"
        }

    },
    {
        image_url: " https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg",
        name: "Ethnic Print Kurta Set",
        price: 911,
       oldprice: 2399,
       rating:3.8,
        details: {
            Name: "Ethnic Print Kurta Set",
            Fabric: "Chiffon", Pattern: "Jacquard"
        }
    },

]

localStorage.setItem("womenEthenic",JSON.stringify(womenEthenic))

import {append} from "./append.js"

let container = document.getElementById("container")
append(womenEthenic,container)

import button from "./button.js"

let btn = document.getElementById("button")
btn.innerHTML= button()


