import navbar from "./navbar.js";
document.querySelector("body").innerHTML=navbar();



document.getElementById("sign_up_button").addEventListener("click",sign_up);
document.getElementById("my_orders").addEventListener("click",my_orders);

function my_orders()
{
    window.location.href=""
}

function sign_up()
{
    window.location.href=""
}

// --------------navbar-2----------------

var box1 = document.querySelectorAll("#hover_1 span");

for(var i=0; i<box1.length;i++)
{
    box1[i].addEventListener("click",women_ethnic);
}
function women_ethnic()
{
    window.location.href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
}

var box2 = document.querySelectorAll("#hover_2 span");

for(var i=0; i<box2.length;i++)
{
    box2[i].addEventListener("click",women_western);
}
function women_western()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}

var box3 = document.querySelectorAll("#hover_3 span");

for(var i=0; i<box3.length;i++)
{
    box3[i].addEventListener("click",jewellery);
}
function jewellery()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}

var box4 = document.querySelectorAll("#hover_4 span");

for(var i=0; i<box4.length;i++)
{
    box4[i].addEventListener("click",men);
}
function men()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}

var box5 = document.querySelectorAll("#hover_5 span");

for(var i=0; i<box5.length;i++)
{
    box5[i].addEventListener("click",beauty);
}
function beauty()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}

var box6 = document.querySelectorAll("#hover_6 span");

for(var i=0; i<box6.length;i++)
{
    box6[i].addEventListener("click",bags);
}
function bags()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}

var box7 = document.querySelectorAll("#hover_7 span");

for(var i=0; i<box7.length;i++)
{
    box7[i].addEventListener("click",home);
}
function home()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}

var box8 = document.querySelectorAll("#hover_8 span");

for(var i=0; i<box8.length;i++)
{
    box8[i].addEventListener("click",kids);
}
function kids()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}

var box9 = document.querySelectorAll("#hover_9 span");

for(var i=0; i<box9.length;i++)
{
    box9[i].addEventListener("click",electronics);
}
function electronics()
{
    window.location.href="https://apps.apple.com/us/app/meesho/id1457958492"
}


