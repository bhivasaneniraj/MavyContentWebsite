(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);



// Get the logo element
const logo = document.getElementById('logo');

// Listen for the scroll event
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {  // Change the logo after scrolling 50px down
    logo.src = 'img/mavy-logo.png';
  } else {
    logo.src = 'img/mavy-logo-change.png';  // Revert back when you scroll up
  }
});


// Add Customer

function updateCounter() {
    let currentValue = parseInt($("#counter").text().replace(/,/g, ''));
    let randomIncrement = Math.floor(Math.random() * 10); // Random number between 0-9
    let newValue = currentValue + randomIncrement;
    
    $("#counter").text(newValue.toLocaleString()); // Update counter with formatted number
}

// Run every hour (3600000 ms)
setInterval(updateCounter, 3600000);



// Payment Increasing

function updatePaymentsCounter() {
    let currentValue = parseInt($("#paymentsCounter").text().replace(/,/g, ''));
    let randomIncrement = Math.floor(Math.random() * 10); // Random number between 0-9
    let newValue = currentValue + randomIncrement;
    
    $("#paymentsCounter").text(newValue.toLocaleString()); // Update counter with formatted number
}

// Run every minute (60000 ms)
setInterval(updatePaymentsCounter, 60000);



// year increase based on year logic
document.getElementById("year").textContent = new Date().getFullYear();