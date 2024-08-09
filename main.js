document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".slider-container");
    const buttons = document.querySelectorAll(".nav-buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const slideNumber = button.getAttribute("data-slide");
            const targetSlide = document.getElementById(`slide${slideNumber}`);
            targetSlide.scrollIntoView({ behavior: 'smooth' });
        });
    });

    scrollContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            scrollContainer.scrollBy(0, window.innerHeight);
        } else {
            scrollContainer.scrollBy(0, -window.innerHeight);
        }
    });

    // Optional: Add keyboard navigation
    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowDown":
                scrollContainer.scrollBy(0, window.innerHeight);
                break;
            case "ArrowUp":
                scrollContainer.scrollBy(0, -window.innerHeight);
                break;
        }
    });
});



// document.addEventListener("DOMContentLoaded", () => {
//     const scrollContainer = document.querySelector(".slider-container");
//     const buttons = document.querySelectorAll(".nav-buttons button");
//     const header = document.querySelector("header");

//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             const slideNumber = button.getAttribute("data-slide");
//             const targetSlide = document.getElementById(`slide${slideNumber}`);

//             if (targetSlide) {
//                 let offset = targetSlide.offsetTop;
                
//                 // Якщо перший слайд, враховуємо висоту хедера
//                 if (slideNumber === '1') {
//                     offset -= header.offsetHeight;
//                 }

//                 scrollContainer.scrollTo({
//                     top: Math.max(offset, 0),
//                     behavior: 'smooth'
//                 });
//             } else {
//                 console.warn(`Slide ${slideNumber} not found!`);
//             }
//         });
//     });

//     scrollContainer.addEventListener("wheel", (e) => {
//         e.preventDefault();
//         if (e.deltaY > 0) {
//             scrollContainer.scrollBy(0, window.innerHeight);
//         } else {
//             scrollContainer.scrollBy(0, -window.innerHeight);
//         }
//     });

//     // Optional: Add keyboard navigation
//     document.addEventListener("keydown", (e) => {
//         switch (e.key) {
//             case "ArrowDown":
//                 scrollContainer.scrollBy(0, window.innerHeight);
//                 break;
//             case "ArrowUp":
//                 scrollContainer.scrollBy(0, -window.innerHeight);
//                 break;
//         }
//     });
// });




// document.addEventListener("DOMContentLoaded", () => {
//     const scrollContainer = document.querySelector(".slider-container");
//     const buttons = document.querySelectorAll(".nav-buttons button");
//     const header = document.querySelector("header");

//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             const slideNumber = button.getAttribute("data-slide");
//             const targetSlide = document.getElementById(`slide${slideNumber}`);

//             if (targetSlide) {
//                 let offset = targetSlide.offsetTop;

//                 // Only adjust the offset for the first slide
//                 if (slideNumber === '1') {
//                     offset -= header.offsetHeight;
//                 }

//                 scrollContainer.scrollTo({
//                     top: Math.max(offset, 0),
//                     behavior: 'smooth'
//                 });
//             } else {
//                 console.warn(`Slide ${slideNumber} not found!`);
//             }
//         });
//     });

//     scrollContainer.addEventListener("wheel", (e) => {
//         e.preventDefault();
//         if (e.deltaY > 0) {
//             scrollContainer.scrollBy(0, window.innerHeight);
//         } else {
//             scrollContainer.scrollBy(0, -window.innerHeight);
//         }
//     });

//     // Optional: Add keyboard navigation
//     document.addEventListener("keydown", (e) => {
//         switch (e.key) {
//             case "ArrowDown":
//                 scrollContainer.scrollBy(0, window.innerHeight);
//                 break;
//             case "ArrowUp":
//                 scrollContainer.scrollBy(0, -window.innerHeight);
//                 break;
//         }
//     });
// });




// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".nav-buttons button");

//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             const slideNumber = button.getAttribute("data-slide");
//             const targetSlide = document.getElementById(`slide${slideNumber}`);

//             if (slideNumber === "1") {
//                 // Визначаємо висоту хедера
//                 const headerHeight = document.querySelector("header").offsetHeight;

//                 // Отримуємо точну позицію блоку slide1 відносно початку сторінки
//                 const targetPosition = targetSlide.getBoundingClientRect().top + window.pageYOffset - headerHeight;

//                 // Прокручуємо сторінку до необхідної позиції
//                 window.scrollTo({ top: targetPosition, behavior: 'smooth' });

//             } else {
//                 // Для інших слайдів просто прокручуємо до відповідного блоку
//                 targetSlide.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });

//     // Прокрутка за допомогою колеса миші
//     document.querySelector(".slider-container").addEventListener("wheel", (e) => {
//         e.preventDefault();
//         if (e.deltaY > 0) {
//             window.scrollBy(0, window.innerHeight);
//         } else {
//             window.scrollBy(0, -window.innerHeight);
//         }
//     });

//     // Клавіатурна навігація
//     document.addEventListener("keydown", (e) => {
//         switch (e.key) {
//             case "ArrowDown":
//                 window.scrollBy(0, window.innerHeight);
//                 break;
//             case "ArrowUp":
//                 window.scrollBy(0, -window.innerHeight);
//                 break;
//         }
//     });
// });



