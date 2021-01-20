let carts = document.querySelectorAll(".add-cart");
let products = [
    {
        name:"White Hoodie",
        tag:"whitehoodie",
        price:30,
        inCart:0
    },
    {
        name:"Black hoodie",
        tag:"blackhoodie",
        price:30,
        inCart:0
    },
    {
        name: "Grey Hoodie",
        tag:"greyhoodie",
        price:35,
        inCart:0,
    },
    {
        name:"Designer Hoodie",
        tag:"designerhoodie",
        price: 50,
        inCart:00
    },
    {
        name: "Black Hoodie",
        tag:"blackyellow",
        price:30,
        inCart:0,
    },
    {
        name:"Pink Designer Hoodie",
        tag:"pinkhoodie",
        price:50,
        inCart:0,
    },
    {
        name:"Black Designer Hoodie",
        tag:"blackdesigner",
        price:50,
        inCart:0
    },
    {
        name:"Dark grey Hoodie",
        tag:"darkgrey",
        price:30,
        inCart:0
    },
    {
        name:"Red Eagle Designer Hoodie",
        tag:"redeagle",
        price:50,
        inCart:0
    },
    {
        name:"Colored Designer Hoodie",
        tag:"coloredhoodie",
        price:50,
        inCart:0
    },

];

for(let i = 0;i < carts.length;i++){
    carts[i].addEventListener("click",()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
};

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers; 
    }
};

function cartNumbers(product){
    // console.log(product)
    let productNumbers = parseInt(localStorage.getItem("cartNumbers"));
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1 );
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector(".cart span").textContent = 1;
    }
 
    setItems(product);
};

function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    
    if(cartItems != null){
        if (cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
          product.inCart = 1;
          cartItems = {
            [product.tag]: product
          };
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));

}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
};

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".products")
    let cartCost = localStorage.getItem("totalCost");

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="assets/${item.tag}.jpeg">
                <span>${item.name}</span> 
            </div>
            <div class="price">$${item.price}.00</div>
            <div class="quantity">
                <ion-icon name="chevron-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="chevron-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });
        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total            
            </h4>
            <h4 class="basketTotal">
                $${cartCost}.00
            </h4>
        
        </div>
        `
    }
};



onLoadCartNumbers();
displayCart();
