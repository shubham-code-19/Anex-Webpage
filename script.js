let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        if (!nav.classList.contains("nav-fixed")) {
            nav.classList.add("nav-fixed");
        }
    } else {
        if (nav.classList.contains("nav-fixed")) {
            nav.classList.remove("nav-fixed");
        }
    }
});








var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});



var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 10
    //     },
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 640px
    //     640: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     // when window width is >= 768px
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 30
    //     },
    //     // when window width is >= 1024px
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 30
    //     }
    // }
});



// Faq functionality /


const questions = document.querySelectorAll(".question");

let activeQuestion = null; 

questions.forEach((element) => {
    const answer = element.nextElementSibling;
    const questionArrow = element.querySelector(".questionArrow");
    element.addEventListener("click", () => {
        if (activeQuestion && activeQuestion !== element) {
            const activeAnswer = activeQuestion.nextElementSibling;
            const activeArrow = activeQuestion.querySelector(".questionArrow");

            activeQuestion.classList.remove("faqQuestion");
            if (activeAnswer) {
                activeAnswer.classList.remove("faqAnswer");
            }
            if (activeArrow) {
                activeArrow.classList.remove("fa-angle-down");
            }
        }

        element.classList.toggle("faqQuestion");
        if (answer) {
            answer.classList.toggle("faqAnswer");
        }
        if (questionArrow) {
            console.log("dorn")
            questionArrow.classList.toggle("fa-angle-down");
        }

        activeQuestion = element.classList.contains("faqQuestion") ? element : null;
    });
});





// nav 
const nav_menu=document.querySelector("#nav_menu")
const sideBars=()=>{
    nav_menu.classList.toggle("navRight")
}
