// sign in part 

const signInBtn = document.querySelector(".fa-sign-in-alt");
const signMenu = document.querySelector(".sign-background");
const signUpBtn = document.querySelector(".new");
const signin = document.querySelector(".sign-in");
const signup = document.querySelector(".sign-up");
const toggle = document.querySelector(".bars");
const sub_Menu = document.querySelector(".menu-background");

signInBtn.addEventListener("click",()=>{
    signMenu.classList.toggle("open");
    signin.classList.remove("open");
    signup.classList.remove("open");
});

signUpBtn.addEventListener("click",()=>{
    signup.classList.toggle("open");
    signin.classList.toggle("open");
});

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("open")
    sub_Menu.classList.toggle("open")
});


// slick slider animation 


$('.single-banner').slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:false,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// products part 

$('.products-carts').slick({
  dots:true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// interview part 

const viewAll = document.querySelector(".interview-btns");
const interview = document.querySelector(".interview-boxes");

viewAll.addEventListener("click", ()=>{
  interview.classList.toggle("open");
})