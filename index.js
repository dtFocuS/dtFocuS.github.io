document.addEventListener("DOMContentLoaded", () => {
    main();
    navSlide();

    const slider = document.querySelector(".slider");
    const hero = document.querySelector(".hero");
    const logo = document.querySelector(".logo");
    // const navLinks = document.querySelector(".nav-links");
    const headline = document.querySelector(".headline");

    const tl = new TimelineMax();


    tl.fromTo(
        hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut }
    ).fromTo(
        hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut }
    ).fromTo(
        slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut },
        "-=1.2"
    ).fromTo(
        logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5"
    ).fromTo(
        navLinks, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5"
    ).fromTo(
        headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5"
    )


})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })

        //Burger Animation
        burger.classList.toggle('toggle');
            
    })

    
}

function main() {
    setInterval(switchText, 2000);
}

function switchText() {
    
    let infoSection = document.querySelector(".center-info");
    let cur = infoSection.querySelector('p');
    let word = cur.querySelector('span');
    if (word.textContent === "hello") {
        word.textContent = "world";
    } else {
        word.textContent = "hello";
    }
}





