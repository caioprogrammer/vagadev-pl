console.log("Estou funcionando");

const buyButtons = document.querySelectorAll('.buy-button');
const cartQuantity = document.querySelector('.cart span');
var $closeModal = $('.close-modal')
var $modal = $('.modal');


buyButtons.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('active');
    $modal.fadeIn()
    $('html,body').animate({scrollTop:0},0);

    cartQuantity.innerHTML += 1;
  })
})


$closeModal.on('click', function(){
  $modal.fadeOut()
})


$(document).ready(function () {
var $status = $(".pagingInfo");
var $slickElement = $(".hero__wrapper");

var $slickProduct = $(".product-wrapper");

$slickElement.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + "/" + slick.slideCount);
  }
);

$slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<svg class="slick-next" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16_46)"><path d="M1.096 0L-0.0039978 1.1L7.829 8.933L-0.0039978 16.766L1.096 17.866L9.477 9.485L10.001 8.937L9.477 8.389L1.096 0Z" fill="white"/></g><defs><clipPath id="clip0_16_46"><rect width="10" height="17.857" fill="white"/></clipPath></defs></svg>',
    prevArrow:
      '<svg class="slick-prev" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16_44)"><path d="M8.905 0L0.524 8.381L0 8.929L0.524 9.477L8.905 17.858L10.005 16.758L2.166 8.929L9.999 1.096L8.905 0Z" fill="white"/></g><defs><clipPath id="clip0_16_44"><rect width="10" height="17.857" fill="white"/></clipPath></defs></svg>',
  });


$slickProduct.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:
      '<svg class="slick-next product-arrow" width="15" height="26" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16_46)"><path d="M1.096 0L-0.0039978 1.1L7.829 8.933L-0.0039978 16.766L1.096 17.866L9.477 9.485L10.001 8.937L9.477 8.389L1.096 0Z" fill="#000"/></g><defs><clipPath id="clip0_16_46"><rect width="10" height="17.857" fill="white"/></clipPath></defs></svg>',
    prevArrow:
      '<svg class="slick-prev product-arrow" width="15" height="26" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16_44)"><path d="M8.905 0L0.524 8.381L0 8.929L0.524 9.477L8.905 17.858L10.005 16.758L2.166 8.929L9.999 1.096L8.905 0Z" fill="#000"/></g><defs><clipPath id="clip0_16_44"><rect width="10" height="17.857" fill="white"/></clipPath></defs></svg>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
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
      ]
  });
});

if($(window).width() < 768 ) {
  const menuOpener = document.querySelector('.header__menu');
  const menu = document.querySelector('.header__nav-mobile');
  const closeMenu = document.querySelector('.closeMenuMobile')

  menuOpener.addEventListener('click', () => {
    menu.classList.add('active')
  })

  closeMenu.addEventListener('click', ()=> {
    menu.classList.remove('active')
  })
}