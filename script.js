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


// Select all question elements
const questions = document.querySelectorAll(".question");

let activeQuestion = null; // Track the currently active question

questions.forEach((element) => {
    // Select the corresponding answer and arrow elements
    const answer = element.nextElementSibling; // Assuming the answer element is the next sibling
    const questionArrow = element.querySelector(".questionArrow"); // Assuming the arrow is within the question

    // Add a click event listener to each question element
    element.addEventListener("click", () => {
        // If there's an active question and it's not the current one, reset it
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

        // Toggle the clicked question's classes
        element.classList.toggle("faqQuestion");
        if (answer) {
            answer.classList.toggle("faqAnswer");
        }
        if (questionArrow) {
            questionArrow.classList.toggle("fa-angle-down");
        }

        // Update the active question
        activeQuestion = element.classList.contains("faqQuestion") ? element : null;
    });
});





// nav 
const nav_menu=document.querySelector("#nav_menu")
const sideBars=()=>{
    console.log(nav_menu)
    nav_menu.classList.toggle("navRight")
}
