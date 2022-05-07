function navbar()
{
    return `  <nav id="navbar">
    <div id="top_nav" >
        <div id="nav_left">
            <div>
            <svg viewBox="0 0 87 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="156" height="33" iconsize="20" class="Icon-sc-1iwi4w1-0 cZPTbN"><path d="M12.844 6.814c1.453.011 2.677.516 3.685 1.507 1.02.998 1.523 2.188 1.512 3.593L18 18.522c-.006.788-.668 1.423-1.488 1.423-.815-.006-1.471-.646-1.465-1.434l.04-6.608a2.048 2.048 0 00-.661-1.57c-.428-.43-.967-.646-1.6-.646a2.227 2.227 0 00-1.664.686c-.416.42-.621.997-.627 1.581l-.035 6.511c-.006.8-.68 1.446-1.506 1.44-.826-.006-1.494-.657-1.488-1.457l.04-6.55a2.21 2.21 0 00-.603-1.56c-.45-.464-1.002-.69-1.658-.696a2.236 2.236 0 00-1.611.629c-.434.425-.668.946-.668 1.558l-.041 6.602c-.006.794-.674 1.434-1.494 1.429-.82-.006-1.477-.652-1.471-1.445l.041-6.58a4.928 4.928 0 011.29-3.32c1.083-1.168 2.419-1.752 3.972-1.74 1.482.01 2.748.526 3.761 1.575 1.043-1.043 2.297-1.542 3.78-1.536zm18.682 7.316l-8.479-.052c.07 1.02.41 1.83 1.008 2.436.603.596 1.377.902 2.32.907.738.006 1.348-.159 1.834-.499.287-.204.598-.504.932-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.369 2.034 7.51 7.51 0 01-.287.318 6.416 6.416 0 01-1.389 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.445-.617-4.594-1.813-1.148-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.143-1.19 2.643-1.78 4.512-1.763 1.886.012 3.375.601 4.459 1.774 1.078 1.162 1.61 2.76 1.6 4.806a.703.703 0 01-.721.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.972-2.306a2.985 2.985 0 00-1.013.153 2.928 2.928 0 00-.867.453c-.258.198-.48.436-.668.714a3.24 3.24 0 00-.428.952l5.947.034zM45.64 14.13l-8.478-.052c.07 1.02.41 1.83 1.007 2.436.604.596 1.377.902 2.32.907.739.006 1.348-.159 1.835-.499.287-.204.597-.504.931-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.37 2.034 7.442 7.442 0 01-.288.318 6.416 6.416 0 01-1.388 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.446-.617-4.594-1.813-1.149-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.142-1.19 2.642-1.78 4.511-1.763 1.887.012 3.375.601 4.46 1.774 1.077 1.162 1.61 2.76 1.599 4.806a.703.703 0 01-.72.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.971-2.306a2.985 2.985 0 00-1.014.153 2.928 2.928 0 00-1.535 1.167 3.24 3.24 0 00-.427.952l5.947.034zM61.976 0c.838.006 1.506.663 1.5 1.474l-.062 6.478c1.084-.93 2.277-1.14 3.578-1.134 1.3.006 2.66.566 3.539 1.501.75.81 1.113 2.103 1.101 3.871l-.047 6.302c-.005.81-.685 1.456-1.523 1.45-.838-.005-1.506-.663-1.5-1.473l.041-6.024c.006-1.014-.176-1.751-.54-2.204-.368-.46-.966-.692-1.792-.692-1.055-.006-1.805.306-2.238.935-.428.64-.645 1.74-.657 3.298l-.035 4.664c-.005.81-.685 1.457-1.523 1.451-.838-.005-1.506-.663-1.5-1.473l.129-16.962c.012-.822.691-1.468 1.53-1.462zM73.44 13.46c.012-1.751.668-3.236 1.975-4.454 1.3-1.219 2.888-1.825 4.746-1.808 1.869.011 3.451.64 4.746 1.887 1.277 1.241 1.91 2.766 1.898 4.562-.012 1.82-.668 3.332-1.974 4.556-1.313 1.213-2.918 1.808-4.81 1.797-1.882-.012-3.446-.646-4.712-1.899-1.254-1.235-1.88-2.782-1.869-4.641zm2.96.068c-.007 1.213.316 2.17.984 2.879.68.72 1.582 1.082 2.707 1.088 1.13.006 2.039-.34 2.718-1.043.68-.703 1.026-1.638 1.037-2.816.006-1.18-.322-2.12-.996-2.828-.68-.714-1.582-1.083-2.707-1.088-1.107-.006-2.004.345-2.695 1.054-.691.708-1.037 1.626-1.049 2.754zm-19.405-.257c.907.664 1.363 1.53 1.38 2.582v.044c0 1.286-.507 2.348-1.453 3.067-.868.66-2.073 1.008-3.476 1.008-1.492 0-3.064-.42-4.427-1.177a1.362 1.362 0 01-.485-1.967 1.443 1.443 0 011.2-.626c.248 0 .49.06.704.18 1.042.577 2.107.882 3.076.882 1.532 0 1.695-.74 1.695-1.062v-.044c0-.648-.884-.953-2.332-1.378-.101-.033-.197-.06-.293-.087-.963-.267-1.965-.589-2.743-1.144-.924-.665-1.374-1.537-1.374-2.67v-.044c0-2.326 1.949-3.955 4.737-3.955 1.172 0 2.45.283 3.617.806.36.164.642.463.766.834a1.36 1.36 0 01-.113 1.106l-.006.005a1.449 1.449 0 01-1.256.714c-.214 0-.417-.043-.608-.13-.907-.41-1.763-.627-2.479-.627-.912 0-1.504.37-1.504.948v.043c0 .67 1.172 1.03 2.411 1.417l.242.076c.952.284 1.938.632 2.721 1.199z" fill="#F43397"></path></svg>
            </div>
            <div id="md_inputBox">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#a6a6a6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
            <input type="text" id="nav_input" placeholder="Try Saree,Kurti or Search by Product Code">
            </div>
        </div>
        
        <div id="nav_right">
            <div class="options" id="option_1"><a href="#"><svg viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" mr="8"
                class="mobile_svg" iconsize="20"><path class="mobile_svg2" fill-rule="evenodd" clip-rule="evenodd" d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488zM2.672 5.335v11.469h10.656V5.335H2.672zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 01-1.488-1.488zM.8 3.36A3.36 3.36 0 014.16 0h7.68a3.36 3.36 0 013.36 3.36v17.28A3.36 3.36 0 0111.84 24H4.16A3.36 3.36 0 01.8 20.64V3.36zm6 16.447a.6.6 0 000 1.2h2.4a.6.6 0 100-1.2H6.8z" fill="#333"></path></svg><span class="nav_option nav_option1">Download App</span></a>
                <div id="play_store">    
                    <p>Download From</p>
                    <a class="anchor"  href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow" target="_blank"><img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt=""> </a>
                    <a class="anchor"  href="https://apps.apple.com/us/app/meesho/id1457958492" target="_blank"><img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt=""> </a>
            </div>
        </div>
            <div class="vline"></div>
            <div class="options"><a href="#"><span class="nav_option">Become a Supplier</span></a></div>
            <div class="vline"></div>
            <div class="options" id="my_profile"><a href="#" ><svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="20" height="20" x="0" y="0" viewBox="0 0 24 24"  " style="enable-background:new 0 0 512 512" xml:space="preserve" class="user_icon"><g><path class="profile_svg" d="m15.7 11.717a6 6 0 1 0 -7.392 0 10.008 10.008 0 0 0 -6.308 9.283v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a10.008 10.008 0 0 0 -6.3-9.283zm-7.7-4.717a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm-4 14a8 8 0 0 1 16 0z" fill="#3a434a" data-original="#000000" class=""></path></g></svg><p class="p_text profile_text">Profile</p></a>
                <div id="hover_cart">
                    <span class="span">Hello User</span>
                    <p>To access your Meesho account</p>
                    <button id="sign_up_button">Sign Up</button>
                    <div class="h_line"></div>
                    <button id="my_orders">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="30" height="30" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(0.72,0,0,0.72,4.479999866485603,4.479999732971228)"><g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2"><path d="m16 1a6 6 0 0 0 -6 6v1h-.83a3.27 3.27 0 0 0 -3.27 3.12l-.79 16.45a3.28 3.28 0 0 0 3.27 3.43h15.24a3.28 3.28 0 0 0 3.27-3.43l-.79-16.45a3.27 3.27 0 0 0 -3.27-3.12h-.83v-1a6 6 0 0 0 -6-6zm-4 6a4 4 0 0 1 8 0v1h-8zm12.1 4.21.79 16.46a1.31 1.31 0 0 1 -.35.94 1.29 1.29 0 0 1 -.92.39h-15.24a1.29 1.29 0 0 1 -.92-.39 1.31 1.31 0 0 1 -.35-.94l.79-16.46a1.27 1.27 0 0 1 1.27-1.21h13.66a1.27 1.27 0 0 1 1.27 1.21z" fill="#000000" data-original="#000000" class=""></path><circle cx="11.36" cy="12.19" r="1" fill="#000000" data-original="#000000" class=""></circle><circle cx="20.64" cy="12.19" r="1" fill="#000000" data-original="#000000" class=""></circle></g></g></svg>&nbsp&nbsp<span class="span">My Orders</span>
                    </button>
                </div>
            </div>
            <div class="options"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a434a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg><p class="p_text">Cart</p></a></div>
        </div>
    </div>
    <div class="h_line"></div>

<!-- ---------2nd navbar------------ -->

    <div id="nav_2">
            <div id="hover_1">
                <span id="option_1">Women Ethnic</span>
                <div id="women_ethnic">
                    <div class="women_ethnic_options">
                        <span>All Women Ethnic</span>
                        
                        <span>View All</span>
                    </div>
                    <div class="women_ethnic_options">
                        <span>Sarees</span>
                        <span>All Sarees</span>
                        <span>Silk Sarees</span>
                        <span>Cotton Silk Sarees</span>
                        <span>Cotton Sarees</span>
                        <span>Georgette Sarees</span>
                        <span>Chiffon Sarees</span>
                        <span>Satin Sarees</span>
                        <span>Embroidered Sarees</span>
                    </div>
                    <div class="women_ethnic_options">
                        <span>kurties</span>
                        <span>All Kurties</span>
                        <span>Anarkali Kurties</span>
                        <span>Rayon Kurties</span>
                        <span>Cotton Kurties</span>
                        <span>Embroidered Kurties</span>
                    </div>
                    <div class="women_ethnic_options">
                        <span>Suits & Dress Material</span>
                        <span>All Suits & Dress Material</span>
                        <span>Cotton Suits</span>
                        <span>Embroidered Suits</span>
                        <span>Chanderi Suits</span>
                    </div>
                    <div class="women_ethnic_options">
                        <span>Other Ethnic</span>
                        <span>Blouses</span>
                        <span>Dupattas</span>
                        <span>Lehanga</span>
                        <span>Gown</span>
                        <span>Ethnic Bottomaewar</span>
                    </div>
                    <div class="women_ethnic_options">
                        <span>Kurta Sets</span>
                        <span>All Kurta Sets</span>
                    </div>
                </div>
            </div>
            <div id="hover_2">
                <span id="option_2">Women Western</span>
                <div id="women_western">
                    <div class="women_ethnic_options women_western_options">
                        <span>Topwear</span>
                        <span>Dresses</span>
                        <span>Tops</span>
                        <span>Sweaters</span>
                        <span>Jumpsuits</span>
                    </div>
                    <div class="women_ethnic_options women_western_options">
                        <span>Bottomaewar</span>
                        <span>Jeans</span>
                        <span>Jeggings</span>
                        <span>Palazzos</span>
                        <span>Shorts</span>
                        <span>Skirts</span>
                    </div>
                    <div class="women_ethnic_options women_western_options">
                        <span>Innerwear</span>
                        <span>Bra</span>
                        <span>Briefs</span>
                    </div>
                    <div class="women_ethnic_options women_western_options">
                        <span>Sleepwear</span>
                        <span>Nightsuits</span>
                        <span>Babydolls</span>
                    </div>
                </div>
            </div>
            <div id="hover_3">
                <span id="option_3">Jewellery & Accessories</span>
                <div id="jewellery">
                    <div class="women_ethnic_options jewellery_options">
                        <span>Jewellery</span>
                        <span>Jewellery Set</span>
                        <span>Mangalsutras</span>
                        <span>Earrings</span>
                        <span>Studs</span>
                        <span>Bangles</span>
                        <span>Necklaces</span>
                        <span>Rings</span>
                        <span>Anklets</span>
                    </div>
                    <div class="women_ethnic_options jewellery_options">
                        <span>Women Accessory</span>
                        <span>Bags</span>
                        <span>Watches</span>
                        <span>Hair Accessories</span>
                        <span>Sunglasses</span>
                        <span>Socks</span>
                    </div>
                </div>
            </div>
            <div id="hover_4">
                <span id="option_4">Men</span>
                <div id="men">
                        <div class="women_ethnic_options men_options">
                            <span>Top Wear</span>
                            <span>All Top Wear</span>
                            <span>Tshirts</span>
                            <span>Shirts</span>
                        </div>
                        <div class="women_ethnic_options men_options">
                            <span>Bottom Wear</span>
                            <span>Track Pants</span>
                            <span>Jeans</span>
                            <span>Trousers</span>
                        </div>
                        <div class="women_ethnic_options men_options">
                            <span>Men Accessories</span>
                            <span>All Men Accessories</span>
                            <span>Watches</span>
                            <span>Belts</span>
                            <span>Wallets</span>
                            <span>Jewellery</span>
                            <span>Sunglasses</span>
                            <span>Bags</span>
                        </div>
                        <div class="women_ethnic_options men_options">
                            <span>Men Footwear</span>
                            <span>Sports Shoes</span>
                            <span>Casual Shoes</span>
                            <span>Formal Shoes</span>
                            <span>Sandals</span>
                        </div>
                        <div class="women_ethnic_options men_options">
                            <span>Ethnic Wear</span>
                            <span>Men Kurtas</span>
                            <span>Ethnic Jackets</span>
                        </div>
                        <div class="women_ethnic_options men_options">
                            <span>Inner & Sleep Wear</span>
                            <span>All Inner & Sleep Wear</span>
                            <span>Vests</span>
                        </div>
                    </div>
                </div>
            <div id="hover_5">
                <span id="option_5">Beauty & Health</span>
                <div id="beauty">
                    <div class="women_ethnic_options beauty_options">
                        <span>Make Up</span>
                        <span>Face</span>
                        <span>Eyes</span>
                        <span>Lips</span>
                        <span>Nails</span>
                    </div>
                    <div class="women_ethnic_options beauty_options">
                        <span>Wellness</span>
                        <span>Sanitizers</span>
                        <span>Oral Care</span>
                        <span>Feminine Hygiene</span>
                    </div>
                    <div class="women_ethnic_options beauty_options">
                        <span>Skincare</span>
                        <span>Deodorants</span>
                    </div>
                </div>
            </div>
            <div id="hover_6">
                <span id="option_6">Bags & Footwear</span>
                <div id="bags">
                    <div class="women_ethnic_options bags_options">
                        <span>Women Footwear</span>
                        <span>Flats</span>
                        <span>Bellies</span>
                        <span>Juttis</span>
                    </div>
                    <div class="women_ethnic_options bags_options">
                        <span>Men Footwear</span>
                        <span>Sports Shoes</span>
                        <span>Casual Shoes</span>
                        <span>Formal Shoes</span>
                        <span>Sandals</span>
                    </div>
                    <div class="women_ethnic_options bags_options">
                        <span>Women Bags</span>
                        <span>All Women Bags</span>
                        <span>Handbags</span>
                        <span>Clutches</span>
                        <span>Slingbags</span>
                    </div>
                    <div class="women_ethnic_options bags_options">
                        <span>Men Bags</span>
                        <span>All Men Bags</span>
                        <span>Men Wallets</span>
                    </div>
                </div>
            </div>
            <div id="hover_7">
                <span id="option_7">Home & Kitchen</span>
                <div id="home_kitchen">
                    <div class="women_ethnic_options home_options">
                        <span>Home Furnishing</span>
                        <span>Bedsheets</span>
                        <span>Doormats</span>
                        <span>Curtains & Sheers</span>
                        <span>Cushions & Cushion Covers</span>
                        <span>Mattress Protectors</span>
                    </div>
                    <div class="women_ethnic_options home_options">
                        <span>Home Decor</span>
                        <span>All Home Decor</span>
                        <span>Stickers</span>
                        <span>Clocks</span>
                        <span>Showpieces</span>
                    </div>
                    <div class="women_ethnic_options home_options">
                        <span>kitchen & Dining</span>
                        <span>Kitchen Storage</span>
                        <span>Cookware & Bakeware</span>
                    </div>
                </div>
            </div>
            <div id="hover_8">
                <span id="option_8">Kids</span>
                <div id="kids">
                    <div class="women_ethnic_options kids_options">
                        <span>Toys & Accessories</span>
                        <span>Soft Toys</span>
                        <span>Footwear</span>
                        <span>Stationery</span>
                        <span>Watches</span>
                        <span>Bags & Backpacks</span>
                    </div>
                    <div class="women_ethnic_options kids_options">
                        <span>Infant 0-2 Years</span>
                        <span>Rompers</span>
                    </div>
                    <div class="women_ethnic_options kids_options">
                        <span>Boys & Girls 2+ Years</span>
                        <span>Dresses</span>
                    </div>
                    <div class="women_ethnic_options kids_options">
                        <span>Baby Care</span>
                        <span>All Baby Care</span>
                    </div>
                </div>
            </div>
            <div id="hover_9">
                <span id="option_9">Electronics</span>
                <div id="electronics">
                    <div class="women_ethnic_options electronics_options">
                        <span>Mobile & Accessories</span>
                        <span>All Mobile & Accessories</span>
                        <span>Smartwatches</span>
                        <span>Mobile Holders</span>
                        <span>Mobile cases and covers</span>
                    </div>
                    <div class="women_ethnic_options electronics_options">
                        <span>Appliances</span>
                        <span>All Appliances</span>
                        <span>Grooming</span>
                        <span>Home Appliances</span>
                    </div>
                </div>
            </div>
        </div> 
        <div class="h_line"></div>
</nav>`
}

export default navbar ;
