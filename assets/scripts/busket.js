let carts = document.querySelectorAll(".addtocart");


const PRODUCTS = [
    {
        id:0,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
        title: 'Field Roast Chao Cheese Creamy Original',
        price:19.90,
        inCart:0,
    },
    {
        id:1,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg',
        title: 'Blue Diamond Almonds Lightly Salted',
        price:10.58,
        inCart:0,
    },
    {
        id:3,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg',
        title: 'Nestle Original Coffee-Mate Coffee Creamer',
        price:11.99,
        inCart:0,
    },
    {
        id:4,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg',
        title: 'USDA Choice Angus Beef Stew Meat',
        price:49.99,
        inCart:0,
    },
    {
        id:5,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg',
        title: 'Vital Farms Pasture-Raised Egg Bites',
        price:25.00,
        inCart:0,
    },
    {
        id:6,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg',
        title: 'Werther’s Original Caramel Hard Candies',
        price:14.97,
    },
    {
        id:7,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5-346x310.jpg',
        title: 'All Natural Italian-Style Chicken Meatballs',
        price:19.50,
        inCart:0,
    },
    {
        id:8,
        image:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg',
        title: 'Angie’s Boomchickapop Sweet & Salty Kettle',
        price:3.29,
        inCart:0,
    }
];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", ()=>{
        cartNumbers(PRODUCTS[i]) 
        totalCost(PRODUCTS[i])
    })
}

function onLoadCartNumbres(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.serch_user_middle_last_3 span').textContent = productNumbers
    }
}

function cartNumbers(product) {
    console.log('salam', product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)

    if(productNumbers){

        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.serch_user_middle_last_3 span').textContent =productNumbers + 1
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.serch_user_middle_last_3 span').textContent = 1
    }
    setItems(product)
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.title] == undefined){
            cartItems = {
                ...cartItems,
                [product.title]: product
            }
        }
        cartItems[product.title].inCart += 1;
    }else{
        product.inCart = 1;
     cartItems = {
        [product.title] : product
    }
    }
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalCost(product){
//  console.log(product.price);
let cartCost = localStorage.getItem('totalCost')
if(cartCost != null){
    cartCost = parseInt(cartCost)
    localStorage.setItem('totalCost', cartCost + product.price)
}else{

    localStorage.setItem('totalCost', product.price)
}
}

function displayCart(){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.busket_container_product')

    console.log(cartItems);
    if(cartItems && productContainer){
        // productContainer.innerHTML = '';
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += `
            <div class="product">
            <i class="fa-solid fa-xmark"></i>
            <img src="${item.image}">
            <span> ${item.title}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity"></div>
            `
        })
    }
}
onLoadCartNumbres()
displayCart()