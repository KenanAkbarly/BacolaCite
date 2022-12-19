// $(".carousel").swipe({

//     swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  
//       if (direction == 'left') $(this).carousel('next');
//       if (direction == 'right') $(this).carousel('prev');
  
//     },
//     allowPageScroll:"vertical"
  
//   });

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const body = document.querySelector("body");


const triggerHamburger = document.querySelector(".hamburger_trigger");
const modalHamburger = document.querySelector(".modal_Hmaburger");
const closeHamburgerButton = document.querySelector('.close_buttonHamburger');

const iconHambuergerMenu = document.querySelector('.hamburger_icon');
const hamburgerContent = document.querySelector('.hamburger_to_right');
iconHambuergerMenu.addEventListener('click', () =>{
    if(hamburgerContent.style.transform = "translate(-1500px, 0)"){
        // hamburgerContent.style.display = 'none'
        hamburgerContent.style.transform = 'translate(0px, 0px)';
        hamburgerContent.style.transition = 'all 0.4s ease-out';

    }
    else{
        // hamburgerContent.style.display = 'block'
        hamburgerContent.style.transform = 'translate(0px, 0px)';
        hamburgerContent.style.transition = 'all 0.4s ease-out';
        
        // body.style.backgroundColor= 'black'
        // body.style.opacity= '0.3'
        hamburgerContent.style.opacity= '1'
    }
    console.log('salmon');
})
const closeHamburgerMenu = document.querySelector('.hamburger_close');
closeHamburgerMenu.addEventListener('click', () =>{
    console.log('salam');
    // hamburgerContent.style.display = 'none'
    hamburgerContent.style.transform = "translate(-300px, 0)"
    body.style.backgroundColor= 'white'
    body.style.opacity= '1'
})

function toggleModal() {
    modal.classList.toggle("modal-active");
    body.classList.toggle('blur')
    console.log('salam');
}

trigger.addEventListener("click", toggleModal);

closeButton.addEventListener("click", ()=>{
    if(modal.classList.contains("modal-open")){
        modal.classList.remove("modal-open");
    }
    else{
        modal.classList.add("modal-open");
    }
});

function toggleModalHamburger(){
    modalHamburger.classList.toggle("modal-active");
    console.log("Toggling modal")
}
triggerHamburger.addEventListener("click", toggleModalHamburger);
closeHamburgerButton.addEventListener("click", ()=>{
    if(modalHamburger.classList.contains("modal-open")){
        modalHamburger.classList.remove("modal-open");
    }
    else{
        modalHamburger.classList.add("modal-open");
    }
});
// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }


// closeButton.addEventListener("click", toggleModal);

// console.log(window);


// window.addEventListener("click", ()=>{
//     if(modal.classList.contains("modal-open")){
//         modal.style.display = "none";
//     }
   
    
// });
const allCagagories = document.querySelector('.catagories_leftMain')
const x=  document.querySelector('.products_header_leftMain')
allCagagories.addEventListener("click",()=>{
 if(document.querySelector('.products_header_leftMain').style.display === 'none'){
    document.querySelector('.products_header_leftMain').style.display = 'block'
 }else{
    document.querySelector('.products_header_leftMain').style.display = 'none'
 }
})

const allCagagoriesHmaburger = document.querySelector('.catagories_left')
const xHam=  document.querySelector('.products_header_left')
allCagagoriesHmaburger.addEventListener("click",()=>{
 if(document.querySelector('.products_header_left').style.display === 'none'){
    document.querySelector('.products_header_left').style.display = 'block'
 }else{
    document.querySelector('.products_header_left').style.display = 'none'
 }
})


// function displayCart(Prod){
//     let j =0;
//     if(cart.length == 0){
//         document.querySelector('.serch_user_middle_last_2_top_hidden_element').innerHTML = `
//         <div class="serch_user_middle_last_2_top_hidden_element_top">
//         <div class="basket_svg_parent">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.028 280.028" width="280.028" height="80.028">
//             <path class="c-01" d="M35.004 0h210.02v78.758H35.004V0z" fill="#d07c40"></path>
//             <path class="c-02"
//               d="M262.527 61.256v201.27c0 9.626-7.876 17.502-17.502 17.502H35.004c-9.626 0-17.502-7.876-17.502-17.502V61.256h245.025z"
//               fill="#f4b459"></path>
//             <path class="c-03"
//               d="M35.004 70.007h26.253V26.253L35.004 0v70.007zm183.767-43.754v43.754h26.253V0l-26.253 26.253z"
//               fill="#f4b459"></path>
//             <path class="c-04"
//               d="M61.257 61.256V26.253L17.503 61.256h43.754zm157.514-35.003v35.003h43.754l-43.754-35.003z"
//               fill="#e3911c"></path>
//             <path class="c-05"
//               d="M65.632 105.01c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c0-5.25-3.5-8.751-8.751-8.751zm148.764 0c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c.001-5.25-3.501-8.751-8.751-8.751z"
//               fill="#cf984a"></path>
//             <path class="c-06"
//               d="M65.632 121.637c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001-.001.874-6.126 6.124-6.126z"
//               fill="#cf984a"></path>
//             <path class="c-07"
//               d="M65.632 112.886c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001 0 .874-6.126 6.124-6.126z"
//               fill="#fdfbf7"></path>
//           </svg>
//         </div>
//         <p>No products in the cart</p>
//       </div>
//       <div class="serch_user_middle_last_2_top_hidden_element_bottom">
//         <p>We reduce shipping prices to only 2.49 $!</p>
//       </div>
//         `;
//     }
//     else{
//         document.querySelector('.serch_user_middle_last_2_top_hidden_element').innerHTML = cart.map((items)=>{
//             var{image,title,price} = items
//             return(
//                 `<div class="cart_item">
//                 <div class="row_img">
//                 <img class="rowimg" src="${image}"
//                 </div>
//                 <p style = "font-size:12px;">${title}</p>
//                 <h2 style ="font-size:15px;">$${price}</h2>
//                 `
//                 +
//                 "<i class ='fa-solid fa-trash' onclinc='delElement("+(j++) +")'></i></div>"
//             )
//         }).join('');
//     }
// }















$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


