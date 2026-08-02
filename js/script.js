// ======================================
// Teaching Portfolio - script.js
// ======================================

$(document).ready(function () {

    // ==============================
    // Smooth Scroll
    // ==============================
    $('.nav-link').on('click', function (e) {

        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {

            $('html, body').animate({

                scrollTop: target.offset().top - 70

            }, 700);

        }

    });


    // ==============================
    // Close Mobile Navbar
    // ==============================
    $('.navbar-collapse a').click(function () {

        $(".navbar-collapse").collapse('hide');

    });


    // ==============================
    // Active Navbar Link
    // ==============================
    $(window).scroll(function () {

        var scrollDistance = $(window).scrollTop();

        $('section').each(function () {

            if ($(this).position().top - 120 <= scrollDistance) {

                var sectionID = $(this).attr('id');

                $('.navbar-nav a').removeClass('active');

                $('.navbar-nav a[href="#' + sectionID + '"]').addClass('active');

            }

        });

    });

});


// ======================================
// Scroll To Top Button
// ======================================

// Create Button

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";

scrollButton.id = "scrollTopBtn";

document.body.appendChild(scrollButton);


// Show / Hide

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollButton.style.display = "block";

    }

    else {

        scrollButton.style.display = "none";

    }

});


// Scroll Top

scrollButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ======================================
// Navbar Shadow
// ======================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});


// ======================================
// Simple Fade Animation
// ======================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});