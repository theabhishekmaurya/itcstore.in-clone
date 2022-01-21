function navbar(){


    return `
    <div id="header">
    <div id="logo">
        <img src="https://cdn.shopify.com/s/files/1/0173/7644/4470/files/ITC_store_Logo_543d9c07-883c-492f-b0dd-7933eba6dad4.jpg?v=1636698157" alt="">
    </div>
    <div id="search">
        
        
        <input id="searching" type="text" placeholder="Search brands, products and more">
        <div  id="search_logo"><i class="fas fa-search"></i></div>
        
    </div>
    <div id="login">Login / Register</div>
    <div id="cart-logo"><i class="fas fa-shopping-cart"></i></div>
</div>
<div id="blue_line">
    <div id="items">
        <h3 id="home">HOME </h3> 
        <h3>|</h3>
        <h3 id="foods">FOODS </h3>
        <h3>|</h3>
        <h3 id="personal_care">PERSONAL CARE </h3>
        <h3>|</h3>
        <h3 id="stat">STATIONARY</h3>
        <h3>|</h3>
        <h3 id="match">MATCHES&AGARBATTI</h3>
        <h3>|</h3>
        <h3 id="shb">SHOP BY BRANDS </h3>
        <h3>|</h3>
        <h3>SHOP ALL </h3>
        <h3>|</h3>
        <h3>NEW LAUNCH </h3>

</div>
<div id="food_box" class="box_food">
    <div id="box_1">
        <h4> BISCUITS & CAKES</h4>
        <p>Sunfeast Marie Light</p>
        <p> Sunfeast Dark Fantasy</p>
        <p>Sunfeast Farmlite</p>
        <p>Sunfeast Bounce</p>
        <p>Sunfeast Caker</p>
        <p>Sunfeast Mom's Magic</p>
        <p>Sunfeast All Rounder</p><br>
        <h4>AASHIRVAAD INSTANT MIX</h4>
        <h4>CHOCOLATES</h4>
        <p>Fabelle Chocolates</p>
        <p>Fabelle Luxury Chocolates</p>
        <h4>GIFT CENTER</h4>
    </div>
    <div id="box_2">
        <h4>NOODLES & PASTA</h4>
        <p>Sunfeast YiPPee! Pasta</p>
        <p>Sunfeast YiPPee! Noodles</p>
        <h4>BEVERAGES</h4>
        <p> B Natural</p>
        <p> Sunbean Gourmet Coffee</p>
        <p> Sunbean Beaten Caffe</p>
        <p> Sunfeast Milkshakes</p>
        <h4>READY TO EAT</h4>
        <p>Kitchens of India</p>
        <p>Aashirvaad Instant Meals</p>
        <p>ITC Master Chef Spreads & Dips</p>
    </div>
    <div id="box_3">
        <h4>STAPLES</h4>
        <p></p>
        <p>Aashirvaad Atta</p>
        <p>Aashirvaad Spices</p>
        <p>Aashirvaad Masalas</p>
        <p>Aashirvaad Salt</p>
        <p>Aashirvaad Organic Atta and Dals</p>
        <p>Aashirvaad Vermicelli</p>
        <p>ITC Master Chef Cooking Paste</p>
        <p>ITC Master Chef All-Purpose Gravies</p>
        <p>Sunrise Pure</p>
        <h4>FROZEN FOODS</h4>
        <p>ITC Master Chef Frozen Snacks</p>
        <p>ITC Master Chef Frozen Prawns</p>
        <p>Farmland Frozen Vegetables</p>
    </div>
    <div id="box_4">
        <h4>SNACKS</h4>
        <p>Bingo! Mad Angles</p>
        <p>Bingo! Original Style</p>
        <p>Bingo! Potato Chips</p>
        <p>Bingo! Tedhe Medhe</p>
        <h4>DAIRY</h4>
        <p>Aashirvaad Svasti Ghee</p>
        <p>Aashirvaad Svasti Milk Products</p>
        <h4>CONFECTIONERY</h4>
        <p>Jelimals</p>
        <p>Candyman Fantastik</p>
        <p>Candyman Choco Double Eclairs</p>
    </div>
</div>
<div id="product_box" class="box_food">
    <div id="box_1">
        <h4>SAVLON</h4>
        <p></p>
        <p>Antiseptic Liquid</p>
        <p>Body wash</p>
        <p>Surface Disinfectant Spray</p>
        <p>FFP2 S Masks</p>
        <p>Germ Protection Wipes</p>
        <p>Hand Sanitizer</p>
        <p>Handwash</p>
        <p>Savlon Laundry Disinfectant</p>
        <p>Home Cleaners</p>
        <p>Soaps</p>
        <h4>VIVEL</h4>
        <p>Vivel Body wash</p>
        <p>Vivel Soaps</p>
    </div>
    <div id="box_2">
        <h4>CHARMIS</h4>
        <p>Creams</p>
        <p>Facewash</p>
        <p>Serum</p>
        <p>Hand Cream</p><br>
        <h4>ESSENZA DI WILLS</h4>
        <p>Luxury Perfume</p>
        <p>Luxury Deodorant</p>
        <p>Luxury Soaps</p><br>
        <h4>NIMWASH</h4>
        <p>Vegetable & Fruit Wash</p>
    </div>
    <div id="box_3">
        <h4>DERMAFIQUE</h4>
        <p>Anti Ageing</p>
        <p>Body Care</p>
        <p>Cleanser</p>
        <p>Face Mask</p>
        <p>Hydration</p>
        <p>Skin Toner</p>
        <p>Sun Care</p><br>
        <h4>NIMEASY</h4>
        <p>Dishwash Liquid</p><br>
        <h4>NIMYLE</h4>
        <p>Floor Cleaner</p>
    </div>
    <div id="box_4">
        <h4>ENGAGE</h4>
        <p>Fragrance Finder</p>
        <p>Cologne</p>
        <p>Deodorant</p>
        <p>Premium Perfumes</p>
        <p>Perfume Spray</p>
        <p>Pocket Perfume</p><br>
        <h4>FIAMA</h4>
        <p>Body wash & Shower Gel</p>
        <p>Handwash</p>
        <p>Soaps</p>
        <h4>SHOWER TO SHOWER</h4>
        <p>Talc</p>
    </div>

</div>
<div id="boxbybrand" class="box_food">
    <div id="box_1">
        
        <p></p>
        <h4>FOODS</h4>
        <p>Aashirvaad Atta</p>

        <p>Sunfeast YiPPee!</p>
        <p>Pasta</p>

        <p>Bingo! Mad Angles</p>

        <p>Aashirvaad Spices</p>

        <p>Bingo! Tedhe Medhe</p>

        
        <p>Sunfeast Bounce</p>

        <p>Sunfeast Bounce</p>
        
        <p>Sunfeast Farmlite</p>

       
        <p>Candyman Fantastik</p>

        <p>Jelimals</p>

       

        <p>ITC Master Chef</p>
        <p>Cooking paste</p>


        <p>Farmland Frozen</p>
        <p>Vegetables</p>

        
        <p>Aashirvaad Instant</p>
        <p>Meals</p>

        <p>ITC Master Chef All-</p>
        <p>Purpose Gravies</p>

        <p>Sunfeast Mom's Magic</p>
    <p>Aashirvaad Vermicelli</p>




    </div>
    <div id="box_2">
        <p>B Natural</p>
        <p>Aashirvaad Svasti ghee</p>
        <p>Sunfeast Dark Fantasy</p>
        <p>Aashirvaad Instant Mixes</p>
        <p>Sunfeast Marie Light</p>
        <p>Fabelle Chocolates</p>
        <p>Fabelle luxury Chocolates</p>
        <p>Sunfeast Milkshakes</p>
        <p>ITC Master Chef Frozen Snacks</p>
        <p>Sunbean Beaten Caffe</p>
        <p>Aashirvaad Organic Atta and Dals</p>
        <p>Sunrise Pure</p>
        <p>Aashirvaad SvastiMilk Products</p>


    </div>
    <div id="box_3">
        <p>Bingo! Potato Chips</p>
        <p>Sunfeast YiPPee!Noodles</p>
        <p>Aashirvaad Salt</p>
        <p>Bingo! Original Style</p>
        <p>Kitchens Of India</p>
        <p>Candyman Choco</p>
        <p>Double Eclairs</p>
        <p>Sunbean Gourmet Coffee</p>
        <p>ITC Masterchef Frozen Prawns</p>
        <p>Aashirvaad Masalas</p>
        <p>ITC Master Chef Spreads & Dips</p>
        <p>Sunfeast Caker</p>
        <p>Sunfeast All Rounder</p>


    </div>
    <div id="box_4">
        <h4>PERSONAL CARE</h4>
        <p>Charmis</p>
        <p>Engage</p>
        <p>Vivel</p>
        <p>Nimwash</p>
        <p>Nimeasy</p>
        <h4>STATIONERY</h4>
        <p>Classmate</p>
        <h4>MATCHES & AGARBATTI</h4>
        <p>Homelites</p>
    </div>
    <div id = "box_5">
        <p>Savlon</p>
        <p>Nimyle</p>
        <p>Essenza Di Wills</p>
        <p>Dermafique</p>
        <p>Shower to Shower</p>
        <p>PaperKraft</p>
        <p>Mangaldeep</p>
    </div>
</div>
<div id="statitonary_prod">
    <p>Classmate</p> 
    <p>PaperKraft</p>
</div>
<div id="match_box">
    <p>Homelites</p>
     <p>Mangaldeep</p>
</div>
</div>
    
    `
}

export default navbar;