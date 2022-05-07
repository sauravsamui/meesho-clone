
let productDetails = JSON.parse(localStorage.getItem("productDetails"))||{};

import { appendDetails} from "./append.js";

let container = document.getElementById("container")
appendDetails(productDetails,container)

let rating = document.getElementById("rate")

rating.innerText = `${productDetails.rating}*`