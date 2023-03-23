$(document).ready(function() {	
    const swiper = new Swiper('.columned-slider-inner', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        slidesPerView: 3,
        spaceBetween: 0,
		loop: true,

        breakpoints: {
            1250: {
                slidesPerView: 3,
            },
            1050: {
                slidesPerView: 3,
            },
            750: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            }
        }
    });
});