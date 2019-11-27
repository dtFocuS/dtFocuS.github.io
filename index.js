document.addEventListener("DOMContentLoaded", () => {
    main();


    const slider = document.querySelector(".slider");
    const center = document.querySelector(".center-info");

    const tl = new TimelineMax();


    tl.fromTo(center, 1, {height: "0%"}, {height: "80%"});


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

