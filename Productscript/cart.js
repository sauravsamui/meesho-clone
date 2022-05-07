let cartItem = JSON.parse(localStorage.getItem("cartItem")) || {}




if (Object.keys(cartItem).length > 1) {
    let inputqnt = localStorage.getItem("quant") || 1
    console.log(inputqnt)

    let total_price = (cartItem.price * Number(inputqnt)) || 0
    let item = document.getElementById("item_details")
    function displayData() {

        item.innerText = null;
        let image = document.createElement("img")
        image.setAttribute("id", "img")
        image.src = cartItem.url;

        let div1 = document.createElement("div")
        div1.setAttribute("class", "item_name")
        let n = document.createElement("h4");
        n.innerText = cartItem.name;
        let bttn = document.createElement("button")
        bttn.setAttribute("class", "open-btn")
        bttn.innerText = "Edit"
        let s = document.createElement("h4");
        s.innerText = "Size : Free"
        let q = document.createElement("h4")
        q.setAttribute("id", "qty");
        q.innerText = `Qty : ${inputqnt}`

        let p = document.createElement("h4");
        p.innerText = `₹${cartItem.price}`
        div1.append(n, bttn, s, q, p)

        item.append(image, div1)

    }
    displayData()

    let inside_cart = document.getElementById("inside_cart")
    function displayData1() {

        inside_cart.innerText = null;
        let image = document.createElement("img")
        image.setAttribute("id", "img")
        image.src = cartItem.url;

        let div1 = document.createElement("div")
        div1.setAttribute("class", "item_name1")
        let n = document.createElement("h4");
        n.innerText = cartItem.name;
        let bttn = document.createElement("button")
        bttn.setAttribute("class", "removebtn")
        bttn.innerText = "REMOVE"
        bttn.addEventListener("click", () => {

            removeFunc()

        })
        let s = document.createElement("h4");
        s.innerText = "Size : Free"
        let q = document.createElement("h4")
        q.setAttribute("id", "qty");
        q.innerText = `Qty`
        let input = document.createElement("input")
        input.setAttribute("id", "input")
        input.placeholder = inputqnt

        let p = document.createElement("h4");
        p.innerText = `₹${cartItem.price}`
        div1.append(n, bttn, s, q, input, p)

        inside_cart.append(image, div1)

    }
    displayData1()
    let item_price = document.getElementById("item_price")
    item_price.innerText = `₹${cartItem.price}`
    let item_count = document.getElementById("item_count")
    if (inputqnt > 1) {
        item_count.innerText = `${inputqnt} items`
    } else {
        item_count.innerText = `${inputqnt} item`
    }

    item_count.style.color = "grey"

    let total_amount = document.getElementById("total_amount")
    let p = total_price - 50
    total_amount.innerText = `₹${p}`
    localStorage.setItem("total_amount", p)
    let inside_total = document.getElementById("price")
    inside_total.innerText = `₹${total_price}`


    document.querySelector("#head>img").addEventListener("click", () => {
        window.location.href = "landingpageproduct.html"
    })

    const open_btn = document.querySelector('.open-btn');
    const close_btn = document.querySelector('.close-btn');
    const popup = document.querySelector('.popup');
    const main_popup = document.querySelector('.main-popup');

    open_btn.addEventListener('click', () => {
        popup.style.display = 'flex';
        main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
    });

    close_btn.addEventListener('click', () => {
        main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    });

    window.addEventListener('click', (e) => {
        if (e.target == document.querySelector('.popup-overlay')) {
            main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 500);
        }
    });

    document.querySelector("#btn-gls").addEventListener("click", () => {
        let input = document.getElementById("input").value

        localStorage.setItem("quant", input)
        window.location.reload()
    })


    function removeFunc() {
        let input = 1;

        localStorage.setItem("quant", input)
        total_price = 0
        localStorage.setItem("total_amount", total_price)
        cartItem = {};
        localStorage.setItem("cartItem", JSON.stringify(cartItem))
        window.location.reload()
    }

    document.getElementById("continue").addEventListener("click", () => {
        window.location.href = "address.html"
    })



}
else {
    let item = document.getElementById("item")
    let billing = document.getElementById("billing");

    function remove() {
        item.innerHTML = null
        billing.innerHTML = null
        let no = document.createElement("h1")
        no.innerText = "Cart Empty!"
        item.append(no)

    }
    remove()
}









  // <button id="open-btn" class="open-btn">Edit</button>

