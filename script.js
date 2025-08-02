


var swiper = new Swiper('.myswiper', {
    slidesPerView:4,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        0:{
            slidesPerView:2,
            spaceBetween:30,
        },
        500:{
            slidesPerView:2,
            spaceBetween:30,
        },
        768:{
            slidesPerView:3,
            spaceBetween:30,
        },
        900:{
            slidesPerView:3,
            spaceBetween:30,
        },
        1280:{
            slidesPerView:4,
            spaceBetween:30,
        },

    },

});

var swiper = new Swiper(".tstswiper",{
    slidesPerView:1,
    pagination:{
        el:".swiper-pagination",
    },
    loop:true,
    autoplay:true,

});