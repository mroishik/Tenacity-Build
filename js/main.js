
   
$(document).ready(function(){
    $('.testimonial-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4, // Change this to 4
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3 // Adjust number of slides to show for smaller screens if needed
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2 // Adjust number of slides to show for even smaller screens if needed
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1 // Adjust number of slides to show for mobile screens if needed
                }
            }
        ]
    });
});
