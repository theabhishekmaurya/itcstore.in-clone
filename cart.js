
function addCart(){
    
    var total=0, items=0;
    let cartItem=JSON.parse(localStorage.getItem("cart_item"));
    document.getElementById("box2").innerHTML="";
    cartItem.map((elem,index)=>{
        total+=elem.quant*elem.price;
        items+=elem.quant;
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        div1.setAttribute("id","mid1");
    
        let img1 = document.createElement("img");
        img1.setAttribute("id","mid2");
        img1.src=elem.image
        let div2 = document.createElement("div");
        div2.setAttribute("id","mid3");
    
        let div3 = document.createElement("div");
        div3.setAttribute("id","name");
        let p = document.createElement("div");
        p.textContent=elem.name;
        p.style.fontSize="15px";
    
        let img2 =document.createElement("img");
        img2.src="https://img.icons8.com/carbon-copy/2x/filled-trash.png";
        img2.style.cursor="pointer";
        img2.style.height="25px";
        img2.style.width="25px";
        img2.id="delIcon"
        img2.onclick=()=>{
            cartItem.splice(index,1);
            console.log(cartItem);
            localStorage.setItem("cart_item",JSON.stringify(cartItem));
            addCart();
        }


        let div4=document.createElement("div");
        div4.setAttribute("id","price");
        let div5 = document.createElement("div");
        div5.setAttribute("id","value");
        let img3=document.createElement("img");
        img3.src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/2x/external-remove-interface-dreamstale-lineal-dreamstale.png";
        img3.style.height="25px";
        img3.style.width="25px";
        let p1 = document.createElement("div");
        p1.textContent= 1;
        p1.style.fontSize="20px";
        p1.style.marginLeft="8px";
        let img4=document.createElement("img");
        img4.src="https://cdn-icons-png.flaticon.com/128/992/992651.png";
        img4.style.height="25px";
        img4.style.width="25px";
        img4.style.marginLeft="8px";
    
    
    
        let div6 = document.createElement("div");
        div6.setAttribute("id","paisa");
        let p2 = document.createElement("div");
        p2.textContent= elem.quant;
        p2.style.fontSize="20px";
        p2.style.marginLeft="8px";
    
        let img5=document.createElement("img");
        img5.src="https://img.icons8.com/ios-glyphs/2x/multiply.png";
        img5.style.height="24px";
        img5.style.width="24px";
        img5.style.marginLeft="1px";
        img5.style.marginTop="3px"
    
        let p3 = document.createElement("div");
        p3.textContent= `Rs. ${elem.price}`;
        p3.style.fontSize="20px";
        p3.style.marginLeft="8px";
    
        let div7=document.createElement("div");
        div7.setAttribute("id","hr");
    
    
    
    
    div6.append(p2,img5,p3);
    div5.append(img3,p1,img4);
    div4.append(div5,div6);
    div3.append(p,img2);
    div2.append(div3,div4);
    div1.append(img1,div2);
    
    div.append(div1);
    
    
    
    document.querySelector("#box2").append(div,div7);
})
document.getElementById("text").textContent=`My Cart (${items} items)`

document.getElementById("p6").textContent=total;
document.querySelector("#nob1>div").textContent=total;
}
addCart();

