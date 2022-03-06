function checkOut(){
    var total=0;
    let cartItem=JSON.parse(localStorage.getItem("cart_item"));
    document.getElementById("box5").innerHTML="";
    cartItem.map((elem,index)=>{
        total+=elem.quant*elem.price;
        let div1=document.createElement("div");
        div1.setAttribute("id","mid");
    
        let div2=document.createElement("div");
        div2.setAttribute("id","mid1")
        let img1 = document.createElement("img");
        img1.src=elem.image
        img1.style.height="107px";
        img1.style.width="100px";
    
        let p1=document.createElement("p");
        p1.textContent=elem.name
        p1.style.fontSize="16px";
        p1.style.fontWeight="bolder";
        p1.style.color="#9c9c9c";
        p1.style.marginLeft="10px";

        let div3= document.createElement("div");
        div3.setAttribute("id","mid2");
        let img3=document.createElement("img");
        img3.src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/2x/external-remove-interface-dreamstale-lineal-dreamstale.png";
        img3.style.height="20px";
        img3.style.width="20px";
        img3.style.marginLeft="29px";
        img3.style.marginTop="15px";
        let p2 = document.createElement("div");
        p2.textContent= elem.quant;
        p2.style.fontSize="22px";
        p2.style.marginLeft="8px";
        p2.style.marginTop="15px";
        let img4=document.createElement("img");
        img4.src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png";
        img4.style.height="20px";
        img4.style.width="20px";
        img4.style.marginLeft="8px";
        img4.style.marginTop="15px";
    
        let img5=document.createElement("img");
        img5.src="https://img.icons8.com/ios-glyphs/2x/multiply.png";
        img5.style.height="14px";
        img5.style.width="14px";
        img5.style.marginLeft="8px";
        img5.style.marginTop="19px";
    
        let p3 = document.createElement("div");
        p3.textContent= `Rs. ${elem.price}`;
        p3.style.fontSize="18px";
        p3.style.color="#9c9c9c";
        p3.style.marginLeft="11px";
        p3.style.marginTop="15px";
        // console.log(typeof(elem.price))
        let p4 = document.createElement("div");
        p4.textContent= `Rs. ${elem.quant*elem.price}`;
        p4.style.fontSize="20px";
        p4.style.color="#989898";
        p4.style.fontWeight="bolder";
        p4.style.marginLeft="11px";
        p4.style.marginTop="15px";
    
        let img6=document.createElement("img");
        img6.id="delIcon"
        img6.src=" https://img.icons8.com/carbon-copy/2x/filled-trash.png";
        img6.style.height="25px";
        img6.style.width="25px";
        img6.style.marginLeft="60px";
        img6.style.marginTop="15px";
        img6.onclick=()=>{
            cartItem.splice(index,1);
            console.log(cartItem);
            localStorage.setItem("cart_item",JSON.stringify(cartItem));
            checkOut();
        }
        let div7=document.createElement("div");
        div7.setAttribute("id","hr1");
    

        div3.append(img3,p2,img4,img5,p3,p4,img6);
    
        div2.append(img1,p1);
        div1.append(div2,div3);
        document.querySelector("#box5").append(div1,div7);
    })
    document.querySelector(".tot").textContent=`Rs. ${total}`;
    document.querySelector(".tot2").textContent=`Rs. ${total}`;

}

checkOut();
document.getElementById("t1").onclick=()=>{
    localStorage.removeItem("cart_item");
    document.querySelector("#box5").innerHTML="";
    document.querySelector(".tot").textContent=`Rs. ${0}`;
    document.querySelector(".tot2").textContent=`Rs. ${0}`;
}
