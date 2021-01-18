let carts = document.querySelectorAll(".add-cart");
let products = [
    {
        name:"White Hoodie",
        tag:"whitehoodie",
        price:30,
        incart:0
    },
    {
        name:"Black hoodie",
        tag:"blackhoodie",
        price:30,
        incart:0
    },
    {
        name: "Grey Hoodie",
        tag:"greyhoodie",
        price:35,
        incart:0,
    },
    {
        name:"Designer Hoodie",
        tag:"designerhoodie",
        price: 5,
        incart:00
    },
    {
        name: "Dark Grey Hoodie",
        tag:"darkgrey",
        price:30,
        incart:0,
    },
    {
        name:"Pink Designer Hoodie",
        tag:"pinkhoodie",
        price:50,
        incart:0,
    },
    {
        name:"Black Designer Hoodie",
        tag:"blackdesigner",
        price:50,
        incart:0
    },
    {
        name:"light black Hoodie",
        tag:"lightblack",
        price:30,
        incart:0
    },
    {
        name:"Red Eagle Designer Hoodie",
        tag:"redeagle",
        price:50,
        incart:0
    },
    {
        name:"Colored Designer Hoodie",
        tag:"coloredHoodie",
        price:50,
        incart:0
    },

];

for(let i = 0;i < carts.length;i++){
    carts[i].addEventListener("click",()=>{
        cartNumbers(products[i]);
    })
};

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers; 
    }
};

function cartNumbers(product){
    console.log(product)
    let productNumbers = parseInt(localStorage.getItem("cartNumbers"));
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1 );
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector(".cart span").textContent = 1;
    }
    
};
onLoadCartNumbers()
