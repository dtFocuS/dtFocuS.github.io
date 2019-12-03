document.addEventListener("DOMContentLoaded", () => {
    main();


    const slider = document.querySelector(".slider");
    const hero = document.querySelector(".hero");
    const logo = document.querySelector(".logo");
    const menu = document.querySelector(".menu");

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
        menu, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5"
    )


})

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

