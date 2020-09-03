// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     rtl:true,
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:1,
//         },
//         1000:{
//             items:1,
//             loop:true,
//         }
//     }
// })
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$(document).ready(function(){
    $(".navbar ul li a").on("click",function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
})