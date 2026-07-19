// ==========================
// MOBILE MENU
// ==========================
window.addEventListener("load",()=>{

const hero=document.querySelector(".hero");

const elements=document.querySelectorAll(".hero-content>*");

setTimeout(()=>{

hero.classList.add("loaded");

elements.forEach((element,index)=>{

setTimeout(()=>{

element.style.transition="all .8s ease";

element.style.opacity="1";

element.style.transform="translateY(0)";

},index*180);

});

},900);

});


const cards=document.querySelectorAll(".floating-card");

cards.forEach((card,index)=>{

setTimeout(()=>{

card.style.transition="all .9s ease";

card.style.opacity="1";

card.style.transform="translateY(0)";

},1500+(index*300));

});


setTimeout(()=>{

document.querySelector(".navbar").classList.add("show");

},700);




//=========================
//  BURGER-MENU
//=========================

const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});






// ==========================
// CLOSE MENU WHEN LINK CLICKED
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});





//=========================
//    STATISTICS
//=========================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;
        const speed = 100;
        const increment = Math.ceil(target / speed);

        let count = 0;

        const updateCounter = () => {

            count += increment;

            if (count >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {
    threshold:0.4
});

counters.forEach(counter => {
    observer.observe(counter);
});
